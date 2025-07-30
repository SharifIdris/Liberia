
import { createBrowserClient } from '@supabase/ssr'

// NOTE: This file is now for the browser client only.
// For server-side operations, use `lib/supabase/server.ts`

export function createClient() {
    return createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
}
