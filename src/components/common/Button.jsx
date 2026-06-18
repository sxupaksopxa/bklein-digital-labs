import { Link } from "react-router-dom";

export default function Button({ children, to, href, onClick, variant = "primary" }) {
  const baseClass =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition";
  const variants = {
    primary: "bg-slate-950 text-white hover:bg-slate-800",
    secondary: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100",
  };
  const className = `${baseClass} ${variants[variant]}`;

  if (href) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  if (onClick) {
    return (
      <button type="button" className={className} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <Link className={className} to={to || "/"}>
      {children}
    </Link>
  );
}
