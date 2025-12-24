import { useEffect } from "react";

function AIEnablement() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const steps = ["Assessment", "Licensing", "Training", "Automation"];
  const useCases = [
    {
      title: "Automated reporting",
      desc: "Generate board and finance reports from live data instead of manual spreadsheets.",
    },
    {
      title: "Customer service bots",
      desc: "Triage simple requests and FAQs so your team can focus on higher-value work.",
    },
    {
      title: "Code generation",
      desc: "Support internal tools and scripts with AI-assisted development.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 pb-24 pt-10 text-slate-50">
      <section className="mx-auto max-w-6xl px-4">
        <header className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">
            AI Enablement
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
            Future-proof your business with AI.
          </h1>
          <p className="mt-3 text-sm text-slate-300">
            We help you move from AI experiments to secure, practical workflows
            that save time without increasing risk.
          </p>
        </header>

        {/* Process */}
        <section className="mt-10 rounded-2xl bg-slate-900/80 p-6 ring-1 ring-cyan-500/30 shadow-[0_25px_80px_rgba(8,47,73,0.7)]">
          <h2 className="text-sm font-semibold text-slate-50">How we work with you</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-4">
            {steps.map((label, index) => (
              <div key={label} className="flex flex-col gap-2">
                <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500 text-xs font-semibold text-slate-950">
                  {index + 1}
                </div>
                <p className="text-sm font-medium text-slate-50">{label}</p>
                <p className="text-xs text-slate-400">
                  {index === 0 && "Understand goals, data, and risks."}
                  {index === 1 && "Choose the right platforms and licensing."}
                  {index === 2 && "Upskill teams with hands-on enablement."}
                  {index === 3 && "Embed AI into day-to-day workflows."}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Use cases */}
        <section className="mt-10">
          <h2 className="text-sm font-semibold text-slate-50">Practical use cases</h2>
          <p className="mt-2 text-xs text-slate-400">
            We focus on tangible outcomes that your team can adopt quickly.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {useCases.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl bg-slate-900/80 p-5 shadow-[0_25px_80px_rgba(8,47,73,0.7)] ring-1 ring-cyan-500/30"
              >
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
                  ✨
                </div>
                <h3 className="text-sm font-semibold text-slate-50">{item.title}</h3>
                <p className="mt-2 text-xs text-slate-300">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default AIEnablement;
