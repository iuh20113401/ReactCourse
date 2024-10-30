import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://eeigspcnuhbfwpnohcis.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlaWdzcGNudWhiZndwbm9oY2lzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAyNjk0MDMsImV4cCI6MjA0NTg0NTQwM30.wxn93LcBQgJ4JstUwXQtrqo22sLbsWfTy-fIHBy_c_c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
