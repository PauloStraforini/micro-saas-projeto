import Link from "next/link"

export default function Page() {
  return (
    <main>
      <h1>Welcome to Next.js!</h1>
      <p>This is a simple Next.js application.</p>
      <Link href="/project/login">
      <button>Login</button>
      </Link>
    </main>
  );
}
