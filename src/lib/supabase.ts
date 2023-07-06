import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qighkjkmhfikasepsjku.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpZ2hramttaGZpa2FzZXBzamt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk4NTc5OTMsImV4cCI6MTk4NTQzMzk5M30.d8vRAe4aqZghqxiCSiXsfcA45oxQW3XLh49BdoA2p5I'

export const supabase = createClient(supabaseUrl, supabaseKey)
