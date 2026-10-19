
import Hero from "@/components/auth/core/Hero";
import FooterAuth from "@/components/auth/core/FooterAuth";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-dvh xl:grid xl:grid-cols-2">
      <Hero />

      <section className="flex min-h-dvh w-full flex-col justify-between bg-white px-6 py-8 sm:px-10 sm:py-10">
        {children}

        <FooterAuth />
      </section>
    </main>
  );
}
