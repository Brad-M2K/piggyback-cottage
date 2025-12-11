import { Mail } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="max-w-5xl mx-auto bg-white/40 border border-muted-sage/20 rounded-3xl shadow-sm backdrop-blur p-8 md:p-12 space-y-6">
      <div className="space-y-2 text-center">
        <p className="uppercase tracking-[0.18em] text-xs text-slate/70">
          Plan Your Stay
        </p>
        <div className="flex items-center justify-center gap-3">
          <Mail className="h-6 w-6 text-forest" aria-hidden="true" />
          <h2 className="text-3xl md:text-4xl font-serif text-forest">
            Send an Enquiry
          </h2>
        </div>
        <p className="text-slate max-w-3xl mx-auto">
          Share your dates and details and we&apos;ll confirm availability. We
          typically reply within one business day.
        </p>
      </div>

      <form
        className="grid gap-4 md:grid-cols-2"
        action="https://formspree.io/f/mqarglye"
        method="POST"
      >
        <div className="space-y-2">
          <label className="text-sm font-medium text-forest" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-xl border border-muted-sage/30 bg-cream/50 px-4 py-3 text-forest placeholder:text-slate/50 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition"
            placeholder="Your name"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-forest" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-muted-sage/30 bg-cream/50 px-4 py-3 text-forest placeholder:text-slate/50 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition"
            placeholder="you@example.com"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-forest" htmlFor="phone">
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            className="w-full rounded-xl border border-muted-sage/30 bg-cream/50 px-4 py-3 text-forest placeholder:text-slate/50 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition"
            placeholder="Best number to reach you"
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium text-forest" htmlFor="message">
            Dates &amp; details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full rounded-xl border border-muted-sage/30 bg-cream/50 px-4 py-3 text-forest placeholder:text-slate/50 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition"
            placeholder="Preferred dates, number of guests, dogs, any questions..."
          />
        </div>
        <div className="md:col-span-2 flex flex-col gap-2">
          <button
            type="submit"
            className="inline-flex justify-center items-center gap-2 rounded-full bg-forest px-6 py-3 text-cream font-semibold hover:bg-heather transition-colors duration-200 shadow-md"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Send enquiry
          </button>
          <p className="text-xs text-slate">
            Replace the form <code>action</code> with your Formspree endpoint to
            wire this up.
          </p>
        </div>
      </form>
    </div>
  );
}
