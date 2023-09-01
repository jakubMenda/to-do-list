import Request from 'express';

interface RequestUser {
    id: number
    name: string
}

export interface RequestWithUser extends Request {
    user: RequestUser
}

export interface AccessTokenResponse {
    access_token: string
}