import { cn } from "@/lib/utils";
import logoSVG from "./logo.svg";

export default function Logo({ className = "" }) {
  return (
    <div
      className={cn(
        "font-display text-2xl inline-block max-w-max whitespace-nowrap",
        className,
      )}
    >
      <img
        className="h-8 inline-block mr-2"
        src={logoSVG.src}
        alt="DevHub Pengi"
      />
      <span className="inline-block font-bold text-[--yellow]">DEVHUB</span>
      <span className="inline-block text-[--red]">_</span>
    </div>
  );
}
