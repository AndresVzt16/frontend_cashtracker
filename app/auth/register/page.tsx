import { Metadata } from "next";
import RegisterForm from "@/components/auth/register/RegisterForm";
import Link from "next/link";

const Register = () => {
  const metadata: Metadata = {
    title: "Cashtracker - Crear cuenta",
    description: "Cashtracker proyecto de finanzas y control personal",
    keywords:
      "Finanzas, Educacion financiera, control financiero, app web, planificación",
  };
  return (
    <>
      <nav className="flex w-full justify-end gap-2 mb-5">
        <p className="font-semibold text-center w-fit m-0">
          ¿Ya tienes cuenta?
        </p>
        <Link
          href="/auth/login"
          className="text-purple-900 font-semibold text-center  m-0">
          Inicia sesión
        </Link>
      </nav>

      <section className="flex flex-col gap-5 justify-center space-y-0">
        <p className="text-purple-900 text-sm font-black uppercase text-left w-full">
          Bienvenido a Cashtracker
        </p>
        <h1 className=" text-4xl font-black text-black">Crea tu cuenta</h1>
        <p className="text-xs text-gray-600">
          Ingresa tus datos para comenzar a administrar tus finanzas.
        </p>

        <RegisterForm />
      </section>
    </>
  );
};

export default Register;
