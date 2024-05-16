import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yramwttnzwtauaxuvqrl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlyYW13dHRuend0YXVheHV2cXJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2ODM5NjQsImV4cCI6MjAyNTI1OTk2NH0.ArwEU6Vy_cHbL5FnUmGEy8d7hAf4wvnL-k9R1LXa-8g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
