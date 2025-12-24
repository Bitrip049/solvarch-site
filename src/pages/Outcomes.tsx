import { useEffect } from "react";

function Outcomes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const stats = [
    { label: "Uptime", value: "99.9%" },
    { label: "Cost reduction", value: "30%" },
    { label: "Avg. response", value: "< 15m" },
  ];

  const rows = [
    {
      title: "Seamless remote work",
      desc: "Give teams secure access to apps and files from anywhere, with policies that keep data under control.",
    },
    {
      title: "Compliance & security (ISO 27001)",
      desc: "Align your IT operations with recognised frameworks and provide evidence for auditors and stakeholders.",
    },
    {
      title: "Scalability on demand",
      desc: "Add new locations, teams, or systems without rebuilding your technology foundations.",
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
            <div key={s.label} className="space-y-1">
              <p className="text-2xl font-extrabold text-slate-900">{s.value}</p>
              <p className="text-xs text-slate-500">{s.label}</p>
            </div>
          ))}
        </section>

        <section className="mt-10 space-y-10">
          {rows.map((row, index) => (
            <div
              key={row.title}
              className={`grid items-center gap-8 md:grid-cols-2 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div>
                <h2 className="text-xl font-semibold text-slate-900">{row.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{row.desc}</p>
              </div>
              <div className="h-40 rounded-2xl bg-gradient-to-br from-cyan-100 via-slate-50 to-slate-200 shadow-inner" />
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}

export default Outcomes;
