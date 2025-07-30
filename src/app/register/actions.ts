
'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'

export async function signup(formData: FormData): Promise<string | void> {
  const supabase = createClient()

  const data = Object.fromEntries(formData)
  
  const { error } = await supabase.auth.signUp({
    email: data.email as string,
    password: data.password as string,
    options: {
        data: {
            full_name: data['full-name'] as string,
            phone: data['mobile-number'] as string,
        }
    }
  })

  if (error) {
    return error.message
  }

  revalidatePath('/', 'layout')
}
