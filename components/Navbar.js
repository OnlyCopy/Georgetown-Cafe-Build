import React from 'react';
import Image from 'next/image';
import GtcLogo from '../images/gtc.png';
import Link from 'next/link';
import {useState} from 'react';
import {LocationMarkerIcon, PhoneIcon, MenuIcon, XIcon} from '@heroicons/react/solid'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    let MobileMenu;

    
    if (isOpen === true) {
        MobileMenu = 
        <nav className="w-screen h-screen bg-white md:hidden">
            <div className="nav-elements mt-8 flex flex-col">
                    <div className="navigation flex flex-col items-center">
                        <ul className="flex flex-col space-x-4 text-3xl items-center space-y-4 border-b-2 pb-2 mb-5">
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/menu">
                                    <a>Menu</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/reviews">
                                    <a>Reviews</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <a>About</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="discovery items-center space-y-4 text-xl">
                        <div>
                            <Link href="/about">
                                <a className="flex items-center space-x-1 hover:underline">
                                    <LocationMarkerIcon className="w-5 h-5 text-gray-800" />
                                    <p>Find us</p>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <a className="hover:underline" href="tel:859-309-2777">
                            <div className="flex items-center space-x-1">
                            <PhoneIcon className="w-5 h-5 text-gray-800" />
                            <p className="font-bold">
                                Call now!
                            </p>
                            </div>
                            <span>(859)-309-2777</span>
                            </a>
                        </div>
                    </div>
                    </div>
            </div>
        </nav>

    }

  return (
    <nav className="w-full border-b-2 pb-2 z-20">
        <div className="nav-elements flex mt-3">
            <div className="px-10 w-full max-w-[1440px] md:mx-auto flex items-center justify-between text-lg">
                <div className="left flex align-items items-center">
                    <div className="logo">
                        <Link href="/">
                            <a className="hidden sm:block">
                            <Image className="rounded-full" src={GtcLogo} alt="Logo" width={60} height={60}/>
                            </a>
                        </Link>
                        <Link href="/">
                        <a className="sm:hidden">
                            <Image className="rounded-full" src={GtcLogo} alt="Logo" width={40} height={40}/>
                            </a>
                        </Link>
                    </div>
                    <div className="navigation hidden md:block ml-10">
                        <ul className="flex space-x-4">
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/menu">
                                    <a>Menu</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/reviews">
                                    <a>Reviews</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <a>About</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <div className="mobile-menu">
                        <MenuIcon className="w-6 h-6 cursor-pointer md:hidden" onClick={() => setIsOpen(!isOpen)} />
                        <div>
                            { MobileMenu }
                        </div>
                    </div>
                    <div className="discovery hidden md:inline-flex flex items-center space-x-4">
                        <div>
                            <Link href="/about">
                                <a className="flex items-center space-x-1 hover:underline">
                                    <LocationMarkerIcon className="w-5 h-5 text-gray-800" />
                                    <p>Find us</p>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <a className="hover:underline" href="tel:859-309-2777">
                            <div className="flex items-center space-x-1">
                            <PhoneIcon className="w-5 h-5 text-gray-800" />
                            <p className="font-bold">
                                Call now!
                            </p>
                            </div>
                            <span>(859)-309-2777</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;