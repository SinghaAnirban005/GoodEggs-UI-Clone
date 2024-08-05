import React from "react";
import { categories } from "../../utils/navigation.js";

function FeaturedCategories() {
    return (
        <div className="flex flex-col w-[100vw] h-[52vw] mt-[120vw] md:mt-[8vw] ">
            <div className="flex px-[8vw] md:px-[2vw] text-[2vw]">
                <h1>Featured Categories</h1>
            </div>

            <div className="flex flex-wrap md:flex px-[10vw] md:px-[2vw] w-[100vw] h-[200vw] md:h-[50vw] items-center justify-between cursor-pointer">
            {
                    categories.map((item) => (
                        <div className="flex flex-col justify-between items-center my-[2vw] h-[35vw] w-[35vw] md:h-[18vw] md:w-[18vw] hover:shadow-xl hover:text-teal-600 hover:underline">
                            <img src={item.img} alt="food-icon" className="h-[30vw] w-[30vw] md:h-[18vw] md:w-[18vw]" />
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