
'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function RegisterPage() {
    useEffect(() => {
        redirect('/');
    }, []);

    return null;
}
