import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ClassesCard from './ClassesCard';

const Classes = () => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/topclass')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    return (
        <section>
            <SectionTitle
                heading={"Our Popular Courses"}
                subheading={"only the best"}
            ></SectionTitle>
            <div className="container mx-auto ps-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {
                    classes.map(courses => <ClassesCard
                        key={courses._id}
                        courses={courses}
                    ></ClassesCard>)
                }
            </div>
        </section>
    );
};

export default Classes;