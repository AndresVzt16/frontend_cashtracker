"Use client";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordForm() {
  return (
    <form className=" space-y-5 w-full md:w-md" noValidate>
      <Field className="">
        <FieldLabel className="">Email</FieldLabel>
        <Input
          type="email"
          placeholder="Email de Registro"
          className="w-full border border-gray-300 p-3 rounded-lg"
          name="email"
        />
      </Field>

      <Button
        size="lg"
        type="submit"
        className="">
        Recuperar contraseña
      </Button>
    </form>
  );
}
