import { Icon } from "@iconify/react"
import arrowRightIcon from "@iconify-icons/ph/arrow-right-fill"

import { SocialIcon } from "@/components/ui/SocialIcon"
import { site } from "@/data/site"

const links = [
  {
    label: "EMAIL",
    value: site.email,
    href: `mailto:${site.email}`,
    iconLabel: "Email",
  },
  {
    label: "WHATSAPP",
    value: site.phone,
    href: site.whatsapp,
    iconLabel: "WhatsApp",
  },
  {
    label: "LINKEDIN",
    value: site.linkedinHandle,
    href: site.linkedin,
    iconLabel: "LinkedIn",
  },
  {
    label: "GITHUB",
    value: site.githubHandle,
    href: site.github,
    iconLabel: "GitHub",
  },
]

export function ContactSidebar() {
  return (
    <div className="mt-8 flex flex-col gap-6 lg:mt-0">
      <div className="glass-panel rounded-lg border-l-2 border-l-primary p-6">
        <div className="flex items-start gap-4">
          <span className="relative mt-1 flex size-3" aria-hidden="true">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-3 rounded-full bg-primary" />
          </span>
          <div>
            <h2 className="mb-2 font-label-mono text-label-mono uppercase text-on-surface">
              Current Status
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Currently employed full-time as a Senior Software Engineer at
              Visa. Open to hearing about interesting opportunities and
              select consulting work.
            </p>
          </div>
        </div>
      </div>

      <div className="glass-panel flex-grow rounded-lg p-6">
        <h2 className="mb-6 border-b border-outline-variant/30 pb-2 font-label-mono text-label-mono uppercase text-on-surface">
          Connect
        </h2>
        <ul className="space-y-4">
          {links.map(({ label, value, href, iconLabel }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center gap-4 text-on-surface-variant transition-colors hover:text-primary"
              >
                <SocialIcon
                  label={iconLabel}
                  className="size-5 text-on-surface-variant transition-colors group-hover:text-primary"
                />
                <div className="flex-grow">
                  <p className="font-label-mono text-[11px] text-outline transition-colors group-hover:text-primary/70">
                    {label}
                  </p>
                  <p className="font-body-md text-body-md">{value}</p>
                </div>
                <Icon
                  icon={arrowRightIcon}
                  className="size-4 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 border-t border-outline-variant/30 pt-6">
          <p className="mb-2 font-label-mono text-[11px] text-outline">
            LOCATION
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {site.location}
            <br />
            {site.timezone}
          </p>
        </div>
      </div>
    </div>
  )
}
