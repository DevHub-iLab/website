import logoSVG from "../../public/assets/logo.svg";

export default function Logo() {
  return (
    <div className="text-lg">
      <img className="h-8 inline-block" src={logoSVG.src} alt="Devhub Pengi" />
      <span className="inline-block font-bold text-[--yellow]">DEVHUB</span>
      <span className="inline-block text-[--red]">_</span>
    </div>
  );
}
