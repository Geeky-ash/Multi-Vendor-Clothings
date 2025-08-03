import 'next-auth';

declare module 'next-auth' {
  interface User {
    _id?: string;
    role?: 'customer' | 'vendor' | 'admin';
    city?: string;
  }

  interface Session {
    user: {
      _id?: string;
      role?: 'customer' | 'vendor' | 'admin';
      city?: string;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    _id?: string;
    role?: 'customer' | 'vendor' | 'admin';
    city?: string;
  }
}