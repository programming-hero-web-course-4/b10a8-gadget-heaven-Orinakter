import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import Gadgets from '../Gadgets/Gadgets';
import Categories from '../Categories/Categories';
import { useLoaderData } from 'react-router-dom';

const HomeSection = () => {
    const categoryData = useLoaderData();
    
    return (
        <div>
            <BannerSection></BannerSection>
            <div className="flex">
            <Categories categoryData={categoryData}></Categories>
            <Gadgets></Gadgets>
            </div>
        </div>
    );
};

export default HomeSection;