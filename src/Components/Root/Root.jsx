import React, { createContext } from 'react';
import NavBar from './NavBar/NavBar';
import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import FooterSection from './FooterSection/FooterSection';
import NavBar2 from './NavBar2/NavBar2';
export const navContext =createContext();


const Root = () => {
    const pagePath = useLocation();
    
    return (
        <navContext.Provider value={pagePath.pathname}>
            <div className='p-6'>
                {
                    pagePath.pathname=== "/" ? <NavBar2></NavBar2> : <NavBar></NavBar>

                }
           
           <Outlet></Outlet>
           <FooterSection></FooterSection>
           

        </div>

        </navContext.Provider>
        
    );
};

export default Root;