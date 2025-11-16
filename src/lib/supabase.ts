import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type UserRole = 'student' | 'parent' | 'teacher' | 'administrator';

export interface UserProfile {
  id: string;
  fayda_id: string;
  role: UserRole;
  full_name: string;
  email?: string;
  phone?: string;
  school_id?: string;
  school_name?: string;
  class_grade?: string;
  subjects?: string[];
  created_at: string;
  updated_at: string;
}
