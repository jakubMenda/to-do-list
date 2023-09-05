import { redirect } from 'next/navigation';

import { NextProxyResponseStatus } from "../../../types"
import { Routes } from "../enums"
import { isNextProxySuccessResponse } from "../utils/typeguards"
import { revalidatePath } from 'next/cache';

const commonHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

interface SignInBodyParams {
    name: string
    password: string
}

interface SignUpBodyParams {
    name: string
    password: string
}

export interface PostTaskBodyParams {
    name: string
    description: string
}

const SERVER_API_URL = process.env.NEXT_PUBLIC_SERVER_API_URL;
const CLIENT_API_URL = process.env.NEXT_PUBLIC_CLIENT_API_URL;

const constructAccessToken = (token: string) => `Bearer ${token}`;

const resolveApiUrl = () => {
  return typeof window === 'undefined' ? SERVER_API_URL : CLIENT_API_URL;
}

export const signIn = async (body: SignInBodyParams) => {
    const response = await fetch(`${resolveApiUrl()}/auth/login`, {
      method: 'POST',
      headers: commonHeaders,
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      switch(response.status) {
        case 400:
            throw new Error('Bad Request');
            break;

        case 401:
            throw new Error('Wrong username or password');
            break;

        case 404:
            throw new Error('User with given credentials not found');

        default:
            throw new Error('An error ecurred');

      }
    }
 
    return response.json()
}

export const signUp = async (body: SignUpBodyParams) => {
    const response = await fetch(`${resolveApiUrl()}/users`, {
      method: 'POST',
      headers: commonHeaders,
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      switch(response.status) {
        case 400:
            throw new Error('Bad Request');
            break;

        case 409:
            throw new Error('User with given username already exists');

        default:
            throw new Error('An error ecurred');

      }
    }
 
    return response.json()
}

export const getTasks = async (accessToken: string) => {
  const response = await fetch(`${resolveApiUrl()}/tasks`, {
    method: 'GET',
    headers: {
      ...commonHeaders,
      Authorization: constructAccessToken(accessToken)
    },
  })

  if (!response.ok) {
    switch(response.status) {
      case 400:
          throw new Error('Bad Request');
          break;

      case 401:
          redirect(Routes.SignIn);
          break;

      default:
          throw new Error('An error ocurred');

    }
  }

  return response.json()
}

export const getFinishedTasks = async (accessToken: string) => {
  const response = await fetch(`${resolveApiUrl()}/tasks/finished`, {
    method: 'GET',
    headers: {
      ...commonHeaders,
      Authorization: constructAccessToken(accessToken)
    },
  })

  if (!response.ok) {
    switch(response.status) {
      case 400:
          throw new Error('Bad Request');
          break;

      case 401:
          redirect(Routes.SignIn);
          break;

      default:
          throw new Error('An error ocurred');

    }
  }

  return response.json()
}

export const deleteTask = async (taskId: number, accessToken: string) => {
    const response = await fetch(`${resolveApiUrl()}/tasks/${taskId}`, {
      method: 'DELETE',
      headers: {
        ...commonHeaders,
        Authorization: constructAccessToken(accessToken)
      },
    })

    if (!response.ok) {
      switch(response.status) {
        case 400:
            throw new Error('Bad Request');
            break;

        case 401:
            redirect(Routes.SignIn);
            break;

        case 404:
            throw new Error('Task not found');
            break;

        default:
            throw new Error('An error ocurred');

      }
    }
 
    return taskId;
}

export const postTask = async (accessToken: string, body: PostTaskBodyParams) => {
    const response = await fetch(`${resolveApiUrl()}/tasks`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        ...commonHeaders,
        Authorization: constructAccessToken(accessToken)
      },
    })

    if (!response.ok) {
      switch(response.status) {
        case 400:
            throw new Error('Bad Request');
            break;

        case 401:
            redirect(Routes.SignIn);
            break;

        default:
            throw new Error('An error ocurred');

      }
    }
 
    return;
}

export const storeAccessToken = async (accessToken: string) => {
  const response = await fetch('/api/access-token', {
    method: 'POST',
    headers: commonHeaders,
    body: JSON.stringify({ access_token: accessToken }),
  });

  if (!response.ok) {
    throw new Error('Authorization failed');
  }

  const responseData = response.json();

  if (isNextProxySuccessResponse(responseData) && responseData.status === NextProxyResponseStatus.Failure) {
    throw new Error('Authorization failed');
  }
}

export const getAccessToken = async () => {
  const response = await fetch('/api/access-token', {
    method: 'GET',
    headers: commonHeaders,
  });

  if (!response.ok) {
    throw new Error('Authorization failed');
  }

  const responseData = await response.json();

  if (isNextProxySuccessResponse(responseData) && responseData.status === NextProxyResponseStatus.Failure) {
    throw new Error('Authorization failed');
  }

  return responseData.access_token;
}

export const removeAccessToken = async () => {
  const response = await fetch('/api/access-token', {
    method: 'DELETE',
    headers: commonHeaders,
  });

  if (!response.ok) {
    throw new Error('Failed');
  }

  const responseData = response.json();

  if (isNextProxySuccessResponse(responseData) && responseData.status === NextProxyResponseStatus.Failure) {
    throw new Error('Failed');
  }
}