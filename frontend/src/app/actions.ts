'use server'
 
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { Routes } from './enums';
 
export const signOut = async () => {
  revalidatePath(Routes.Index);
  revalidatePath(Routes.CompletedTasks);
  
  redirect(Routes.SignIn);
}

export const revalidateUserData = async () => {
    revalidatePath(Routes.Index);
    revalidatePath(Routes.CompletedTasks);
}