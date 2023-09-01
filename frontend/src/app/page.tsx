'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import ToDoList from './components/ToDoList/ToDoList';
import TaskDialog from './components/TaskDialog/TaskDialog';
import { LocalStorageKeys, Routes } from './enums';
import { getTasks } from './api/api';
import { Task } from '../../types';

export default function Home() {
  const router = useRouter();

  const [tasks, setTasks] = useState<Task[] | null>(null)
  const [isLoading, setIsLoading] = useState(true);

  const handleTaskDelete = (taskId: number) => {
    setTasks((currentTasks) => currentTasks?.filter((task) => task.id !== taskId) ?? null)
  }

  const populateTasks = async () => {
    try {
        const accessToken = localStorage.getItem(LocalStorageKeys.AccessToken);

        if (!accessToken) {
            throw new Error('Unauthorized');
        }

        const tasks = await getTasks(accessToken);

        setTasks(tasks);
        setIsLoading(false);
    } catch (error) {
        router.replace(Routes.SignIn)
    }
  };

  useEffect(() => {  
    populateTasks();
  }, [])

  return (
    <Container maxWidth="md" sx={{ mt: '4rem' }}>
      <Box sx={{ padding: '2rem 4rem', background: '#fff' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
          <Image src="/todo_icon.png" alt="To Do icon" width="125" height="102" />
        </Box>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            textTransform: 'uppercase',
            marginBottom: '2rem',
            marginTop: '2rem',
            textAlign: 'center'
          }}
        >
          Simple Tasks App
        </Typography>
        <Typography
          sx={{ marginBottom: '2rem', textAlign: 'center' }}
        >
          Behold and rejoice!
        </Typography>
        <Box sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: '2rem'
        }}>
          <TaskDialog onAddNewTask={populateTasks} />
        </Box>
        <ToDoList tasks={tasks} isLoading={isLoading} onTaskDelete={handleTaskDelete} />
      </Box>
    </Container>
  )
}
