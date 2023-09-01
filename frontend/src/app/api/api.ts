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

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const constructAccessToken = (token: string) => `Bearer ${token}`;

export const signIn = async (body: SignInBodyParams) => {
    const response = await fetch(`${API_URL}/auth/login`, {
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
    const response = await fetch(`${API_URL}/users`, {
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
    const response = await fetch(`${API_URL}/tasks`, {
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
            throw new Error('You are not authorized for this operation');
            break;

        default:
            throw new Error('An error ecurred');

      }
    }
 
    return response.json()
}

export const deleteTask = async (taskId: number, accessToken: string) => {
    const response = await fetch(`${API_URL}/tasks/${taskId}`, {
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
            throw new Error('You are not authorized for this operation');
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
    const response = await fetch(`${API_URL}/tasks`, {
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
            throw new Error('You are not authorized for this operation');
            break;

        default:
            throw new Error('An error ocurred');

      }
    }
 
    return;
}