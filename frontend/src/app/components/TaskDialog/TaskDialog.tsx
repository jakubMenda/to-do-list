'use client'
import { useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Add, Close } from '@mui/icons-material';

import TaskForm from '../TaskForm/TaskForm';
import { PostTaskBodyParams } from '@/app/api/utils';

interface TaskDialogProps {
    onAddNewTask: () => Promise<void> | void
}

const TaskDialog = ({ onAddNewTask }: TaskDialogProps) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState<String | null>(null)
    const [errorMessage, setErrorMessage] = useState<String | null>(null)

    const handleDialogClose = () => {
        setIsDialogOpen(false);
    }

    const handleDialogOpen = () => {
        setIsDialogOpen(true);
    }

    const handleSuccessSnackbarClose = () => {
        setSuccessMessage(null);
    }

    const handleErrorSnackbarClose = () => {
        setErrorMessage(null);
    }

    const handlePostSuccess = (data: PostTaskBodyParams) => {
        setSuccessMessage(`Task '${data.name}' added!`);
        setIsDialogOpen(false);
        onAddNewTask();
    }

    const handlePostFailure = (message: string) => {
        setErrorMessage(message);
    }

    return (
        <>
            <Button
                variant="outlined"
                startIcon={<Add />}
                onClick={handleDialogOpen}
            >
                Add Task
            </Button>
            <Dialog
                open={isDialogOpen}
                onClose={handleDialogClose}
            >
                <DialogTitle>Add a new task</DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleDialogClose}
                    sx={{
                        position: 'absolute',
                        right: '1rem',
                        top: '1rem',
                        color: '#bbb',
                    }}
                >
                    <Close />
                </IconButton>
                <TaskForm onSuccess={handlePostSuccess} onError={handlePostFailure} />
            </Dialog>
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
        </>
    );
}

export default TaskDialog;