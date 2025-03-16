import { Button, Input } from "@heroui/react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="bg-orange-500 max-w-md mx-auto p-8 rounded-md text-center">
      <p className="text-2xl my-4">Iniciar Sesión</p>
      <div className="rounded-md flex flex-col gap-2 my-4 items-center">
        <Input placeholder="Email" type="email" isRequired size="sm" />
        <Input placeholder="Contraseña" type="password" isRequired size="sm" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button className="rounded-md bg-blue-500">Iniciar Sesión</Button>
        <p>
          ¿No tienes cuenta?{" "}
          <Link href="/signup" className="text-red-600 underline">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}
