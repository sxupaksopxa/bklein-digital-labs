import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">BKlein Digital Labs</p>
          <p className="mt-1 text-sm">Building practical AI solutions for a digital world.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <Link to="/privacy" className="transition hover:text-white">Privacy</Link>
          <Link to="/terms" className="transition hover:text-white">Terms</Link>
          <span className="hidden text-slate-600 sm:inline">|</span>
          <p>© {new Date().getFullYear()} BKlein Digital Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
