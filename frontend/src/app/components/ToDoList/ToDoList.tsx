'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from "@mui/material/Tooltip";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import { Task } from "../../../../types";
import { deleteTask, getTasks } from "@/app/api/api";
import { LocalStorageKeys, Routes } from "@/app/enums";
import { doesErrorHaveMessage } from "@/app/utils/typeguards";

interface ToDoListProps {
    tasks: Task[] | null
    isLoading: boolean
    onTaskDelete: (taskId: number) => void
}

const ToDoList = ({ tasks, isLoading, onTaskDelete }: ToDoListProps) => {
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
        const accessToken = localStorage.getItem(LocalStorageKeys.AccessToken);

        if (!accessToken) {
            return;
        }

        try {
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
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {tasks?.map(task => (
                <Tooltip key={task.id} title={task.description}>
                    <ListItem
                        key={task.id}
                        disablePadding
                    >
                        <ListItemIcon>
                            <Checkbox
                            onClick={() => handleDeleteTask(task.id)}
                            edge="start"
                            checked={false}
                            tabIndex={-1}
                            disableRipple
                            />
                        </ListItemIcon>
                        <ListItemText primary={task.name} />
                    </ListItem>
                </Tooltip>
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
        </List>
    )
}

export default ToDoList;
