import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CpuChipIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

function AIEnablement() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "AI Enablement | Solvarch";
  }, []);
  const steps = ["Assessment", "Licensing", "Training", "Automation"];
  const useCases = [
    {
      title: "Automated reporting",
      desc: "Generate board and finance reports from live data instead of manual spreadsheets.",
      icon: ChartBarIcon,
    },
    {
      title: "Customer service bots",
      desc: "Triage simple requests and FAQs so your team can focus on higher-value work.",
      icon: ChatBubbleBottomCenterTextIcon,
    },
    {
      title: "Code generation",
      desc: "Support internal tools and scripts with AI-assisted development.",
      icon: CpuChipIcon,
    },
  ];

  const kpis = [
    { label: "Time to first AI use case", value: "~3 months" },
    { label: "Manual effort reduced", value: "25–40%" },
    { label: "Teams enabled", value: "4–6 functions" },
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
                className="cursor-pointer rounded-2xl bg-slate-900/80 p-5 shadow-[0_25px_80px_rgba(8,47,73,0.7)] ring-1 ring-cyan-500/30 transition hover:-translate-y-0.5 hover:bg-slate-900 hover:ring-cyan-300/60"
                onClick={() => navigate("/contact")}
                aria-label={`${item.title} – talk to us about this use case`}
              >
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
                  <item.icon className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-semibold text-slate-50">{item.title}</h3>
                <p className="mt-2 text-xs text-slate-300">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* KPI strip */}
        <section className="mt-10 rounded-2xl bg-slate-900/80 px-6 py-4 ring-1 ring-cyan-500/30">
          <h2 className="text-[11px] font-semibold uppercase tracking-wide text-cyan-300">
            What clients typically see
          </h2>
          <div className="mt-3 grid gap-4 text-xs text-slate-300 md:grid-cols-3">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="flex flex-col gap-1">
                <span className="text-[11px] text-slate-400">{kpi.label}</span>
                <span className="text-sm font-semibold text-slate-50">{kpi.value}</span>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default AIEnablement;
