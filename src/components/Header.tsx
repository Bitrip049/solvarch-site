import { Link, NavLink } from "react-router-dom";
import logo from "../assets/solvarch-logo.jpg";

function Header() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium ${isActive ? "text-slate-900" : "text-slate-700"}`;

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-3">
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
        </Link>

        <nav className="hidden items-center gap-4 lg:flex">
          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>
          <NavLink to="/ai" className={navLinkClass}>
            AI Enablement
          </NavLink>
          <NavLink to="/outcomes" className={navLinkClass}>
            Business Outcomes
          </NavLink>
          <NavLink to="/cases" className={navLinkClass}>
            Case Studies
          </NavLink>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            to="/contact"
            className="rounded-2xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/40 hover:bg-cyan-600"
          >
            Book discovery call
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
