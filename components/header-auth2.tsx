import { signOutAction } from "@/app/actions";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";

export default async function AuthButton2() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();


  return user ? (
    <button className="items-center justify-center hidden text-sm font-semibold text-white/80 md:flex group hover:text-yellow-300 gap-x-2" onClick={signOutAction} >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-[28px] h-[28px] ml-1" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2"></path><path d="M15 12h-12l3 -3"></path><path d="M6 15l-3 -3"></path></svg>
      <span className="pl-2 text-lg font-normal transition-colors" >
        Cerrar Sesión
      </span>
    </button>

  ) : (
    <div >

    </div>
  );
}