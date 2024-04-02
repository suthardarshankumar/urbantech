import React from 'react'
import PreviewImg from '../../components/home/PreviewImg/PreviewImg';
import AppleRow from '../../components/home/Applerow/AppleRow';
import ProductIcon from '../../components/home/ProductIcon/ProductIcon';
// import Offers1 from '../../components/home/Offers/Offers1/Offers1';
import NewAUT from '../../components/home/NewAUT/NewAUT';
import Brands from '../../components/home/Brands/Brands';
import AppleAUT from '../../components/home/AppleAUT/AppleAUT';
import ProductAUT from '../../components/home/ProductAUT/ProductAUT';


const Home = () => {
    return (
        <>
            <PreviewImg />
            <ProductIcon />
            {/* <Offers1 /> */}
            <Brands />
            <AppleRow />
            <NewAUT />
            <AppleAUT />
            <ProductAUT />
        </>
    )
}

export default Home;