import React from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Profile({ session }) {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Profile
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300">
          Welcome! You are logged in.
        </p>
        <div>
          <p className="text-gray-800 dark:text-gray-200 break-all">
            <strong>Email:</strong> {session.user.email}
          </p>
          {/* <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 break-all">
            <strong>User ID:</strong> {session.user.id}
          </p> */}
        </div>
        <button
          onClick={handleLogout}
          className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md group hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Logout
        </button>
      </div>
    </div>
  );
}