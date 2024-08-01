import React from "react"
import { partners } from "../../utils/navigation.js"

function Popular() {
    return (
        <div className="flex flex-col w-[100vw] h-[40vw] mt-[5vh] ">
            <div className="flex text-[2vw] px-[2vw]">
                <h1>Our team of Master Producers & Partners</h1>
            </div>

          <div className="flex flex-wrap justify-start items-center w-[100vw]">
          {
                partners.map((item) => (
                    <div key={item.img} className="flex items-center h-[12.5vw] w-[12.5vw] mx-[2vw] cursor-pointer my-[2vw] hover:shadow-xl ">
                        <img src={item.img} alt="banner-icon" className="" />
                    </div>
                ))
            }
          </div>
        </div>
    )
}

export default Popular