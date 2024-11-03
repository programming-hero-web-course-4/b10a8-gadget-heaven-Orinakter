import React from 'react';
import NavBar from './NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import FooterSection from './FooterSection/FooterSection';

const Root = () => {
    return (
        <div>
           <NavBar></NavBar>
           <Outlet></Outlet>
           <FooterSection></FooterSection>

           

        </div>
    );
};

export default Root;