'use client'

import { SyntheticEvent } from "react";

import Checkbox from '@mui/material/Checkbox';
import Box from "@mui/material/Box";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Task } from "../../../../types";

interface TaskProps {
    task: Task
    onTaskDelete: (taskId: number) => void
    disabled?: boolean
}

const Task = ({ task, onTaskDelete, disabled = false }: TaskProps) => {

    const handleTaskDelete = (event: SyntheticEvent) => {
        event?.stopPropagation();

        onTaskDelete(task.id);
    }

    return (
        <Accordion key={task.id}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {!disabled && (
                        <Checkbox
                            onClick={disabled ? undefined : handleTaskDelete}
                            edge="start"
                            checked={false}
                            tabIndex={-1}
                            disableRipple
                        />
                    )}
                    <Typography sx={{ fontWeight: 'bold' }}>{task.name}</Typography>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {task.description}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default Task;
