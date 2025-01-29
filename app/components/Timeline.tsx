"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import type { Milestone } from "../../data/milestones"
import MilestoneCard from "./MilestoneCard"
import InfiniteScroll from "./InfiniteScroll"
import { motion, AnimatePresence } from "framer-motion"

interface TimelineProps {
  milestones: Milestone[]
  filteredCategories: string[]
}

const ITEMS_PER_PAGE = 10

function groupMilestonesByDecade(milestones: Milestone[]): [string, Milestone[]][] {
  const grouped = milestones.reduce(
    (acc, milestone) => {
      const decade = Math.floor(milestone.year / 10) * 10
      if (!acc[decade]) {
        acc[decade] = []
      }
      acc[decade].push(milestone)
      return acc
    },
    {} as Record<number, Milestone[]>,
  )

  return Object.entries(grouped)
    .sort(([a], [b]) => Number(a) - Number(b)) // Sort decades in ascending order
    .map(([decade, milestones]) => [
      `${decade}s`,
      milestones.sort((a, b) => a.year - b.year), // Sort milestones within each decade
    ])
}

export default function Timeline({ milestones, filteredCategories }: TimelineProps) {
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE)
  const prevDisplayCountRef = useRef(displayCount)

  const filteredMilestones =
    filteredCategories.length === 0
      ? milestones
      : milestones.filter((m) => m.categories.some((cat) => filteredCategories.includes(cat)))

  // Sort all milestones chronologically before grouping
  const sortedMilestones = [...filteredMilestones].sort((a, b) => a.year - b.year)
  const groupedMilestones = groupMilestonesByDecade(sortedMilestones.slice(0, displayCount))

  const loadMore = useCallback(() => {
    setDisplayCount((prevCount) => prevCount + ITEMS_PER_PAGE)
  }, [])

  useEffect(() => {
    setDisplayCount(ITEMS_PER_PAGE)
  }, [])

  useEffect(() => {
    prevDisplayCountRef.current = displayCount
  }, [displayCount])

  const isNewlyLoaded = (index: number) => index >= prevDisplayCountRef.current

  return (
    <div className="relative">
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <AnimatePresence initial={false}>
        <div className="space-y-6 md:space-y-16">
          {groupedMilestones.map(([decade, decadeMilestones], decadeIndex) => (
            <div key={decade}>
              <motion.h2
                className="text-2xl font-bold mb-4 text-center md:hidden bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: decadeIndex * 0.1 }}
              >
                {decade}
              </motion.h2>
              {decadeMilestones.map((milestone, index) => (
                <motion.div
                  key={milestone.id}
                  initial={isNewlyLoaded(index) ? { opacity: 0, y: 50 } : false}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{
                    duration: 0.5,
                    delay: isNewlyLoaded(index) ? (index % ITEMS_PER_PAGE) * 0.1 : 0,
                  }}
                >
                  <MilestoneCard milestone={milestone} isLeft={index % 2 === 0} />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </AnimatePresence>
      <InfiniteScroll onLoadMore={loadMore} hasMore={displayCount < filteredMilestones.length} />
    </div>
  )
}

