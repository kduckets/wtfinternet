"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronUp } from "lucide-react"
import Dropdown from "./Dropdown"
import type { CategoryGroup } from "../../data/milestones"

interface FilterBarProps {
  categoryGroups: CategoryGroup[]
  selectedCategories: string[]
  onToggleCategory: (category: string) => void
}

export default function FilterBar({ categoryGroups, selectedCategories, onToggleCategory }: FilterBarProps) {
  const [openGroups, setOpenGroups] = useState<string[]>([])

  const toggleGroup = (groupName: string) => {
    setOpenGroups((prev) =>
      prev.includes(groupName) ? prev.filter((name) => name !== groupName) : [...prev, groupName],
    )
  }

  return (
    <div className="mb-6 bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
        Filter Milestones
      </h2>
      <div className="md:hidden">
        <Dropdown categoryGroups={categoryGroups} selectedCategories={selectedCategories} onToggle={onToggleCategory} />
      </div>
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
        {categoryGroups.map((group) => (
          <Collapsible
            key={group.name}
            open={openGroups.includes(group.name)}
            onOpenChange={() => toggleGroup(group.name)}
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-between bg-gray-700 text-white hover:bg-gray-600 border-gray-600"
              >
                {group.name}
                {openGroups.includes(group.name) ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 space-y-2">
              {group.categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => onToggleCategory(category)}
                  variant={selectedCategories.includes(category) ? "default" : "outline"}
                  className={`w-full text-sm ${
                    selectedCategories.includes(category)
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white border-gray-600"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  )
}

