// backend/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';
import React from 'react';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_KEY || '';

console.log('Supabase URL:',SUPABASE_URL);
console.log('Supabase Key:',SUPABASE_ANON_KEY);

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);