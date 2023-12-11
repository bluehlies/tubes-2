import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nqqvdqnopmeoagyxysox.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xcXZkcW5vcG1lb2FneXh5c294Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyODE1NjksImV4cCI6MjAxNDg1NzU2OX0.kD5n7Lt7EbSdAxDqbIl0qTghKCtIzeMNgXMwkj6yHRQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

