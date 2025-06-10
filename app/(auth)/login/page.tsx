"use client"

import { signIn } from "next-auth/react"
import { redirect } from "next/navigation"
import { useState } from "react"

const LoginPage = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const login = form.get('login') as string;
        const password = form.get('password') as string

        const res = await signIn("credentials", {
            redirect: false,
            login,
            password
        });

        if(res?.ok) {
            redirect('/');
        } else {
            setMessage('Błąd logowania');
        }
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="login" placeholder="Login" />
                <input type="password" name="password" placeholder="Hasło" />
                <button type="submit">Zaloguj</button>

                <div>
                    {message}
                </div>
            </form>

        </>
    )
}

export default LoginPage;