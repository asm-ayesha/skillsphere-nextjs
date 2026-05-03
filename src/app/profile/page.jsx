'use client'

import { authClient } from '@/lib/auth-client';
import { Avatar, Card, Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BiEdit } from 'react-icons/bi';

const ProfilePage = () => {
    const userData = authClient.useSession()
    const user = userData.data?.user
    const router = useRouter();

    return (
        <div>
            <Card className='max-w-96 mx-auto flex flex-col items-center mt-5 border border-sky-200 shadow-md'>
                <Avatar className='h-20 w-20'>
                    <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>

                <h2 className='text-xl font-bold text-sky-900' >{user?.name}</h2>
                <p className='text-muted'>{user?.email}</p>

                <Button variant="secondary"
                    onPress={() => router.push("/update-profile")}
                > <BiEdit></BiEdit> Update Profile</Button>
            </Card>
        </div>
    );
};

export default ProfilePage;