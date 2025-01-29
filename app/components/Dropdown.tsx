"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import type { CategoryGroup } from "../../data/milestones"

interface DropdownProps {
  categoryGroups: CategoryGroup[]
  selectedCategories: string[]
  onToggle: (category: string) => void
  onClearAll: () => void
}

export default function Dropdown({ categoryGroups, selectedCategories, onToggle, onClearAll }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-between bg-gray-700 text-white hover:bg-gray-600 border-gray-600"
        >
          {selectedCategories.length > 0
            ? `${selectedCategories.length} filter${selectedCategories.length > 1 ? "s" : ""} selected`
            : "Filter by category"}
          {isOpen ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full max-h-[60vh] overflow-auto bg-gray-800 border border-gray-700">
        {selectedCategories.length > 0 && (
          <>
            <DropdownMenuItem onSelect={onClearAll} className="text-red-500 hover:text-red-400 hover:bg-gray-700">
              Clear All Filters
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-gray-700" />
          </>
        )}
        {categoryGroups.map((group, index) => (
          <div key={group.name}>
            {index > 0 && <DropdownMenuSeparator className="bg-gray-700" />}
            <DropdownMenuLabel className="text-blue-400 font-bold">{group.name}</DropdownMenuLabel>
            {group.categories.map((category) => (
              <DropdownMenuItem
                key={category}
                onSelect={() => onToggle(category)}
                className={`flex items-center justify-between ${
                  selectedCategories.includes(category)
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {category}
                {selectedCategories.includes(category) && <Check className="h-4 w-4" />}
              </DropdownMenuItem>
            ))}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

