'use client'
import { useState } from 'react';
import Box from '@mui/material/Box';
import { useRouter } from 'next/navigation';

import TasksList from '../TasksList/TasksList';
import TaskDialog from '../TaskDialog/TaskDialog';
import { Task } from '../../../../types';
import { getAccessToken, getTasks } from '@/app/api/utils';
import { Routes } from '@/app/enums';
import { revalidatePath } from 'next/cache';
import { revalidateUserData } from '@/app/actions';

interface TasksViewProps {
    tasks: Task[]
    disabled?: boolean
}

const TasksView = ({ tasks: initialTasks, disabled = false }: TasksViewProps) => {
    const router = useRouter()

    const [tasks, setTasks] = useState(initialTasks);
    const [isLoading, setIsLoading] = useState(false);

    const handleTaskDelete = async (taskId: number) => {
        await revalidateUserData();

        setTasks((currentTasks) => currentTasks?.filter((task) => task.id !== taskId) ?? null)
    }

    const refetchTasks = async () => {
        setIsLoading(false);
        await revalidateUserData()

        try {
            const accessToken = await getAccessToken();

            const nextTasks = await getTasks(accessToken);
            setTasks(nextTasks);
            setIsLoading(false);
        } catch (error) {
            router.replace(Routes.SignIn);
            setIsLoading(false);
        }
    }

    return (
        <>
            {!disabled && (
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginBottom: '2rem'
                    }}>
                        <TaskDialog onAddNewTask={refetchTasks} />
                </Box>
            )}
            <TasksList
                tasks={tasks}
                isLoading={isLoading}
                onTaskDelete={handleTaskDelete}
                disabled={disabled}
            />
        </>
    );
}

export default TasksView;