import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SliderComp = () => {
    const settings = {
        //dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div>
            <Slider {...settings}>

                <div className='relative'>
                    <div className='flex justify-center items-center'>
                        <button className='bottom-1 absolute text-red-400 text-5xl'>
                            Hemen incele!
                        </button>
                    </div>
                    <img className='' src="https://baygiyim.eticaret.webdeneme.com/siteler/baygiyim/image/catalog/slider-1.jpg" alt="" />

                </div>

                <div className=''>
                    <img src="https://bayangiyimeticaret.eticaret.webdeneme.com/siteler/bayangiyimeticaret/image/catalog/slider-2.jpg" alt="" />
                </div>

            </Slider>
        </div>
    )
}

export default SliderComp
