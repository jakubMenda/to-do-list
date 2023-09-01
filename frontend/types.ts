export interface Task {
    id: number;
    name: string
    description: string
    note: string | null
    created_at: string
    deleted_at: string
    updated_at: string;
}