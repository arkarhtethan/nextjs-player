import { Box, Flex } from '@chakra-ui/layout';
import { Button, Input } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { auth } from '../lib/mutations';

const AuthForm = ({ mode }: { mode: "signin" | "signup" }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const submitHandler = async (e: any) => {
        e.preventDefault();
        setIsLoading(true)
        const user = await auth(mode, { email, password });
        setIsLoading(false);
        router.push('/')
    }
    return (
        <Box height="100vh" width="100vw" bg="black">
            <Flex justify="center" align="center" height="100px">
                hello
            </Flex>
            <Flex justify="center" align="center" height="calc(100vh - 100px)">
                <form onSubmit={submitHandler}>
                    <Input placeholder="email" type="email" onChange={e => setEmail(e.target.value)} marginY="20px" />
                    <Input placeholder="password" type="password" onChange={e => setPassword(e.target.value)} marginY="20px" />
                    <Button type="submit" color="white" bg="green.500" isLoading={isLoading} sx={{
                        '&:hover': {
                            bg: 'green.300'
                        }
                    }}>
                        {mode}
                    </Button>
                    <Box marginTop="20px">
                        {mode === "signin" ? <Link href="/signup">Don't have an account? Signup</Link> : <Link href="/signin">Already have an account? Signin</Link>}
                    </Box>
                </form>
            </Flex>
        </Box>
    )
}

export default AuthForm
