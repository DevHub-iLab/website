import { cn } from "@/lib/utils";
import logoSVG from "./logo.svg";

export default function Logo({ className = "" }) {
  return (
    <div
      className={cn(
        "font-display text-lg inline-block max-w-max whitespace-nowrap",
        className,
      )}
    >
      <img className="h-8 inline-block" src={logoSVG.src} alt="Devhub Pengi" />
      <span className="inline-block font-bold text-[--yellow]">DEVHUB</span>
      <span className="inline-block text-[--red]">_</span>
    </div>
  );
}
