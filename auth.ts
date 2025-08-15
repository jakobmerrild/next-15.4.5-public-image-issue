import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

const config = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Dummy authorization for replication reasons
        return {
          id: '1',
          name: 'John Smith',
          email: 'jsmith@example.com',
        };
      },
    }),
  ],
};

export const { auth, handlers, signIn, signOut } = NextAuth(config);
