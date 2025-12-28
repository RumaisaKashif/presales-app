// import apiClient from './apiClient';

// /**
//  * @typedef {'client' | 'presales'} UserRole
//  */

// /**
//  * @typedef {object} User
//  * @property {string} id
//  * @property {string} name
//  * @property {string} email
//  * @property {UserRole} role
//  */

// /**
//  * AuthService handles authentication-related API calls.
//  */
// const authService = {
//   /**
//    * Logs in a user.
//    * @param {string} email - The user's email.
//    * @param {string} password - The user's password.
//    * @returns {Promise<{user: User, token: string}>} The user data and JWT token.
//    */
//   login: async (email, password) => {
//     // In a real app, you'd make a POST request to your API
//     // For now, we'll simulate it
//     console.log(email, password);
//     if (email.startsWith('client')) {
//       return Promise.resolve({
//         user: { id: '1', name: 'Test Client', email, role: 'client' },
//         token: 'fake-client-token',
//       });
//     } else if (email.startsWith('presales')) {
//       return Promise.resolve({
//         user: { id: '2', name: 'Test Presales', email, role: 'presales' },
//         token: 'fake-presales-token',
//       });
//     } else {
//       return Promise.reject(new Error('Invalid credentials'));
//     }
//   },

//   /**
//    * Registers a new user.
//    * @param {string} name - The user's name.
//    * @param {string} email - The user's email.
//    * @param {string} password - The user's password.
//    * @param {UserRole} role - The user's selected role.
//    * @returns {Promise<{user: User, token: string}>} The new user data and JWT token.
//    */
//   register: async (name, email, password, role) => {
//     console.log(name, email, password, role);
//     return Promise.resolve({
//       user: { id: '3', name, email, role },
//       token: `fake-${role}-token`,
//     });
//   },

//   /**
//    * Logs out the current user.
//    * @returns {Promise<void>}
//    */
//   logout: async () => {
//     // In a real app, you might want to invalidate the token on the server
//     return Promise.resolve();
//   },
// };

// export default authService;
import { supabase } from './supabaseClient';

const register = async (email, fullName) => {
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${window.location.origin}/auth/callback`,
      data: { full_name: fullName },
    },
  });

  if (error) throw error;
};

const login = async (email) => {
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${window.location.origin}/auth/callback`,
    },
  });

  if (error) throw error;
};

const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

const onAuthStateChange = (callback) => {
  // 1️⃣ Initial session check
  supabase.auth.getSession().then(({ data: { session } }) => {
    callback(session?.user ?? null);
  });

  // 2️⃣ Listen to changes
  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((_event, session) => {
    callback(session?.user ?? null);
  });

  return subscription;
};

export const authService = {
  register,
  login,
  logout,
  onAuthStateChange,
};
