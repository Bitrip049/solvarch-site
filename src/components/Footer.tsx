function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 pt-28 pb-10 text-slate-200">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500 text-xs font-bold text-white">
                S
              </div>
              <span className="text-sm font-semibold">Solvarch</span>
            </div>
            <p className="text-xs text-slate-400">
              Your trusted partner in managed IT, cybersecurity, and cloud for
              Sydney businesses.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-200">Services</h3>
            <ul className="mt-3 space-y-2 text-xs text-slate-400">
              <li>Managed IT</li>
              <li>Cyber Security</li>
              <li>Microsoft 365 &amp; Cloud</li>
              <li>AI Enablement</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-200">Company</h3>
            <ul className="mt-3 space-y-2 text-xs text-slate-400">
              <li>About</li>
              <li>Case Studies</li>
              <li>Business Outcomes</li>
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
  );
}

export default Footer;
