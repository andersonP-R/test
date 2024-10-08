import { LoginForm } from "./ui/LoginForm";

export default async function LoginPage() {
  return (
    <div className="flex flex-col items-center min-h-screen pt-32">
      <h1 className={`text-4xl mb-5`}>Ingresar</h1>

      <div className="w-[400px] border-2 border-black p-6">
        <LoginForm />
      </div>
    </div>
  );
}
