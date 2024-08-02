import React from "react";
import { Shop } from "../../utils/navigation.js";
import { AboutGoodEggs }  from  "../../utils/navigation.js";
import { HolidayGuides } from "../../utils/navigation.js"
import {NeedHelp} from "../../utils/navigation.js"

function Footer() {
    return (
        <footer className="flex flex-col w-[100vw] bg-customGreen h-[120vw] md:h-[33vw] mt-[5vh]" >
            <div className="flex-col bg-slate-600 md:flex justify-between border-b-2 pt-[8vw] px-[4vw] w-[100vw] h-[100vw] md:h-[28vw]">
                <div>
                <img src="https://goodeggs-assets2.imgix.net/img/svg/icons/logo_green.a85ff2ea3df8161ab00a.svg?auto=format" alt="good-egg-icon" className="h-[20vw] w-[20vw] md:h-[10vw] md:w-[12vw]" />
                </div>
                
                <div className="flex justify-between mr-[12vw] w-[45vw]">
                <ul className="flex flex-col justify-start ">
                    <h1 className="font-bold text-white">Shop</h1>
                    {
                        Shop.map((item) => {
                         return   <li className="text-white text-sm pt-[0.6vw] hover:underline cursor-pointer">
                                {item.data}
                            </li>
                        })
                    }
                </ul>

                <ul className="flex flex-col">
                    <h1 className="font-bold text-white">About Good Eggs</h1>
                    {
                        AboutGoodEggs.map((item) => {
                         return   <li className="text-white text-sm pt-[0.6vw] hover:underline cursor-pointer">
                                {item.data}
                            </li>
                        })
                    }
                </ul>

                <ul className="flex flex-col">
                    <h1 className="font-bold text-white">Holiday Guides</h1>
                    {
                        HolidayGuides.map((item) => {
                         return   <li className="text-white text-sm pt-[0.6vw] hover:underline cursor-pointer">
                                {item.data}
                            </li>
                        })
                    }
                </ul>

                <ul className="flex flex-col">
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

                <div className="flex">
                    <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png" alt="facebook-icon" className="h-[3vw] w-[3vw] cursor-pointer mr-[1vw]" />
                    <img src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png" alt="insta-icon" className="h-[3vw] w-[3vw] cursor-pointer" />
                </div>
            </div>

            <div className="flex items-center mx-[6vw] w-[100vw] h-[5vw]">
                    <h1 className="text-white mr-[2vw] hover:underline">@2024 Good Eggs, Inc</h1>
                    <h1 className="text-white hover:underline">Terms and Privacy</h1>
            </div>
        </footer>
    ) 
}

export default Footer