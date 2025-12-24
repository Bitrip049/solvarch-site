import { useEffect, useState } from "react";
import logo from "./assets/solvarch-logo.jpg";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "How do you tailor IT to our business?",
    answer:
      "We start with a short discovery about your team, systems, and goals, then design a roadmap that fits your risk profile, budget, and pace of change.",
  },
  {
    question: "Can you help us use AI safely?",
    answer:
      "Yes. We help you identify realistic AI use cases, set up the right tools, and train your team so AI is secure, compliant, and genuinely useful.",
  },
  {
    question: "Do you fully manage our IT?",
    answer:
      "Solvarch can act as your outsourced IT department – from helpdesk and devices, to security, backups, and strategic guidance.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We support businesses across Sydney and surrounding regions with remote-first support and on-site visits when needed.",
  },
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>(faqs[0]?.question ?? null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Solvarch | Enterprise Managed IT Sydney";
  }, []);

  const navTo = (hash: string) => {
    setMobileOpen(false);
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = hash;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Solvarch logo"
              className="h-14 w-14 rounded-2xl object-cover shadow-lg shadow-cyan-500/30"
            />
            <div className="leading-tight">
              <div className="text-sm font-extrabold uppercase tracking-wide text-slate-900">
                Solvarch
              </div>
              <div className="text-[11px] text-slate-500">
                Managed IT Services • Cloud • Cybersecurity
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-4 text-sm font-medium text-slate-700 lg:flex">
            <a
              href="#services"
              className="hover:text-slate-900"
              onClick={(e) => {
                e.preventDefault();
                navTo("#services");
              }}
            >
              Services
            </a>
            <a
              href="#ai"
              className="hover:text-slate-900"
              onClick={(e) => {
                e.preventDefault();
                navTo("#ai");
              }}
            >
              AI Enablement
            </a>
            <a
              href="#outcomes"
              className="hover:text-slate-900"
              onClick={(e) => {
                e.preventDefault();
                navTo("#outcomes");
              }}
            >
              Business Outcomes
            </a>
            <a
              href="#case-studies"
              className="hover:text-slate-900"
              onClick={(e) => {
                e.preventDefault();
                navTo("#case-studies");
              }}
            >
              Case Studies
            </a>
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="#contact"
              className="rounded-2xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/40 hover:bg-cyan-600"
            >
              Book discovery call
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-3 py-2 text-slate-700 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="text-2xl">☰</span>
          </button>
        </div>

        {mobileOpen && (
          <div className="relative z-50 border-t border-slate-200 bg-white lg:hidden">
            <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 text-sm font-medium text-slate-700">
              <a
                href="#services"
                className="py-1"
                onClick={(e) => {
                  e.preventDefault();
                  navTo("#services");
                }}
              >
                Services
              </a>
              <a
                href="#ai"
                className="py-1"
                onClick={(e) => {
                  e.preventDefault();
                  navTo("#ai");
                }}
              >
                AI Enablement
              </a>
              <a
                href="#outcomes"
                className="py-1"
                onClick={(e) => {
                  e.preventDefault();
                  navTo("#outcomes");
                }}
              >
                Business Outcomes
              </a>
              <a
                href="#case-studies"
                className="py-1"
                onClick={(e) => {
                  e.preventDefault();
                  navTo("#case-studies");
                }}
              >
                Case Studies
              </a>
              <a
                href="#contact"
                className="mt-2 rounded-xl bg-cyan-500 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-cyan-600"
                onClick={(e) => {
                  e.preventDefault();
                  navTo("#contact");
                }}
              >
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="relative pb-32">
        {/* Hero */}
        <section id="top" className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-16 lg:grid-cols-2 lg:py-24">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Sydney&apos;s trusted IT partner
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                Enterprise-grade IT support for Sydney businesses.
              </h1>

              <p className="max-w-xl text-sm text-slate-600 md:text-base">
                We help Sydney businesses reduce downtime, strengthen cybersecurity, and get
                more from cloud and AI – with practical, business-first IT support.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-2xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/40 hover:bg-cyan-600"
                >
                  Book discovery call
                </a>
                <a
                  href="#services"
                  className="rounded-2xl border border-cyan-200 bg-white px-5 py-2.5 text-sm font-semibold text-cyan-700 hover:border-cyan-300"
                >
                  View services
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Trusted technology partners for growing businesses.</span>
              </div>
            </div>

            <div className="relative mt-12 flex w-full items-center justify-center lg:mt-0">
              <div className="relative h-64 w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-700 p-0.5 shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
                <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-slate-950/90 p-6 text-slate-50">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-cyan-200">
                        Solvarch
                      </p>
                      <p className="text-xs text-slate-400">Security posture</p>
                      <p className="text-lg font-semibold">Improving</p>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-200">
                      🔒
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-xs">
                    <div>
                      <p className="text-slate-400">Tickets resolved</p>
                      <p className="text-base font-semibold">98%</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Avg. response</p>
                      <p className="text-base font-semibold">&lt; 15 mins</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Endpoints</p>
                      <p className="text-base font-semibold">450+</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-slate-900/80 px-4 py-3 text-xs">
                    <div>
                      <p className="text-slate-400">AI monitoring</p>
                      <p className="text-sm font-semibold">Active on core systems</p>
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-200 text-xs">
                      ⚙️
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="border-t border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-6 text-xs text-slate-500">
              <span className="font-medium text-slate-600">Certified &amp; trusted technology partners.</span>
              <div className="flex flex-wrap gap-4">
                {[
                  "Microsoft Solutions Partner",
                  "AWS Aligned",
                  "Security-first operations",
                ].map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-medium text-slate-500 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Difference section */}
        <section id="outcomes" className="bg-slate-100 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-8 max-w-2xl">
              <h2 className="text-2xl font-semibold text-slate-900">The Solvarch Difference</h2>
              <p className="mt-2 text-sm text-slate-600">
                We keep your business running smoothly today while preparing you for
                tomorrow with reliable, future-focused IT.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Solutions that fit",
                  desc: "We design IT that matches your size, risk profile, and industry.",
                },
                {
                  title: "Fewer disruptions",
                  desc: "Proactive monitoring and patching reduce costly downtime.",
                },
                {
                  title: "Future edge",
                  desc: "We help you adopt cloud and AI in practical, secure ways.",
                },
                {
                  title: "Local support",
                  desc: "Sydney-based team that understands how local businesses operate.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600 text-sm">
                    ✨
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-xs text-slate-600">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section id="industries" className="bg-slate-900 py-16 text-slate-50">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Helping organisations stay secure and work smarter.
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                We partner with small to mid-sized organisations that need dependable,
                secure, and future-focused IT.
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                {[
                  "Professional services and legal firms",
                  "Construction and trades with mobile teams",
                  "Financial services and advisory",
                  "Not-for-profits and membership organisations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 text-cyan-400">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <div className="h-56 w-full max-w-md rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-0.5">
                <div className="flex h-full items-center justify-center rounded-[22px] bg-slate-950/60">
                  <p className="px-6 text-center text-xs text-slate-300">
                    Placeholder for industry imagery or case study collage.
                    Replace with your own visuals when ready.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-8 max-w-2xl">
              <h2 className="text-2xl font-semibold text-slate-900">How we help</h2>
              <p className="mt-2 text-sm text-slate-600">
                From day-to-day support to security, cloud, and AI – Solvarch covers
                your core technology foundations.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "AI Enablement",
                  desc: "Identify practical AI use cases, deploy tools, and train your team to use them safely.",
                },
                {
                  title: "Managed IT",
                  desc: "Helpdesk, device management, patching, and monitoring – all handled for you.",
                },
                {
                  title: "Cyber Security",
                  desc: "Endpoint protection, identity security, MFA, and backup strategies.",
                },
                {
                  title: "Microsoft 365 & Cloud",
                  desc: "Best-practice setup for email, collaboration, and file storage.",
                },
                {
                  title: "IT Consultancy",
                  desc: "Roadmaps, audits, and guidance that align technology with your business goals.",
                },
                {
                  title: "Projects & Migrations",
                  desc: "Network upgrades, cloud moves, and modernisation without unnecessary disruption.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="flex flex-col rounded-xl border-t-4 border-cyan-500/70 bg-white p-5 shadow-sm ring-1 ring-slate-200/70 transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-50 text-cyan-600 text-sm">
                    ✨
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 flex-1 text-xs text-slate-600">{item.desc}</p>
                  <button className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-cyan-700 hover:text-cyan-800">
                    Learn more
                    <span aria-hidden>&rarr;</span>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="case-studies" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-8 max-w-2xl">
              <h2 className="text-2xl font-semibold text-slate-900">
                What our clients say
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                We&apos;ve helped Australian businesses across industries reduce downtime,
                boost security, and modernise their IT.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  quote:
                    "Solvarch are proactive, responsive, and always speaking in business language, not jargon.",
                  name: "Operations Manager",
                  org: "Professional services firm",
                },
                {
                  quote:
                    "They have guided our move to the cloud and significantly improved our security posture.",
                  name: "Managing Director",
                  org: "Construction group",
                },
                {
                  quote:
                    "We know our systems are being watched and maintained, so we can focus on clients.",
                  name: "Partner",
                  org: "Advisory practice",
                },
              ].map((t) => (
                <figure
                  key={t.name}
                  className="flex h-full flex-col rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70"
                >
                  <div className="h-6 w-6 text-cyan-400 text-xl">“</div>
                  <blockquote className="mt-3 flex-1 text-xs italic text-slate-700">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-3 text-xs font-semibold text-slate-900">
                    {t.name}
                    <div className="text-[11px] font-normal text-slate-500">{t.org}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="ai" className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-8 max-w-2xl">
              <h2 className="text-2xl font-semibold text-slate-900">FAQs</h2>
              <p className="mt-2 text-sm text-slate-600">
                Short, jargon-free answers to the questions we hear most often.
              </p>
            </div>
            <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-slate-50">
              {faqs.map((item) => {
                const open = openFaq === item.question;
                return (
                  <button
                    key={item.question}
                    type="button"
                    onClick={() => setOpenFaq(open ? null : item.question)}
                    className="flex w-full flex-col items-stretch px-4 py-3 text-left text-sm hover:bg-white/70"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-medium text-slate-900">{item.question}</span>
                      <span className="text-lg text-slate-400">{open ? "–" : "+"}</span>
                    </div>
                    {open && (
                      <p className="mt-2 text-xs text-slate-600">{item.answer}</p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact section with form */}
        <section id="contact" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-4 md:grid md:grid-cols-2 md:gap-10">
            <div className="mb-10 md:mb-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">
                Contact
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                Let&apos;s talk.
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Share a few details about your environment and goals, and we&apos;ll
                follow up with practical next steps. No pressure, no jargon.
              </p>

              <div className="mt-6 space-y-3 text-sm text-slate-700">
                <p>Email: hello@solvarch.com.au</p>
                <p>Phone: (02) 0000 0000</p>
                <p>Location: Sydney, NSW</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
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
            </div>
          </div>
        </section>

        {/* Floating CTA above footer */}
        <section className="relative z-10 -mb-24 pointer-events-none">
          <div className="mx-auto max-w-6xl px-4">
            <div className="pointer-events-auto rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-700 px-6 py-8 text-white shadow-[0_25px_60px_rgba(15,23,42,0.4)] md:flex md:items-center md:justify-between">
              <div>
                <h2 className="text-lg font-semibold">Ready to secure your IT?</h2>
                <p className="mt-2 text-sm text-cyan-100">
                  Book a no-pressure discovery call to review your current setup and
                  explore how Solvarch can support your business.
                </p>
              </div>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center justify-center rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-cyan-700 shadow-md hover:bg-cyan-50 md:mt-0"
              >
                Book discovery call
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="site-footer" className="relative z-0 bg-slate-950 pt-28 pb-10 text-slate-200">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Solvarch logo"
                  className="h-10 w-10 rounded-xl object-cover shadow-lg shadow-cyan-500/30"
                />
                <div className="leading-tight">
                  <div className="text-sm font-extrabold uppercase tracking-wide text-slate-50">
                    Solvarch
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Managed IT • Cloud • Cybersecurity
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-400">
                Your trusted partner in managed IT, cybersecurity, and cloud for
                Sydney businesses.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-slate-200">Services</h3>
              <ul className="mt-3 space-y-2 text-xs text-slate-400">
                <li>
                  <button
                    type="button"
                    className="hover:text-slate-200"
                    onClick={() => navTo("#services")}
                  >
                    Managed IT
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-slate-200"
                    onClick={() => navTo("#services")}
                  >
                    Cyber Security
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-slate-200"
                    onClick={() => navTo("#services")}
                  >
                    Microsoft 365 &amp; Cloud
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-slate-200"
                    onClick={() => navTo("#services")}
                  >
                    AI Enablement
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-slate-200">Company</h3>
              <ul className="mt-3 space-y-2 text-xs text-slate-400">
                <li>
                  <button
                    type="button"
                    className="hover:text-slate-200"
                    onClick={() => navTo("#top")}
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-slate-200"
                    onClick={() => navTo("#case-studies")}
                  >
                    Case Studies
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-slate-200"
                    onClick={() => navTo("#outcomes")}
                  >
                    Business Outcomes
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-slate-200">Contact</h3>
              <ul className="mt-3 space-y-2 text-xs text-slate-400">
                <li>Sydney, NSW</li>
                <li>(02) 0000 0000</li>
                <li>hello@solvarch.com.au</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-800 pt-4 text-xs text-slate-500">
            © {new Date().getFullYear()} Solvarch. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
