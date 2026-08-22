import { caseStudy, tableOfContents } from "@/data/caseStudy"

export function TableOfContents() {
  return (
    <div className="relative col-span-4 hidden md:block">
      <div className="sticky top-24 space-y-8 border-l border-outline-variant/30 pl-gutter">
        <div>
          <h4 className="mb-4 font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant">
            Contents
          </h4>
          <nav className="flex flex-col space-y-3 text-sm" aria-label="Case study sections">
            {tableOfContents.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={
                  index === 0
                    ? "text-on-surface transition-colors hover:text-primary"
                    : "text-on-surface-variant transition-colors hover:text-primary"
                }
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t border-outline-variant/30 pt-8">
          <h4 className="mb-4 font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant">
            Team
          </h4>
          <ul className="space-y-2 text-sm text-on-surface-variant">
            {caseStudy.team.map((member) => (
              <li key={member}>{member}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
