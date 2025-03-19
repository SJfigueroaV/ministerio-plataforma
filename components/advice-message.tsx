import { signOutAction } from "@/app/actions";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";

export default async function AdviceMessage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();


  return user ? (

    <div >
      <a className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-black shadow-sm hover:bg-yellow-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition hover:scale-105 mb-6" href="">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 5v6a3 3 0 0 0 3 3h7"></path><path d="M10 10l4 4l-4 4m5 -8l4 4l-4 4"></path></svg>
        <div className="flex flex-col items-start pl-1 pr-3" >
          <span className="block">¡Sigue por donde lo dejaste!</span>
          <strong className="text-base font-bold opacity-80">...</strong>
        </div>
      </a>
    </div>

  ) : (
    <div >
      <small className="block max-w-lg p-4 mb-8 text-sm font-bold border rounded border-sky-400 bg-sky-950/80">Para desbloquear el contenido, debes iniciar sesión antes.</small>
    </div>
  );
}