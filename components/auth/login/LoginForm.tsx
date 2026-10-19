"Use client";
import { Field, FieldLabel } from "@/components/ui/field";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const LoginForm = () => {
  return (
    <div>
      <form className="space-y-5 w-full md:w-md" noValidate>
        <Field className="flex flex-col gap-5">
          <FieldLabel className="">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="nombre@ejemplo.com"
            className="w-full border border-gray-300 p-3 rounded-lg"
            name="email"
          />
        </Field>

        <Field className="flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <FieldLabel className="">Password</FieldLabel>
            <Link href="/auth/forgot-password" className="text-sm text-purple-900 font-black">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <Input
            type="password"
            placeholder="********"
            className="w-full border border-gray-300 p-3 rounded-lg"
            name="password"
          />
        </Field>

        <Button size="lg">Iniciar Sesión</Button>
      </form>
    </div>
  );
};

export default LoginForm;
