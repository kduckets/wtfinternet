"use client"

import { useState, useCallback, useMemo } from "react"
import Timeline from "./components/Timeline"
import FilterBar from "./components/FilterBar"
import ScrollToTopButton from "./components/ScrollToTopButton"
import { milestones, categoryGroups } from "../data/milestones"
import SearchBox from "./components/SearchBox"

export default function Home() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  const handleToggleCategory = useCallback((category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }, [])

  const handleCategoryClick = useCallback((category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }, [])

  const handleClearAll = useCallback(() => {
    setSelectedCategories([])
    setSearchQuery("")
  }, [])

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query)
  }, [])

  const filteredMilestones = useMemo(() => {
    return milestones.filter((milestone) => {
      const matchesCategories =
        selectedCategories.length === 0 ||
        milestone.categories.some((category) => selectedCategories.includes(category))

      const matchesSearch =
        searchQuery === "" ||
        milestone.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        milestone.description.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCategories && matchesSearch
    })
  }, [selectedCategories, searchQuery])

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-mono">
        What the fuck is the internet?
        </h1>
        <p className="text-center text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
        Might be a good time to retrace our steps. Each internet milestone on the timeline contains its profit model and impact. 
        </p>
        <SearchBox onSearch={handleSearch} />
        <FilterBar
          categoryGroups={categoryGroups}
          selectedCategories={selectedCategories}
          onToggleCategory={handleToggleCategory}
          onClearAll={handleClearAll}
        />
    <Timeline
          milestones={filteredMilestones}
          filteredCategories={selectedCategories}
          onCategoryClick={handleCategoryClick}
        />      
        </div>
      <ScrollToTopButton />
    </main>
  )
}

