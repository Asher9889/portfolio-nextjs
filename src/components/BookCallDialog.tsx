"use client";

import { FormEvent, useEffect, useState } from "react";
import { X, ArrowUpRight, Clock3, MessageSquareText, PhoneCall } from "lucide-react";

const WHATSAPP_NUMBER = "9889840089";

type BookingFormState = {
  name: string;
  email: string;
  company: string;
  timezone: string;
  preferredTime: string;
  goal: string;
  notes: string;
};

const initialFormState: BookingFormState = {
  name: "",
  email: "",
  company: "",
  timezone: "Asia/Kolkata",
  preferredTime: "",
  goal: "Discovery call",
  notes: "",
};

export default function BookCallDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState<BookingFormState>(initialFormState);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setForm((current) => ({ ...current, goal: current.goal || "Discovery call" }));
    }
  }, [open]);

  if (!open) return null;

  const updateField = (field: keyof BookingFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "Hi, I'd like to book a call.",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company ? `Company: ${form.company}` : null,
      `Timezone: ${form.timezone}`,
      form.preferredTime ? `Preferred time: ${form.preferredTime}` : null,
      `Call type: ${form.goal}`,
      form.notes ? `Details: ${form.notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    onClose();
    setForm(initialFormState);
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center px-4 py-6 sm:px-6">
      <button
        aria-label="Close booking dialog"
        className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-black/10 bg-[#f8f5ef] text-black shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_1fr]">
          <aside className="relative overflow-hidden bg-[#121212] px-6 py-7 text-white sm:px-8 sm:py-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(232,184,75,0.18),transparent_30%)]" />
            <div className="relative flex h-full flex-col justify-between gap-10">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium uppercase tracking-[0.28em] text-white/60">Book a call</div>
                <button
                  type="button"
                  onClick={onClose}
                  className="cursor-pointer inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white/90 transition hover:bg-white/12"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="max-w-md space-y-5">
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Tell me what you want to build, then send it straight to WhatsApp.</h2>
                <p className="max-w-sm text-sm leading-6 text-white/72 sm:text-base">
                  Fill in the details, and I’ll get a complete booking note with your preferred time, timezone, and project scope. No dead-end form, no waiting for a backend.
                </p>
              </div>

              <div className="grid gap-3 text-sm text-white/72 sm:grid-cols-3 sm:gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <PhoneCall size={18} className="mb-3 text-[#E8B84B]" />
                  Discovery call
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Clock3 size={18} className="mb-3 text-[#9dffca]" />
                  Timezone aware
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <MessageSquareText size={18} className="mb-3 text-[#9dffca]" />
                  Prefilled message
                </div>
              </div>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="px-6 py-7 sm:px-8 sm:py-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 sm:col-span-1">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-black/50">Name</span>
                <input
                  required
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-black/30 focus:border-black/25"
                  placeholder="Your name"
                />
              </label>

              <label className="space-y-2 sm:col-span-1">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-black/50">Email</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-black/30 focus:border-black/25"
                  placeholder="name@example.com"
                />
              </label>

              <label className="space-y-2 sm:col-span-1">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-black/50">Company</span>
                <input
                  value={form.company}
                  onChange={(event) => updateField("company", event.target.value)}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-black/30 focus:border-black/25"
                  placeholder="Optional"
                />
              </label>

              <label className="space-y-2 sm:col-span-1">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-black/50">Goal</span>
                <select
                  value={form.goal}
                  onChange={(event) => updateField("goal", event.target.value)}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-black/25"
                >
                  <option>Discovery call</option>
                  <option>Project quote</option>
                  <option>Website redesign</option>
                  <option>Product UI review</option>
                  <option>Maintenance or support</option>
                </select>
              </label>

              <label className="space-y-2 sm:col-span-1">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-black/50">Timezone</span>
                <input
                  value={form.timezone}
                  onChange={(event) => updateField("timezone", event.target.value)}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-black/30 focus:border-black/25"
                  placeholder="Asia/Kolkata"
                />
              </label>

              <label className="space-y-2 sm:col-span-1">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-black/50">Preferred time</span>
                <input
                  value={form.preferredTime}
                  onChange={(event) => updateField("preferredTime", event.target.value)}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-black/30 focus:border-black/25"
                  placeholder="Tue 3-5 PM"
                />
              </label>

              <label className="space-y-2 sm:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-black/50">Project details</span>
                <textarea
                  required
                  rows={5}
                  value={form.notes}
                  onChange={(event) => updateField("notes", event.target.value)}
                  className="w-full rounded-[1.25rem] border border-black/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-black/30 focus:border-black/25"
                  placeholder="Tell me what you want to build, the timeline, and any links that help."
                />
              </label>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-black/50">
                Clicking send opens WhatsApp with your booking note already written.
              </p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-black/70 transition hover:bg-black/5"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-[#121212] px-5 py-3 text-sm font-medium text-white transition hover:bg-black"
                >
                  Send on WhatsApp
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
