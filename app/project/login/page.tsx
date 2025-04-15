import { handleAuth } from "@/app/actions/handle-auth";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      <form action={handleAuth}>
        <button type="submit">Entrar pelo google</button>
      </form>
    </div>
  );
}
