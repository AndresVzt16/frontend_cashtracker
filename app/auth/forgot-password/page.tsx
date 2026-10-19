import ForgotPasswordForm from "@/components/auth/forgot-password/ForgotPasswordForm";
import { Metadata } from "next";
import Link from "next/link";

const ForgotPassword = () => {
  const metadata: Metadata = {
    title: "Cashtracker - Recuperar contraseña",
    description: "Cashtracker proyecto de finanzas y control personal",
    keywords:
      "Finanzas, Educacion financiera, control financiero, app web, planificación",
  };
  return (
    <>
    <nav className="flex w-full justify-between  gap-2 mb-5 font-base ">
          <div className="flex  justify-center flex-col">
            <p>¿No tienes una cuenta? </p>
            <Link
              href="/auth/register"
              className="text-purple-900  m-0 font-black">
              Registrate
            </Link>
          </div>
          
          <div className="flex flex-col justify-end items-end">
            <p>¿Ya tienes una cuenta? </p>
          <Link href="/auth/login" className="text-purple-900  m-0 font-black">
            Iniciar Sesión
          </Link>
          </div>
        </nav>
      <section className="flex flex-col gap-5 justify-center space-y-0 ">
        <p className="text-purple-900 text-sm font-black uppercase text-left w-full">
          Bienvenido de nuevo
        </p>
        <h2 className=" text-3xl  font-black">¿Olvidaste tu contraseña?</h2>
        <p className="text-sm text-gray-500">
          Ingresa tu correo electrónico y te enviaremos un enlace para
          restablecer tu contraseña.
        </p>
        <ForgotPasswordForm />
      </section>
        
    </>
  );
};

export default ForgotPassword;
