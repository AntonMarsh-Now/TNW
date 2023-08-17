import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://spemvobfifkbcbusdcfn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwZW12b2JmaWZrYmNidXNkY2ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA5NzM0MjEsImV4cCI6MjAwNjU0OTQyMX0.hRKOV9d6MdL_0294qsczAKMIf0-PrGhPCsa23VEhV-w')