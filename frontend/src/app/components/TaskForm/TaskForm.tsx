import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import { AddTaskOutlined } from '@mui/icons-material';
import { PostTaskBodyParams, getAccessToken, postTask } from '@/app/api/utils';
import { doesErrorHaveMessage } from '@/app/utils/typeguards';
import { taskFormValidationSchema } from './validation';

interface TaskFormProps {
    onSuccess?: (data: PostTaskBodyParams) => void
    onError?: (message: string) => void
}

const TaskForm = ({ onSuccess, onError }: TaskFormProps) => {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const data = new FormData(event.currentTarget);
    
        const body = {
          name: String(data.get('name')),
          description: String(data.get('description'))
        };
    
        try {
            const accessToken = await getAccessToken();

            if (!accessToken) {
                throw new Error('Unauthorized');
            }

            await taskFormValidationSchema.validateAsync(body);

            await postTask(accessToken, body);
    
            onSuccess?.(body)
    
        } catch (error: unknown) {
          if (!doesErrorHaveMessage(error)) {
            onError?.('An error occured');
            return;
          }
    
          onError?.(error.message);
        }
      }

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ margin: '2rem' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                    <AddTaskOutlined />
                </Avatar>
            </Box>
            <Box>
                <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="Just Do It!"
                autoFocus
                />
                <TextField
                margin="normal"
                required
                fullWidth
                name="description"
                label="Description"
                id="description"
                autoComplete="Please. Do something meaningful."
                multiline
                minRows={5}
                maxRows={5}
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                    Add
                </Button>
            </Box>
          </Box>
    );
}

export default TaskForm;