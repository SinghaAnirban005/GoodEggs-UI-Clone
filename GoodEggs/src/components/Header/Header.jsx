import React from "react";

function Header(){

    const items = [
        "Fresh Picks", "Meal Solutions",
        "Produce", "Dairy and Eggs",
        "Meat and Fish", "Bakery",
        "Deli", "Snacks",
        "Drinks", "Alcohol",
        "Pantry", "Frozen",
        "Plant Based", "Health & Home",
        "Good Deals",
        "Reorder" 
    ]

    return (
        <div className="flex flex-col h-[10em] w-[100vw] items-between">
            <nav className="flex flex-wrap justify-center lg:flex lg:justify-between px-[1vw] h-[10vm] items-center ">
                <img src="https://goodeggs-assets2.imgix.net/img/svg/icons/ge-header-logo-white.ae2b509eb6e12611e902.svg?auto=format" alt="Logo" className="mr-[1vw] lg:mr-[0vw]" />
                <div className="flex justify-between w-[28em] cursor-pointer mr-[6vw]">
                    <div className="hover:text-teal-600 hover:underline text-sm font-bold">
                        Help Center
                    </div>
                    <div className="hover:text-teal-600  hover:underline text-sm font-bold">
                        Invite Friends
                    </div> 
                    <div className="hover:text-teal-600 hover:underline text-sm font-bold">
                        Buy a Gift Card
                    </div>
                    <div className="hover:text-teal-600 hover:underline text-sm font-bold">
                        Join Membership
                    </div>
                </div>

                <div className="flex cursor-pointer  w-[22em] justify-between">
                    <div className="hover:text-bg-600 hover:underline text-sm"> 
                        <p>Shopping for <span className="font-bold ">Tomorrow</span> in <span className="font-bold">90039</span></p>
                    </div>
                    <div className="flex items-center">
                        <img src="https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-red-heart-icon-isolated-png-image_1726594.jpg" alt="fav-icon" className="h-[1.2em] w-[1.2em] rounded-md" />
                        <p className="hover:text-teal-600 hover:underline text-sm font-bold">Favorites</p>
                    </div>
                    <div>
                        <p className="hover:text-teal-600 hover:underline text-sm font-bold">Sign In</p>
                    </div>
                </div>
            </nav>

            <nav className="flex justify-between h-[5em] items-center px-[1vw] border-b-2 border-slate-300">
                {
                    items.map((header) => (
                        <div className="cursor-pointer hidden lg:flex" key={header}>
                            <p className="text-sm font-bold hover:underline hover:text-teal-600">{header}</p>
                        </div>
                    ))
                  
                }
                <img src="https://www.pikpng.com/pngl/m/109-1092659_search-icon-small-png-clipart.png" className="rounded-md h-[1.5em] w-[1.5em] cursor-pointer" alt="Seacrh icon" />
                <div className="bg-green-600 rounded-3xl p-2 hover:opacity-50 cursor-pointer">
                    <img src="https://cdn-icons-png.flaticon.com/512/2662/2662503.png" className="rounded-md h-[1.8em] w-[1.8em]" alt="bag" />
                </div>
            </nav>
        </div>
    )
}

export default Header