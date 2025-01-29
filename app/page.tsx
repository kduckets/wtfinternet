"use client"

import { useState, useCallback } from "react"
import Timeline from "./components/Timeline"
import FilterBar from "./components/FilterBar"
import ScrollToTopButton from "./components/ScrollToTopButton"
import { milestones, categoryGroups } from "../data/milestones"

export default function Home() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const handleToggleCategory = useCallback((category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }, [])

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          What the fuck is the internet?
        </h1>
        <p className="text-center text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
        Might be a good time to retrace our steps. Each internet milestone on the timeline contains its profit model and impact. 
        </p>
        <FilterBar
          categoryGroups={categoryGroups}
          selectedCategories={selectedCategories}
          onToggleCategory={handleToggleCategory}
        />
        <Timeline milestones={milestones} filteredCategories={selectedCategories} />
      </div>
      <ScrollToTopButton />
    </main>
  )
}

