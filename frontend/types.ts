export interface Task {
    id: number;
    name: string
    description: string
    note: string | null
    created_at: string
    deleted_at: string
    updated_at: string;
}

export enum NextProxyResponseStatus {
    Success = 'success',
    Failure = 'failure'
}

export interface NextProxyBaseResponse {
    status: NextProxyResponseStatus
}