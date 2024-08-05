import React from "react"
import { partners } from "../../utils/navigation.js"

function Popular() {
    return (
        <div className="flex flex-col justify-center w-[100vw] h-[180vw] md:h-[40vw] mt-[160vw] md:mt-[2vw] ">
            <div className="flex text-[2vw] px-[8vw] md:px-[2vw]">
                <h1>Our team of Master Producers & Partners</h1>
            </div>

          <div className="flex flex-wrap md:flex px-[10vw] md:px-[1vw] justify-between items-center w-[100vw]">
          {
                partners.map((item) => (
                    <div key={item.img} className="flex items-center h-[30vw] w-[30vw] md:h-[12.5vw] md:w-[12.5vw] mx-[2vw] cursor-pointer my-[2vw] hover:shadow-xl ">
                        <img src={item.img} alt="banner-icon" className="rounded-md" />
                    </div>
                ))
            }
          </div>
        </div>
    )
}

export default Popular