'use client'
import React, { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import Link from 'next/link'
import { Button } from '../ui/button'
import axios from '@/lib/axios'
import { LOGIN_URL } from '@/lib/api'
import { signIn } from 'next-auth/react'
import { ReloadIcon } from '@radix-ui/react-icons'
import { toast } from '../ui/use-toast'
import Image from 'next/image'

export default function FormLogin() {
    const [loading, setLoading] = useState<boolean>(false);
    const [authState, setAuthState] = useState<AuthStateType>({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: [],
        password: [],
    });

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        axios
            .post(LOGIN_URL, authState, {
                headers: {
                    Accept: "application/json",
                },
            })
            .then((res) => {
                const response = res;
                console.log(response);
                setLoading(false);
                if (response?.status == 200) {
                    signIn("credentials", {
                        email: authState.email,
                        password: authState.password,
                        redirect: true,
                        callbackUrl: "/dashboard",
                    });

                    // localStorage.setItem("token", response.data.tokens)
                    // localStorage.setItem("level", response.data.level)

                    toast({
                        title: 'Success',
                        description: response?.data.message,
                        duration: 2000
                    });

                } else if (response?.status == 401) {
                    toast({
                        title: 'Error',
                        description: response?.data.message,
                        duration: 2000
                    });

                }
            })
            .catch((err) => {
                setLoading(false);
                setErrors(err?.response?.data?.errors);
            });
    };

    return (
        <>

            <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
                <div className="flex items-center justify-center py-12">
                    <div className="mx-auto grid w-[350px] gap-6">
                        <div className="grid gap-2 text-center">
                            <h1 className="text-3xl font-bold">Login</h1>
                            <p className="text-balance text-muted-foreground">
                                Silahkan masukkan email dan password anda
                            </p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        placeholder="Enter your email"
                                        type="email"
                                        onChange={(e) =>
                                            setAuthState({ ...authState, email: e.target.value })
                                        }
                                    />
                                    <span className="text-red-500">{errors?.email?.[0]}</span>
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Password</Label>

                                    </div>
                                    <Input id="password"
                                        placeholder="Enter your password"
                                        type="password"
                                        onChange={(e) =>
                                            setAuthState({ ...authState, password: e.target.value })
                                        } />
                                    <span className="text-red-500">{errors?.password?.[0]}</span>
                                </div>
                                {loading ? (
                                    <Button className="w-full" disabled >
                                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                        Process...
                                    </Button>
                                ) : (
                                    <Button className="w-full" disabled={loading}>
                                        Login
                                    </Button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
                <div className="hidden bg-muted backdrop:blur-sm lg:block">
                    <Image
                        src="/assets/img/phon_login.svg"
                        alt="Image-login"
                        width="1920"
                        height="1080"
                        className="h-full w-full object-cover dark:brightness-[1.2] dark:grayscale"
                    />
                </div>
            </div>
        </>
    )
}
