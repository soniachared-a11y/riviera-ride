import { createClient } from '@supabase/supabase-js';

// These are public keys - safe to expose in frontend code
// For Vercel: set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://uqjftifudojfgfwfxxia.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxamZ0aWZ1ZG9qZmdmd2Z4eGlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4NTU4NjksImV4cCI6MjA1MjQzMTg2OX0.B7RGp_JIkLfvfXL6_F3U0PTGJU4WVjAV7_oQi0RkjN4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for reservations table
export interface Reservation {
  id?: string;
  depart: string;
  arrivee: string;
  date_heure: string;
  nom: string;
  telephone: string;
  email: string;
  distance_km?: number;
  prix_euros?: number;
  created_at?: string;
}
