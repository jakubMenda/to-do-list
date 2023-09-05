import Image from 'next/image'
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CookieStoreKeys, Routes } from '../enums';
import { getFinishedTasks } from '../api/utils';
import { Task } from '../../../types';
import TasksView from '../components/TasksView/TasksView';
import Navigation from '../components/Navigation/Navigation';

const getCompletedTasksAction = async (): Promise<{ tasks: Task[] }> => {
    const cookieStore = cookies();

    const accessToken = cookieStore.get(CookieStoreKeys.AccessToken);

    if (!accessToken?.value) {
      redirect(Routes.SignIn);
    }

    const tasks = await getFinishedTasks(accessToken.value);

    return { tasks };
}

const CompletedTasks = async () => {
  const { tasks } = await getCompletedTasksAction();

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
          Finished tasks
        </Typography>
        <TasksView tasks={tasks} disabled />
      </Box>
      <Box sx={{ position: 'fixed', bottom: 50, left: '50%', transform: 'translate(-50%, 0)' }}>
        <Navigation />
      </Box>
    </Container>
  )
}

export default CompletedTasks;
