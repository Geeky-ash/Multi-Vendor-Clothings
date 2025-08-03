'use client';

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const result = await signIn('credentials', {
      redirect: false,
      phone,
      password,
    });

    if (result?.error) {
      setError('Invalid phone number or password.');
    } else {
      router.replace('/'); // Redirect to home page on successful login
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome Back!</h1>
          <p className="text-gray-500">Login to your Drappi account.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="tel" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} required className="w-full p-3 border rounded-md" />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full p-3 border rounded-md" />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" className="w-full bg-black text-white p-3 rounded-md hover:bg-gray-800">Login</button>
        </form>
        <div className="text-center text-gray-600">
          <p>Don't have an account? <Link href="/register" className="text-blue-600 hover:underline">Register now</Link></p>
        </div>
      </div>
    </div>
  );
}