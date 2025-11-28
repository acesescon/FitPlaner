// api/database/server.js
import { createClient } from "@supabase/supabase-js";

// Gumawa ng Supabase client gamit ang server-side environment variables
const supabase = createClient(
  process.env.SUPABASE_URL,  // must be set sa Vercel
  process.env.SUPABASE_KEY   // must be set sa Vercel
);

export default supabase;  // ✅ default export
