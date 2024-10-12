'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { ShoppingCart} from "lucide-react"
import { useShoppingCart } from 'use-shopping-cart';
import MenuBar from './MenuBar';

export const links=[
    {name:"Home", href: "/"},
    {name:"Men", href: "/Men"},
    {name:"Women", href: "/Women"},
    {name:"Kids", href: "/Kids"},
];

export default function Navbar() {

    const pathname= usePathname();
    const {handleCartClick}= useShoppingCart();

      return (

        // It wraps the whole navbar 
<header className=' sticky top-0 bg-white z-20 mb-8 border-b'>

    {/* It contains all the items in this navbar like Links, Shopping Cart icon, Menubar icon. */}
    <div className=' flex justify-between items-center mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl'>
        <Link href={"/"}>
        <h1 className='text-2xl md:text-4xl font-bold'>Quick<span className=' text-primary'>Wear</span></h1>
        </Link>

        {/* It ensures that If the user is at the Home page, Home page links remains primary and other links will get primary at hover */}
        <nav className=' hidden gap-12 lg:flex 2xl:ml-16'>
            {
                links.map((link,idx)=>(
                  <div key={idx}>
                {pathname === link.href ?  (
                 <Link href={link.href} className=' text-lg font-semibold text-primary'>
                    {link.name}</Link>
                ) : 
                 (
                    <Link href={link.href} className=' text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary'>{link.name}</Link>
                )
                }
                  </div>
                ))
            }
        </nav>

           {/* It contains the shopping Cart icon */}
        <div className=' flex'>
            <Button onClick={handleCartClick} variant={'outline'} className=' flex flex-col gap-y-1 h-12 w-12 sm:h-16 sm:w-16 md:w-20 md:h-20 border-none'>
            <ShoppingCart className=' h-8 w-8'/>
            </Button>
        </div>
        
        {/* It contains the menubar icon */}
        <div className='flex lg:hidden'>
          <MenuBar/>
        </div>
    </div>
</header>  
)
};

