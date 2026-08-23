import sendIcon from "@iconify-icons/ph/paper-plane-tilt-fill";
import { Icon } from "@iconify/react";
import { useEffect, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";

const inputClass =
  "w-full rounded-xs border border-outline-variant/30 bg-surface-container-highest/40 px-4 py-3 font-body-md text-body-md text-on-surface transition-colors placeholder:text-outline focus:border-primary focus:bg-surface-container-highest/60 focus:outline-none focus:ring-1 focus:ring-primary";

// Web3Forms sends the submission straight to the inbox tied to this access
// key — no backend of our own needed. Get a free key at web3forms.com (it's
// meant to be public/client-exposed, same idea as a reCAPTCHA site key) and
// set it as VITE_WEB3FORMS_ACCESS_KEY (see README).
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as
  | string
  | undefined;

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "sent" | "error"
  >("idle");
  const [time, setTime] = useState(5);

  // Ticks the countdown down once per second while the success message is
  // showing, then resets the form back to idle (and the timer back to 5,
  // ready for next time) once it hits 0.
  useEffect(() => {
    if (status !== "sent") return;

    if (time <= 0) {
      setStatus("idle");
      setTime(5);
      return;
    }

    const timer = setTimeout(() => setTime((current) => current - 1), 1000);
    return () => clearTimeout(timer);
  }, [status, time]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      console.error(
        "VITE_WEB3FORMS_ACCESS_KEY is not set — get a free access key at web3forms.com and add it to your .env (see README).",
      );
      setStatus("error");
      return;
    }

    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    if (!data.get("subject")) {
      data.set("subject", `Portfolio contact from ${data.get("name")}`);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await response.json();
      if (result.success) {
        setStatus("sent");
        form.reset();
      } else {
        console.error("Web3Forms submission failed:", result.message);
        setStatus("error");
      }
    } catch (error) {
      console.error("Web3Forms request failed:", error);
      setStatus("error");
    }
  };

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
        <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
          Redirecting back in {time}s
        </p>
      </div>
    );
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
              NAME <span className="text-primary">*</span>
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
              EMAIL <span className="text-primary">*</span>
            </label>
            <input
              id="email"
              name="email"
              // type="email"
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
              COMPANY <span className="text-primary">*</span>
            </label>
            <input
              id="company"
              name="company"
              type="text"
              required
              placeholder="Tech Corp"
              className={inputClass}
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="block font-label-mono text-label-mono text-on-surface-variant"
            >
              SUBJECT<span className="text-primary">*</span>
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="What's this about?"
              className={inputClass}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block font-label-mono text-label-mono text-on-surface-variant"
          >
            MESSAGE<span className="text-primary">*</span>
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
          <p
            className={
              "max-w-[260px] font-label-mono text-label-mono text-xs sm:max-w-none text-error"
            }
          >
            {status === "error"
              ? "Something went wrong — please try again, or email me directly."
              : ""}
          </p>
          <Button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending…" : "Send Message"}
            <Icon icon={sendIcon} className="size-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}
