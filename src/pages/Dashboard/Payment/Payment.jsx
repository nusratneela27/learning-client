import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useQueries from '../../../hooks/useQueries';

const Payment = () => {
    const [cart] = useQueries()

    return (
        <div className='mx-auto'>
            <Helmet>
                <title>e Crft | Payment</title>
            </Helmet>
            <SectionTitle
                heading={"Please Process"}
                subheading={"Join Now"}
            ></SectionTitle>
            <h1 className='text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-600 to-slate-300'>Please inter your card Number</h1>
            <div className=' w-96 mx-auto my-12'>

            </div>
        </div>
    );
};

export default Payment;