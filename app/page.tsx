import { UsersList } from "@/components";
import { fetchData } from "@/utils";

export default async function Home() {
  const users = await fetchData();
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>Home</h1>
        <UsersList users={users} />
      </div>
    </main>
  );
}
