'use client';

import { useRouter, usePathname } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

import { Routes } from '../enums';
import { getAccessToken } from '../api/utils';

const publicRoutes = [Routes.SignIn, Routes.SignUp] as String[];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  const authenticate = async () => {
    if (!publicRoutes.includes(pathname)) {
      return;
    }

    try {
      const token = await getAccessToken();

      if (!token) {
        throw new Error('No token found');
      }
    } catch (error) {
      router.replace(Routes.SignIn)
    }
  }

  useEffect(() => {
    authenticate();
  }, [])

  return children;
}