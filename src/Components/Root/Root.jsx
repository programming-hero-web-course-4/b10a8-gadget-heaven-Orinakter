import React from 'react';
import NavBar from './NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import FooterSection from './FooterSection/FooterSection';

const Root = () => {
    return (
        <div className='p-6'>
           <NavBar></NavBar>
           <Outlet></Outlet>
           <FooterSection></FooterSection>

           

        </div>
    );
};

export default Root;