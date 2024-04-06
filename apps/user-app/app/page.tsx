import { PrismaClient } from "@repo/db/client"; 
const client = new PrismaClient();

export default function Page(): JSX.Element {
  return (
    <div className="bg-slate-500">
      <h1>Page.tsx user app</h1>
    </div>
  );
}
