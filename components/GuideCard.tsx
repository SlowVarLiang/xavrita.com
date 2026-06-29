import Link from 'next/link'

interface Guide {
  slug: string
  title: string
  category: string
  excerpt: string
  updatedAt?: string
  date?: string
}

interface GuideCardProps {
  guide: Guide
}

export default function GuideCard({ guide }: GuideCardProps) {
  return (
    <Link
      href={`/guides/${guide.slug}/`}
      className="group block bg-surface border border-border rounded-xl p-5 hover:border-accent-violet/50 transition-all duration-200 hover:shadow-lg hover:shadow-accent-violet/5 hover:-translate-y-0.5"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="px-2 py-1 bg-accent-violet/10 text-accent-violet text-xs font-medium rounded">
          {guide.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display font-semibold text-text-primary group-hover:text-white mb-2 transition-colors line-clamp-2">
        {guide.title}
      </h3>

      {/* Excerpt */}
      <p className="text-sm text-text-muted leading-relaxed line-clamp-2 mb-3">
        {guide.excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-text-muted font-mono">
          {guide.updatedAt || guide.date}
        </span>
        <span className="text-xs text-accent-cyan opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
          Read →
        </span>
      </div>
    </Link>
  )
}
