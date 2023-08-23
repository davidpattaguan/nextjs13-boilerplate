import { getAuthSession } from "@/lib/auth";
import UserEditForm from "./components/user-edit-form";
import { db } from "@/lib/db";

export default async function Home() {
  const session = await getAuthSession();
  const user = await db.user.findUnique({
    where: { id: session?.user.id },
  });
  return (
    <>
      <UserEditForm initialData={user} />
    </>
  );
}
