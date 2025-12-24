import { useEffect, useState } from "react";

type CaseStudy = {
  id: string;
  industry: string;
  client: string;
  headline: string;
  challenge: string;
  solution: string;
  result: string;
};

const CASES: CaseStudy[] = [
  {
    id: "logistics",
    industry: "Logistics",
    client: "LogisticsCo",
    headline: "How LogisticsCo cut downtime by 40%",
    challenge:
      "Frequent outages across depots were interrupting dispatch and customer updates.",
    solution:
      "Standardised network equipment, implemented monitoring, and introduced a structured support process.",
    result:
      "Unplanned outages reduced by 40% and incident resolution times improved by 55%.",
  },
  {
    id: "professional-services",
    industry: "Professional services",
    client: "Advisory Group",
    headline: "Secure, remote-friendly workplaces for a growing advisory firm",
    challenge:
      "Partners needed secure remote access to documents and client systems from any location.",
    solution:
      "Rolled out conditional access, MFA, and best-practice Microsoft 365 configuration.",
    result:
      "Improved security posture while enabling flexible work and faster client turnaround.",
  },
  {
    id: "non-profit",
    industry: "Non-profit",
    client: "ImpactOrg",
    headline: "Modern collaboration stack for a national non-profit",
    challenge:
      "Fragmented tools made it hard for distributed teams to collaborate.",
    solution:
      "Implemented Teams, SharePoint, and a structured device management approach.",
    result:
      "Higher adoption of shared tools and clearer visibility over devices and access.",
  },
];

function CaseStudies() {
  const [active, setActive] = useState<CaseStudy | null>(CASES[0] ?? null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-slate-50 pb-24 pt-10">
      <section className="mx-auto max-w-6xl px-4">
        <header className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">
            Case studies
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Real outcomes for real organisations.
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            A snapshot of how Solvarch helps organisations reduce downtime, lift
            security, and modernise their IT foundations.
          </p>
        </header>

        <section className="mt-8 grid gap-6 md:grid-cols-3">
          {CASES.map((cs) => (
            <article
              key={cs.id}
              className="flex cursor-pointer flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 transition hover:-translate-y-0.5 hover:shadow-lg"
              onClick={() => setActive(cs)}
            >
              <span className="inline-flex w-fit rounded-full bg-cyan-50 px-2 py-1 text-[11px] font-semibold text-cyan-700">
                {cs.industry}
              </span>
              <h2 className="mt-3 text-sm font-semibold text-slate-900">
                {cs.headline}
              </h2>
              <p className="mt-2 text-xs text-slate-500">{cs.client}</p>
              <button className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-cyan-700">
                Read story
                <span aria-hidden>→</span>
              </button>
            </article>
          ))}
        </section>

        {active && (
          <section className="mt-10 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200/80">
            <h2 className="text-sm font-semibold text-slate-900">
              {active.client} – {active.headline}
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  The challenge
                </h3>
                <p className="mt-2 text-xs text-slate-700">{active.challenge}</p>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  The solution
                </h3>
                <p className="mt-2 text-xs text-slate-700">{active.solution}</p>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  The result
                </h3>
                <p className="mt-2 text-xs text-slate-700">{active.result}</p>
              </div>
            </div>
          </section>
        )}
      </section>
    </main>
  );
}

export default CaseStudies;
