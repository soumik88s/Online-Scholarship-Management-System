import React from 'react';
import Banner from './Banner';
import TopScholarships from './TopScholarships';
import { useLoaderData } from 'react-router-dom';
import Contact from './Contact';
import Reviews from './Reviews';
import LatestBlogs from './LatestBlogs';
import NewsLetter from './NewsLetter';
import FAQ from './FAQ';
import HowItWorks from './HowItWorks';

const Home = () => {
    const data = useLoaderData()
    return (
        <>
            <Banner />
            <TopScholarships data={data} />
            <Reviews />
            <HowItWorks />
            <Contact />
            <LatestBlogs />
            <NewsLetter />
            <FAQ />
        </>
    );
};

export default Home;