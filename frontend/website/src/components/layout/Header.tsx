import Link from 'next/link';
import React from 'react'
import Container from './Container';

const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-md">
            <Container>
                <div className="navbar-start flex-1">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link href={"/"}>Home</Link></li>
                            <li><Link href={"/companies"}>Companies</Link></li>
                        </ul>
                    </div>
                    <Link href={"/"} className="btn btn-ghost text-xl">Marwadi University</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/companies"}>Companies</Link></li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default Header;