import React from 'react';
import Previewimg from '../../../assets/Img/HomeImg/home3.jpeg';
import './PreviewImg.css';
import { Link } from 'react-router-dom';

const PreviewImg = () => {
    return (
        <>
            <div className='preview'>
                <img src={Previewimg} alt='' className='previewimg' />
                <div className='preview-details'>
                    <h1 className='preview-heading'>Celebrate Holi with Samsung!</h1>
                    <p className='preview-para'>Explore our latest smartwatches, buds, and mobiles. Exclusive offers await!</p>
                    {/* <button class="preview-button">
                        Show Now!
                    </button> */}
                    <button className="cta">
                        <Link to='shop' className="hover-underline-animation"> Shop now </Link>
                        <svg
                            id="arrow-horizontal"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="10"
                            viewBox="0 0 46 16"
                        >
                            <path
                                id="Path_10"
                                data-name="Path 10"
                                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                                transform="translate(30)"
                            ></path>
                        </svg>
                    </button>


                </div>
            </div>
        </>
    )
}

export default PreviewImg;