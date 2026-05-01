'use client'
import { UpdateUser } from '@/components/UpdateUser';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const ProfilePage = () => {
    const userData = authClient.useSession()
    const user = userData.data?.user
    console.log(user)
    return (
        <div>
            <Card className='max-w-96 mx-auto flex flex-col items-center mt-5 border border-sky-200 shadow-md'>
                <Avatar className='h-20 w-20'>
                    <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>

                <h2 className='text-xl font-bold text-sky-900' >{user?.name}</h2>
                <p className='text-muted'>{user?.email}</p>

                <UpdateUser></UpdateUser>
            </Card>
        </div>
    );
};

export default ProfilePage;