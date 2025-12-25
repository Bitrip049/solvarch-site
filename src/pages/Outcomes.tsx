import { useEffect } from "react";
import { ArrowTrendingUpIcon, ClockIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

function Outcomes() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Business Outcomes | Solvarch";
  }, []);
  const stats = [
    {
      label: "Uptime",
      value: "99.9%",
      icon: ShieldCheckIcon,
    },
    {
      label: "Cost reduction",
      value: "30%",
      icon: ArrowTrendingUpIcon,
    },
    {
      label: "Avg. response",
      value: "< 15m",
      icon: ClockIcon,
    },
  ];

  const trendToPoints = (values: number[]): string => {
    if (!values.length) return "";
    const width = 100;
    const height = 32;
    const max = Math.max(...values);
    const min = Math.min(...values);
    const range = max - min || 1;
    const step = values.length > 1 ? width / (values.length - 1) : width;

    return values
      .map((v, i) => {
        const x = i * step;
        const normalised = (v - min) / range;
        const y = height - normalised * height;
        return `${x},${y}`;
      })
      .join(" ");
  };

  const rows = [
    {
      title: "Seamless remote work",
      desc: "Give teams secure access to apps and files from anywhere, with policies that keep data under control.",
      metric: "Incidents per month",
      delta: "-30% incidents",
      trend: [22, 21, 19, 18, 16, 15],
    },
    {
      title: "Compliance & security (ISO 27001)",
      desc: "Align your IT operations with recognised frameworks and provide evidence for auditors and stakeholders.",
      metric: "Critical alerts per week",
      delta: "-40% alerts",
      trend: [42, 38, 35, 30, 28, 25],
    },
    {
      title: "Scalability on demand",
      desc: "Add new locations, teams, or systems without rebuilding your technology foundations.",
      metric: "Projects delivered on time",
      delta: "+25 pts SLA",
      trend: [70, 72, 75, 78, 82, 95],
    },
  ];

  return (
    <main className="bg-slate-50 pb-24 pt-10">
      <section className="mx-auto max-w-6xl px-4">
        <header className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">
            Business outcomes
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            ROI-driven technology.
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            We translate IT decisions into financial and operational outcomes your
            leadership team can measure.
          </p>
        </header>

        <section className="mt-8 grid gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70 md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-50 text-cyan-600">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-extrabold text-slate-900">{s.value}</p>
                <p className="text-xs text-slate-500">{s.label}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-10 space-y-10">
          {rows.map((row, index) => (
            <div
              key={row.title}
              className="grid items-center gap-8 md:grid-cols-2"
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <h2 className="text-xl font-semibold text-slate-900">{row.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{row.desc}</p>
              </div>
              <div
                className={`flex h-40 flex-col justify-between rounded-2xl bg-gradient-to-br from-cyan-100 via-slate-50 to-slate-200 p-4 shadow-inner ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">
                  Example outcome
                </p>
                <div className="mt-2 text-[11px] text-slate-600">
                  <p className="mb-1 font-medium text-slate-800">Before vs after</p>
                  <div className="mt-2 rounded-lg bg-white/70 p-3">
                    <div className="flex items-center justify-between text-[10px]">
                      <div>
                        <p className="font-medium text-slate-700">{row.metric}</p>
                        <p className="text-[9px] text-slate-400">Last 6 months</p>
                      </div>
                      <span className="font-semibold text-emerald-700">{row.delta}</span>
                    </div>
                    <svg
                      viewBox="0 0 100 36"
                      aria-hidden
                      className="mt-2 h-16 w-full text-emerald-500"
                    >
                      <line
                        x1="0"
                        y1="30"
                        x2="100"
                        y2="30"
                        stroke="#e5e7eb"
                        strokeWidth={1}
                      />
                      <line
                        x1="0"
                        y1="18"
                        x2="100"
                        y2="18"
                        stroke="#e5e7eb"
                        strokeWidth={0.5}
                      />
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points={trendToPoints(row.trend)}
                      />
                    </svg>
                    <div className="mt-1 flex justify-between text-[8px] text-slate-400">
                      <span>Month 1</span>
                      <span>Month 6</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}

export default Outcomes;
