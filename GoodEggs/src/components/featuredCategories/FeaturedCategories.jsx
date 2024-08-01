import React from "react";
import { categories } from "../../utils/navigation.js";

function FeaturedCategories() {
    return (
        <div className="flex flex-col w-[100vw] h-[50vw] mt-[5vh] ">
            <div className="flex px-[2vw] text-[2vw]">
                <h1>Featured Categories</h1>
            </div>

            <div className="flex flex-wrap justify-between px-[2vw] cursor-pointer">
            {
                    categories.map((item) => (
                        <div className="flex flex-col justify-between items-center my-[2vw] h-[18vw] w-[18vw] hover:shadow-xl hover:text-teal-600 hover:underline">
                            <img src={item.img} alt="food-icon" className="h-[14vw] w-[18vw]" />
                            <label className="text-[1.3vw] mb-[0.8vw]">
                                {item.title}
                            </label>
                        </div>
                    ))
                }
            
            </div>
        </div>
    )
}

export default FeaturedCategories