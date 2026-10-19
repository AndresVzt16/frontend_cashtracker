import Logo from "@/components/ui/logo";
import { Badge } from "@/components/ui/badge";
import DashboardHero from "./DashboardHero";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col bg-purple-900 px-8 py-8 xl:px-10 xl:py-7">
      <header className="flex justify-start">
        <Logo size="3xl" />
      </header>

      <div className="flex flex-1 flex-col">
        <Badge
          variant="secondary"
          className="mb-5 w-fit border-purple-900 bg-purple-950 px-5 py-2 shadow"
        >
          <span className="size-1 rounded-full bg-green-400" />
          <span className="text-xs font-semibold text-white">
            Tus finanzas, más simples
          </span>
        </Badge>

        <section className="mb-8 max-w-xl space-y-4">
          <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-green-50 xl:text-5xl">
            Toma el control de tu dinero.
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-purple-100 xl:text-lg">
            Organiza tus gastos, construye mejores hábitos y alcanza tus metas.
          </p>
        </section>

        <div className="mx-auto w-full max-w-[440px]">
          <DashboardHero />
        </div>
      </div>
    </section>
  );
};

export default Hero;