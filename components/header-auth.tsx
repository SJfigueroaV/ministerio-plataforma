import { signOutAction } from "@/app/actions";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";

export default async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();


  return user ? (
    null
  ) : (
    <div className="flex flex-col gap-2 mb-4 lg:items-center lg:mb-0 lg:flex-row">
      <Button asChild size="lg" variant={"outline"}>

        <Link href="/sign-in">Iniciar Sesión</Link>
      </Button>
      <Button asChild size="lg" variant={"default"}>
        <Link href="/sign-up">Crear Cuenta</Link>
      </Button>
    </div>
  );
}
