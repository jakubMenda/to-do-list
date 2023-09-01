'use client';

import { useRouter, usePathname } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

import { LocalStorageKeys, Routes } from '../enums';

const publicRoutes = [Routes.SignIn, Routes.SignUp] as String[];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem(LocalStorageKeys.AccessToken);

    if (!token && !publicRoutes.includes(pathname)) {
      router.replace(Routes.SignIn)
    }
  }, [])

  return children;
}