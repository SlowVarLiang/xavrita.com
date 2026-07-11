'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/?search=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF9]/95 backdrop-blur-sm border-b border-[#E7E5E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <svg className="w-9 h-9" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="4" width="20" height="14" rx="2" fill="#22C55E"/>
              <polygon points="13,8 13,14 19,11" fill="#1C1917"/>
              <rect x="6" y="20" width="20" height="8" rx="1" fill="#374151"/>
              <circle cx="11" cy="24" r="2" fill="#6B7280"/>
              <rect x="10.3" y="20" width="1.4" height="5" rx="0.5" fill="#9CA3AF"/>
              <circle cx="18" cy="23" r="1.2" fill="#EF4444"/>
              <circle cx="22" cy="25" r="1.2" fill="#3B82F6"/>
            </svg>
            <span className="font-display font-bold text-xl text-[#1C1917] group-hover:text-[#F97316] transition-colors">
              Xavrito
            </span>
          </Link>

          {/* Search */}
          <form onSubmit={handleSearch} className="flex-1 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E7E5E4] rounded-xl text-sm text-[#1C1917] placeholder:text-[#78716C] focus:outline-none focus:ring-2 focus:ring-[#F97316]/20 focus:border-[#F97316] transition-all"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#78716C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </form>

          {/* Stats */}
          <div className="hidden md:flex items-center gap-4 text-sm flex-shrink-0">
            <span className="text-[#78716C]">
              <strong className="text-[#1C1917]">50</strong> games
            </span>
            <Link
              href="/"
              className="px-4 py-2 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-lg text-sm font-medium transition-colors shadow-md"
            >
              Play Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
