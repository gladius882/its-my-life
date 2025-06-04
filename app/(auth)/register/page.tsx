"use client"

import { useState } from "react";

const RegisterPage = () => {
    const [message, setMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const login = form.get('login') as string;
        const name = form.get('name') as string;
        const password = form.get('password') as string;

        const res = await fetch('/api/auth/register', {
            method: "POST",
            body: JSON.stringify({ login, name, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if(res.ok) {
            setMessage("Utworzono konto");
        } else {
            setMessage("Błąd");
        }
    }

    return (
        <>
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Imię" /> <br />
                <input type="text" name="login" placeholder="Login" /> <br />
                <input type="password" name="password" placeholder="Hasło" /> <br />

                <button type="submit">Utwórz konto</button>
            </form>

            <div>{message}</div>
        </>
    )
}

export default RegisterPage;