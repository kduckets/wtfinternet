"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import { db } from "../../lib/firebase"
import { collection, addDoc, query, where, orderBy, onSnapshot, limit } from "firebase/firestore"

interface Comment {
  id: string
  text: string
  userName: string
  createdAt: Date
}

interface CommentsProps {
  milestoneId: string
}

export default function Comments({ milestoneId }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState("")
  const [userName, setUserName] = useState("")

  useEffect(() => {
    const q = query(
      collection(db, "comments"),
      where("milestoneId", "==", milestoneId),
      orderBy("createdAt", "desc"),
      limit(50), // Limit the number of comments fetched
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedComments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Comment[]
      setComments(fetchedComments)
    })

    return () => unsubscribe()
  }, [milestoneId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      await addDoc(collection(db, "comments"), {
        text: newComment,
        userName: userName.trim() || "Anonymous",
        milestoneId,
        createdAt: new Date(),
      })
      setNewComment("")
      setUserName("")
    }
  }

  return (
    <div className="mt-6">
      <h3 className="font-bold text-gray-700 mb-4">Comments</h3>
      <AnimatePresence>
        {comments.map((comment) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-100 p-3 rounded-lg mb-2"
          >
            <p className="font-semibold">{comment.userName}</p>
            <p>{comment.text}</p>
          </motion.div>
        ))}
      </AnimatePresence>
      <form onSubmit={handleSubmit} className="mt-4 space-y-2">
        <Input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Your name (optional)"
          className="w-full"
        />
        <div className="flex gap-2">
          <Input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-grow"
          />
          <Button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

