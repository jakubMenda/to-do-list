'use client'

import { useRouter, usePathname } from 'next/navigation';
import { SyntheticEvent } from 'react';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TasksDoneIcon from '@mui/icons-material/TaskAltOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToAppOutlined';
import TasksIcon from '@mui/icons-material/FormatListBulletedOutlined';

import { Routes } from '@/app/enums';
import { removeAccessToken } from '@/app/api/utils';
import { signOut } from '@/app/actions';

const Navigation = () => {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = async (event: SyntheticEvent<Element, Event>, newRoute: any) => {
        if (newRoute === Routes.SignIn) {
            await removeAccessToken();

            await signOut();
        }

        router.push(String(newRoute));
    }

    return (
        <Box sx={{ width: 500 }}>
            <BottomNavigation
                showLabels
                value={pathname}
                onChange={handleClick}
            >
                <BottomNavigationAction label="My tasks" icon={<TasksIcon />} value={Routes.Index} />
                <BottomNavigationAction label="Finished tasks" icon={<TasksDoneIcon />} value={Routes.CompletedTasks} />
                <BottomNavigationAction label="Sign out" icon={<ExitToAppIcon />} value={Routes.SignIn} />
            </BottomNavigation>
        </Box>
    )
}

export default Navigation;