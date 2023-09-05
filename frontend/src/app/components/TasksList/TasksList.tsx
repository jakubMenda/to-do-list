'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import { Task as TaskType } from "../../../../types";
import { deleteTask, getAccessToken, getTasks } from "@/app/api/utils";
import { Routes } from "@/app/enums";
import { doesErrorHaveMessage } from "@/app/utils/typeguards";
import Task from "../Task/Task";

interface ToDoListProps {
    tasks: TaskType[] | null
    isLoading: boolean
    onTaskDelete: (taskId: number) => void
    disabled?: boolean
}

const TasksList = ({ tasks, isLoading, onTaskDelete, disabled = false }: ToDoListProps) => {
    const router = useRouter();

    const [errorMessage, setErrorMessage] = useState<String | null>(null)
    const [successMessage, setSuccessMessage] = useState<String | null>(null)

    const handleErrorSnackbarClose = () => {
        setErrorMessage(null);
    }
    
    const handleSuccessSnackbarClose = () => {
        setSuccessMessage(null);
    }

    const handleDeleteTask = async (taskId: number) => {
        try {
            const accessToken = await getAccessToken();

            const taskToDelete = tasks?.find((task) => task.id === taskId);

            await deleteTask(taskId, accessToken);

            onTaskDelete(taskId)
            setSuccessMessage(taskToDelete?.name ? `Task '${taskToDelete.name}' was removed` : null)
        } catch(error) {
            if (!doesErrorHaveMessage(error)) {
                setErrorMessage('An error ocurred');
                return;
              }
        
              setErrorMessage(error.message);

              router.replace(Routes.SignIn);
        }
    }

    if (isLoading) {
        return (
            <Box sx={{ margin: '4rem 50%' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (!tasks?.length) {
        return <Alert sx={{ margin: '40px 0' }} severity="info">No tasks. You're a free elf.</Alert>
    }

    return (
        <Box sx={{ width: '100%', bgColor: '#fff' }}>
            {tasks?.map(task => (
                <Task
                    key={task.id}
                    task={task}
                    onTaskDelete={handleDeleteTask}
                    disabled={disabled}
                />
            ))}
            <Snackbar
                open={!!errorMessage}
                autoHideDuration={2000}
                onClose={handleErrorSnackbarClose}
                message={errorMessage}
            >
                <Alert onClose={handleErrorSnackbarClose} severity="error" sx={{ width: '100%' }}>
                {errorMessage}
                </Alert>
          </Snackbar>
          <Snackbar
                open={!!successMessage}
                autoHideDuration={2000}
                onClose={handleSuccessSnackbarClose}
                message={successMessage}
            >
                <Alert onClose={handleSuccessSnackbarClose} severity="success" sx={{ width: '100%' }}>
                {successMessage}
                </Alert>
          </Snackbar>
        </Box>
    )
}

export default TasksList;
