import { FormEvent, useEffect, useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us | Solvarch";
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <main className="bg-slate-50 pb-24 pt-10">
      <section className="mx-auto max-w-6xl px-4 md:grid md:grid-cols-2 md:gap-10">
        <div className="mb-10 md:mb-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">
            Contact
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Let&apos;s talk.
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Share a few details about your environment and goals, and we&apos;ll
            follow up with practical next steps. No pressure, no jargon.
          </p>

          <div className="mt-6 space-y-3 text-sm text-slate-700">
            <p>Email: hello@solvarch.com.au</p>
            <p>Phone: (02) 0000 0000</p>
            <p>Location: Sydney, NSW</p>
          </div>

          <ul className="mt-6 space-y-2 text-sm text-slate-600">
            <li>• No hard sell – just clear options.</li>
            <li>• Advice from senior engineers, not call-centre scripts.</li>
            <li>• We can start with a quick health check or roadmap session.</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70">
          {submitted ? (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-6 text-sm font-medium text-emerald-800">
              Thanks! We&apos;ll be in touch in 15 mins.
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label className="block text-xs font-semibold text-slate-700">
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700">
                  Work email
                </label>
                <input
                  type="email"
                  name="email"
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700">
                  Company name
                </label>
                <input
                  type="text"
                  name="company"
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700">
                  Employee count
                </label>
                <select
                  name="employeeCount"
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                >
                  <option>1–10</option>
                  <option>11–50</option>
                  <option>50+</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700">
                  Primary pain point
                </label>
                <select
                  name="painPoint"
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                >
                  <option>Frequent issues / downtime</option>
                  <option>Security and compliance</option>
                  <option>Cloud / Microsoft 365</option>
                  <option>Strategy and planning</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
              </div>
              <button
                type="submit"
                className="mt-2 w-full rounded-2xl bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/40 hover:bg-cyan-600"
              >
                Request consultation
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

export default Contact;
