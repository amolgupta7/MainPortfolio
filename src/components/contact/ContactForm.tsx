import { useState, type FormEvent } from "react"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"

const subjects = [
  { value: "engineering", label: "Engineering Role" },
  { value: "consulting", label: "Architecture Consulting" },
  { value: "photography", label: "Photography Project" },
  { value: "other", label: "Other Inquiry" },
]

const inputClass =
  "w-full rounded-xs border border-outline-variant/30 bg-surface-container-highest/40 px-4 py-3 font-body-md text-body-md text-on-surface transition-colors placeholder:text-outline focus:border-primary focus:bg-surface-container-highest/60 focus:outline-none focus:ring-1 focus:ring-primary"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle")

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus("submitting")
    // No backend is wired up yet — see README for how to connect one.
    window.setTimeout(() => setStatus("sent"), 600)
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="glass-panel rounded-lg p-6 text-center md:p-8"
      >
        <p className="font-headline-sm text-headline-sm text-on-surface">
          Message received.
        </p>
        <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
          Thanks for reaching out — I&rsquo;ll get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <div className="glass-panel rounded-lg p-6 md:p-8">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block font-label-mono text-label-mono text-on-surface-variant"
            >
              NAME
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Jane Doe"
              className={inputClass}
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block font-label-mono text-label-mono text-on-surface-variant"
            >
              EMAIL
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="jane@example.com"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="company"
              className="block font-label-mono text-label-mono text-on-surface-variant"
            >
              COMPANY <span className="text-outline-variant">(OPTIONAL)</span>
            </label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Tech Corp"
              className={inputClass}
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="block font-label-mono text-label-mono text-on-surface-variant"
            >
              SUBJECT
            </label>
            <select
              id="subject"
              name="subject"
              className={`${inputClass} appearance-none`}
              defaultValue={subjects[0].value}
            >
              {subjects.map((subject) => (
                <option key={subject.value} value={subject.value}>
                  {subject.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block font-label-mono text-label-mono text-on-surface-variant"
          >
            MESSAGE
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="How can I help you?"
            className={`${inputClass} min-h-[120px] resize-y`}
          />
        </div>

        <div className="flex flex-col items-start gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[220px] font-label-mono text-label-mono text-xs text-outline sm:max-w-none">
            SECURE TRANSMISSION // E2E ENCRYPTED
          </p>
          <Button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending…" : "Send Message"}
            <Send className="size-4" />
          </Button>
        </div>
      </form>
    </div>
  )
}
