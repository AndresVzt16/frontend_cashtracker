import LoginForm from "@/components/auth/login/LoginForm";
import { Metadata } from "next";
import Link from "next/link";

const Login = () => {
  const metadata: Metadata = {
    title: "Cashtracker - Iniciar sesión",
    description: "Cashtracker proyecto de finanzas y control personal",
    keywords:
      "Finanzas, Educacion financiera, control financiero, app web, planificación",
  };
  return (
    <>
      <nav className="flex w-full justify-end gap-2 mb-5 font-base ">
        <p className="w-fit m-0">
          ¿No tienes cuenta?
        </p>
        <Link
          href="/auth/register"
          className="text-purple-900  m-0 font-black">
          Registrate
        </Link>
      </nav>
      <section className="flex flex-col gap-5 justify-center space-y-0">
        <p className="text-purple-900 text-sm font-black uppercase text-left w-full">
          Bienvenido de nuevo
        </p>
        <h1 className=" text-4xl  font-black">Inicia sesión</h1>
        <p className="text-sm text-gray-500 ">
          Ingresa tus datos para continuar administrando tus finanzas.
        </p>
        <LoginForm />
      </section>
    </>
  );
};

export default Login;
