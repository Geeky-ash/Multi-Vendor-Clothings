'use client';

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function AccountPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="w-10 h-10 animate-spin" />
      </div>
    );
  }

  if (status === "unauthenticated") {
    router.replace('/login');
    return null;
  }

  return (
    <div className="container mx-auto p-4 pt-8">
      <h1 className="text-3xl font-bold mb-2">My Account</h1>
      <p className="text-lg text-gray-600 mb-6">Welcome, {session?.user?.name || 'User'}!</p>

      <div className="space-y-4">
        <div className="p-4 border rounded-lg">
          <h2 className="font-semibold">Email:</h2>
          <p>{session?.user?.email || 'Not provided'}</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h2 className="font-semibold">Role:</h2>
          <p className="capitalize">{session?.user?.role}</p>
        </div>
        
        <button 
          onClick={() => signOut({ callbackUrl: '/login' })}
          className="w-full bg-red-500 text-white p-3 rounded-md mt-6 hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}