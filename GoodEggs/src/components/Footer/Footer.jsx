import React from "react";
import { Shop } from "../../utils/navigation.js";
import { AboutGoodEggs }  from  "../../utils/navigation.js";
import { HolidayGuides } from "../../utils/navigation.js"
import {NeedHelp} from "../../utils/navigation.js"

function Footer() {
    return (
        <footer className="flex flex-col w-[100vw] bg-customGreen h-[180vw] justify-between md:h-[33vw] mt-[10vh]" >
            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between border-b-2 p-[8vw] px-[4vw] w-[100vw] h-[175vw] md:h-[28vw]">
                <div className="md:h-[10vw] justify-center md:justify-start md:w-[12vw] h-[20vw] w-[100vw]">
                <img src="https://goodeggs-assets2.imgix.net/img/svg/icons/logo_green.a85ff2ea3df8161ab00a.svg?auto=format" alt="good-egg-icon" className="h-[20vw] w-[100vw] md:h-[10vw] md:w-[12vw]" />
                </div>
                
                <div className="flex flex-col items-center md:items-start md:flex-row justify-center md:justify-between h-[80vh] md:h-[30vh] mr-[0vw] md:mr-[12vw] w-[100vw] md:w-[50vw]">
                <ul className="flex flex-col justify-start items-center md:items-start mb-[2vw] md:mb-[0vw]">
                    <h1 className="font-bold text-white">Shop</h1>
                    {
                        Shop.map((item) => {
                         return   <li className="text-white text-sm pt-[0.6vw] hover:underline cursor-pointer">
                                {item.data}
                            </li>
                        })
                    }
                </ul>

                <ul className="flex flex-col justify-start items-center md:items-start mb-[2vw] md:mb-[0vw]">
                    <h1 className="font-bold text-white">About Good Eggs</h1>
                    {
                        AboutGoodEggs.map((item) => {
                         return   <li className="text-white text-sm pt-[0.6vw] hover:underline cursor-pointer">
                                {item.data}
                            </li>
                        })
                    }
                </ul>

                <ul className="flex flex-col justify-start items-center md:items-start mb-[2vw] md:mb-[0vw]">
                    <h1 className="font-bold text-white">Holiday Guides</h1>
                    {
                        HolidayGuides.map((item) => {
                         return   <li className="text-white text-sm pt-[0.6vw] hover:underline cursor-pointer">
                                {item.data}
                            </li>
                        })
                    }
                </ul>

                <ul className="flex flex-col justify-start items-center md:items-start mb-[2vw] md:mb-[0vw]">
                    <h1 className="font-bold text-white">Need Help?</h1>
                    {
                        NeedHelp.map((item) => {
                         return   <li className="text-white text-sm pt-[0.6vw] hover:underline cursor-pointer">
                                {item.data}
                            </li>
                        })
                    }

                    <h1 className="font-bold text-white pt-[2vw]">Get The App</h1>
                    <div className="flex pt-[0.6vw]">
                    <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/36-android-512.png" alt="android-icon" className="h-[2vw] w-[2vw] hover:opacity-80 cursor-pointer mr-[0.8vw]" />
                    <img src="https://e7.pngegg.com/pngimages/507/998/png-clipart-apple-icon-format-computer-icons-graphics-ericsson-heart-logo.png" alt="mac-icon" className="h-[2vw] w-[2vw] hover:opacity-80 cursor-pointer" />
                    </div>
                </ul>
                </div>

                <div className="flex h-[5vw] w-[100vw] md:w-[10vw] justify-center md:justify-none mb-[2vw] md:mb-[0vw]">
                    <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png" alt="facebook-icon" className="h-[5vw] md:h-[3vw] md:w-[3vw] cursor-pointer mr-[1vw] md:mr-[1vw]" />
                    <img src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png" alt="insta-icon" className="h-[5vw] md:h-[3vw] md:w-[3vw] cursor-pointer ml-[1vw] md:mr-[0vw]" />
                </div>
            </div>

            <div className="flex items-center justify-center md:justify-start md:mx-[6vw] w-[100vw] h-[10vw] md:h-[5vw]">
                    <h1 className="text-white mr-[2vw] hover:underline">@2024 Good Eggs, Inc</h1>
                    <h1 className="text-white hover:underline">Terms and Privacy</h1>
            </div>
        </footer>
    ) 
}

export default Footer