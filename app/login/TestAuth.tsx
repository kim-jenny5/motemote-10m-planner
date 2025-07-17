'use client';

import { createClient } from '@/util/supabase/client';

export default function TestAuth() {
  const supabase = createClient();

  async function handleTestSignup() {
    const { data, error } = await supabase.auth.signUp({
      email: 'test@example.com',
      password: 'password123',
    });

    console.log('SIGNUP DATA:', data);
    console.error('SIGNUP ERROR:', error);
  }

  return (
    <button onClick={handleTestSignup} className='cursor-pointer'>
      Test Signup
    </button>
  );
}
