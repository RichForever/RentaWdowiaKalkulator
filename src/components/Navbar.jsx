import {Link, NavLink} from "react-router-dom";
import React from "react";
import {useQuery} from '@apollo/client';
import { GET_MENU_ITEMS } from "../queries/getMenuItems";

import './Navbar.css'

const Navbar = () => {

    const {loading, error, data} = useQuery(GET_MENU_ITEMS);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <nav
            className="navbar flex w-full items-center justify-between bg-transparent"
            aria-label="Global"
        >
            <div className="flex lg:flex-1">
                <Link to="/" className="-m-1.5 p-1.5 text-white hover:text-white">
                    <span className="font-semibold">RentaWdowia Kalkulator</span>
                </Link>
            </div>
            {data && (
                <div className="flex gap-x-4">
                    {data.renderNavigation.map(({id, title, path}) =>
                        <NavLink
                            to={path}
                            key={id}
                            className="text-sm text-[#b2ceff] font-semibold leading-6 hover:underline hover:text-white"
                        >
                            {title}
                        </NavLink>
                    )}
                </div>
            )}
        </nav>
    );
};
export default Navbar;

    //
    // ? "active text-blue-500"
    // : "text-gray-900";