import { NextProxyBaseResponse } from "../../../types";


export const doesErrorHaveMessage = (error: unknown): error is Record<string, unknown> & { message: string } => !!(error as any).message;

export const isNextProxySuccessResponse = (response: unknown): response is NextProxyBaseResponse => !!(response as any).status;