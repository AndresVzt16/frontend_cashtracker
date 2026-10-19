"use client";
import { register } from "@/actions/create-account-action";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const RegisterForm = () => {
  return (
    <form className="space-y-5 w-full md:w-md " noValidate action={register}>
      <Field title="Nombre">
        <FieldLabel>Nombre</FieldLabel>
        <Input
          type="name"
          placeholder="Nombre de usuario"
          className="w-full border border-gray-300 p-3 rounded-lg"
          name="name"
        />
      </Field>
      
      <Field title="Email">
        <FieldLabel>Email</FieldLabel>
        <Input
          type="email"
          placeholder="Email de Registro"
          className="w-full border border-gray-300 p-3 rounded"
          name="email"
        />
      </Field>

      <Field title="Password">
        <FieldLabel>Password</FieldLabel>
        <Input
          type="password"
          placeholder="Password de Registro"
          className="w-full border border-gray-300 p-3 rounded"
          name="password"
        />
      </Field>

      <Field title="Repetir Password">
        <FieldLabel>Repetir Password</FieldLabel>
        <Input
          id="password_confirmation"
          type="password"
          placeholder="Repite Password de Registro"
          className="w-full border border-gray-300 p-3 rounded"
          name="password_confirmation"
        />
      </Field>

      <Button
      size="lg"
        type="submit"
        className="">
        Crear cuenta
      </Button>
    </form>
  );
};

export default RegisterForm;
