'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('Faridpur');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, phone, password, city }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      router.push('/login');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Create an Account</h1>
          <p className="text-gray-500">Join Drappi today!</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Full Name" value={username} onChange={e => setUsername(e.target.value)} required className="w-full p-3 border rounded-md" />
          <input type="tel" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} required className="w-full p-3 border rounded-md" />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full p-3 border rounded-md" />
          <select value={city} onChange={e => setCity(e.target.value)} className="w-full p-3 border rounded-md bg-white">
            <option value="Faridpur">Faridpur</option>
            {/* Add more cities later */}
          </select>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" disabled={isSubmitting} className="w-full bg-black text-white p-3 rounded-md hover:bg-gray-800 disabled:bg-gray-400">
            {isSubmitting ? 'Registering...' : 'Register'}
          </button>
        </form>
        <div className="text-center text-gray-600">
          <p>Already have an account? <Link href="/login" className="text-blue-600 hover:underline">Login here</Link></p>
        </div>
      </div>
    </div>
  );
}