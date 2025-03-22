import { Image } from "@heroui/react";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-orange-200 text-white w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        <Image
          src="/Oxxo_Logo.svg"
          alt="Logo de Ocso"
          width={200}
          height={200}
          className="mb-2"
        />
        {children}
      </div>
    </div>
  );
}
