'use client';
import { API_URL } from "@/constatns";
import { Button, Input } from "@heroui/react";
import axios from "axios";
import Link from "next/link";

export default function LoginPage() {
  const handleSumit = async (e : React.FormEvent) =>{
    e.preventDefault()
    const formData = new FormData(e.target);
    let authData: any ={}
    authData.userEmail = formData.get("userEmail");
    authData.userPassword = formData.get("userPassword");
    const {data} = await axios.post(`${API_URL}/auth/login`, {
      userEmail : "Jake@gmail.com",
      userPassword : "12345678"
    });
    console.log(data);
    return;
  }
  return (
    <form className="bg-orange-500 max-w-md mx-auto p-8 rounded-md text-center" onSubmit={handleSumit} >
      <p className="text-2xl my-4">Iniciar Sesión</p>
      <div className="rounded-md flex flex-col gap-2 my-4 items-center">
        <Input placeholder="Email" name="UserEmail" type="email" isRequired size="sm" />
        <Input placeholder="Contraseña" name="userPassword" type="password" isRequired size="sm" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button className="rounded-md bg-blue-500" type="submit" >Iniciar Sesión</Button>
        <p>
          ¿No tienes cuenta?{" "}
          <Link href="/signup" className="text-red-600 underline">
            Regístrate
          </Link>
        </p>
      </div>
    </form>
  );
}
