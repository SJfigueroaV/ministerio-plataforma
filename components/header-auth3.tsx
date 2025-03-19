'use client'
import { createClient } from "@/utils/supabase/client"

export default function AuhtButton3() {

  const supabase = createClient()



  const handleSigIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      }
    })
  }
  return (
    <button onClick={handleSigIn} >
      hola
    </button>
  )

}