import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Animation from '../Components/Animation';

const Root = () => {
    const navigation = useNavigation()
    return (
        <>
            <Navbar />
            {
                navigation.state === 'loading' ? <Animation /> : <>
                    <main>
                        <Outlet />
                    </main>
                    <Footer />
                </>
            }
        </>
    );
};

export default Root;