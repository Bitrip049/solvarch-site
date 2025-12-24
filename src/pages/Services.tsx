function Services() {
  const services = [
    {
      id: "managed-it",
      title: "Managed IT",
      lead: "End-to-end support for your users, devices, and network.",
      deliverables: [
        "24/7 monitoring and alerting",
        "Patch and update management",
        "Service desk for your team",
        "Asset and license management",
      ],
    },
    {
      id: "cyber-security",
      title: "Cyber Security",
      lead: "Protect identities, endpoints, and data with layered controls.",
      deliverables: [
        "Endpoint protection and EDR",
        "Multi-factor authentication rollout",
        "Policy, access and device hardening",
        "Backup and recovery testing",
      ],
    },
    {
      id: "cloud",
      title: "Cloud & Microsoft 365",
      lead: "Modern collaboration and file access without the chaos.",
      deliverables: [
        "Best-practice Microsoft 365 setup",
        "File and email migrations",
        "Conditional access and data loss controls",
        "Cost and license optimisation",
      ],
    },
    {
      id: "strategy",
      title: "Strategy & Advisory",
      lead: "Turn IT into a roadmap, not a to-do list.",
      deliverables: [
        "Quarterly IT and risk reviews",
        "Budgeting and roadmap planning",
        "Vendor and project guidance",
        "Board-ready reporting",
      ],
    },
  ];

  return (
    <main className="bg-slate-50 pb-24 pt-10">
      <section className="mx-auto max-w-6xl px-4">
        <header className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">
            Services
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            End-to-end IT management.
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            From daily support to cloud architecture, Solvarch provides one
            accountable partner for your core IT.
          </p>
        </header>

        <div className="mt-10 grid gap-10 md:grid-cols-[220px_minmax(0,1fr)]">
          {/* Sidebar */}
          <aside className="space-y-2 md:sticky md:top-24 md:self-start">
            {services.map((svc) => (
              <a
                key={svc.id}
                href={`#${svc.id}`}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:border-cyan-300 hover:bg-cyan-50"
              >
                <span>{svc.title}</span>
              </a>
            ))}
          </aside>

          {/* Content */}
          <div className="space-y-10">
            {services.map((svc) => (
              <section
                key={svc.id}
                id={svc.id}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70"
              >
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-50 text-sm text-cyan-600">
                  ✦
                </div>
                <h2 className="text-xl font-semibold text-slate-900">{svc.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{svc.lead}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {svc.deliverables.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 text-cyan-500">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <div className="rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-6 py-6 text-white shadow-lg shadow-cyan-500/40">
              <h2 className="text-lg font-semibold">Compare plans and inclusions</h2>
              <p className="mt-2 text-sm text-cyan-100">
                We&apos;ll walk you through options for support hours, response
                times, and security controls based on your risk profile.
              </p>
              <button className="mt-4 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-cyan-700 shadow-md hover:bg-cyan-50">
                Book plan comparison
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
