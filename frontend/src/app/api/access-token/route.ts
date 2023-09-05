import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

import { CookieStoreKeys } from '../../enums';
import { NextProxyBaseResponse, NextProxyResponseStatus } from '../../../../types';

export interface PostAccessTokenResponse extends NextProxyBaseResponse {}

export async function GET() {
    const cookieStore = cookies()

    const result = cookieStore.get(CookieStoreKeys.AccessToken);

    if (!result?.value) {
        return NextResponse.json({ status: NextProxyResponseStatus.Failure });
    }

    return NextResponse.json({ status: NextProxyResponseStatus.Success, access_token: result.value });
}

export async function POST(request: Request) {
    const data = await request.json()

    if (!data.access_token) {
        return NextResponse.json({ status: NextProxyResponseStatus.Failure });
    }

    const cookieStore = cookies()

    cookieStore.set(CookieStoreKeys.AccessToken, data.access_token);

    return NextResponse.json({ status: NextProxyResponseStatus.Success });
}

export async function DELETE() {
    const cookieStore = cookies()

    cookieStore.delete(CookieStoreKeys.AccessToken);

    return NextResponse.json({ status: NextProxyResponseStatus.Success });
}