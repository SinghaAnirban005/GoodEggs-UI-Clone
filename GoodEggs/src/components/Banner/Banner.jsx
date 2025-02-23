import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { nav } from "../../utils/navigation.js";

function Banner() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="flex flex-col items-center w-[100vw] mt-[4vw] h-[50vw]">
            <div className="flex justify-between items-center px-[2vmax] py-[2vmax] h-[20vmax] w-[98vw] rounded-xl bg-customGreen mt-[2vw]">
                <div className="flex items-center ">
                    <img
                        src="https://lh3.googleusercontent.com/s8ZotNo9OgiRv2bfubDVcW4IrMvFfdyGZ_J6HgatKdSvrdhvxZYOBDZCQBJrD8J5KfG06XHoRjtNEYMfXYfTtLy96Jb7C4rVN1cWLw"
                        alt="good-eggs"
                        className="h-[2em] w-[2em] rounded-xl"
                    />
                    <p className="text-sm text-white ml-[1em]">
                        Help us grow the Good Eggs community! Give a friend $45 off their first order, and get $40 off your next one. <span className="underline cursor-pointer">Click Here</span>
                    </p>
                </div>
                <img
                    src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_info_outline_48px-512.png"
                    className="rounded-xl h-[1.2em] w-[1.2em] cursor-pointer"
                    alt="info-icon"
                />
            </div>

            <div className=" slider-container mt-[2vw] w-[95vw] h-[120vw] md:h-[40vw]">
                <Slider {...settings} className="flex w-[95vw] h-[120vw] md:h-[40vw]">
                    {nav.map((item, index) => (
                        <div key={index} className="flex justify-between w-[95vw] ">
                            <div className="flex flex-wrap lg:flex justify-between w-[95vw] ">
                               <div className="flex">
                               <img
                                    src={item.img}
                                    alt="img-icon"
                                    className="h-[60vw] md:h-[40vw] w-[100vw] md:w-[60vw]"
                                />
                               </div>

                               <div className="flex flex-col items-center justify-center w-[95vw] md:w-[35vw] py-[4vw] mt-[8vw] md:mt-[0vw] h-[40vw] md:h-[40vw] px-[1vw]">
                                <h1 className="flex text-center text-2xl font-bold">{item.title}</h1>
                                <h2 className="text-center mt-[1vw] text-sm">{item.description}</h2>
                                <button className="text-blue-500 w-[30vmin] border-blue-500 border-2 rounded-2xl text-sm px-[0.2vw] py-[0.4vw] mt-[3vh] md:mt-[1vw] hover:text-white hover:bg-blue-500">
                                    {item.button}
                                </button>
                            </div>

                            </div>
                                                     
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Banner;
