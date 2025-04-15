import { handleAuth } from "@/app/actions/handle-auth";
import { auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";

export default async function dashboard() {
  const session = await auth()

  if (!session) { 
    redirect("/project/login")
  }

  return (
    <div>
    <main>
      <h1>Dashboard</h1>
      <p>This is the dashboard page.</p>
      <p>{session?.user?.email ? session?.user.email: "Usuario não esta logado!!"} </p>

      {session?.user?.email && (

                <form action={handleAuth}>
                  <button className="border-black border rounderd md px-3 cursor-pointer:true mt-3" type="submit">Sair do sistema</button>
                </form>
        )
      }
    </main>
    </div>
  );
}