import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const EnrollClass = () => {
    const { user } = useAuth();
    const [payments, setPayment] = useState([]);

    useEffect(() => {
        fetch(`https://martial-arts-server.vercel.app/payments/student`)
            .then(res => res.json())
            .then(data => {
                setPayment(data)
            })
    }, [])

    return (
        <div>
            <h2>Enroll</h2>
        </div>
    );
};

export default EnrollClass;