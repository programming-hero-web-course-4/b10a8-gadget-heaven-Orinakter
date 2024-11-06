import React, { useEffect, useState } from 'react';
import BannerSection from '../BannerSection/BannerSection';
import Gadgets from '../Gadgets/Gadgets';
import Categories from '../Categories/Categories';
import { useLoaderData, useParams } from 'react-router-dom';
import {Helmet} from "react-helmet";

const HomeSection = () => {
    const [categoryName,setCategoryName] = useState("")
    const categoryData = useLoaderData();
    const [allProduct,setProduct] = useState([])
    useEffect(()=>{
        fetch('../gadgetsData.json')
        .then(res=>res.json())
        .then(data=>{
            if(categoryName===""){
                setProduct(data)
            }
            else{
                const filterProduct = data.filter(product=>product.category===categoryName)
        setProduct(filterProduct);

            }
        })
        

    },[categoryName])

    const categoryController =(id)=>{
        setCategoryName(id)

    }

    const allProductBtn =()=>{
        setCategoryName("")
    }
    
    
    return (
        <div>
            <Helmet>
            <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>
            <BannerSection></BannerSection>
            <div className="flex">
            
            <Categories categoryData={categoryData} categoryController={categoryController} allProductBtn={allProductBtn}></Categories>
            
            <Gadgets allProduct={allProduct}></Gadgets>
            </div>
        </div>
    );
};

export default HomeSection;