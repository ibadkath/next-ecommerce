'use client';

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { links } from "./Navbar"
import { usePathname } from "next/navigation";
import Link from "next/link";

  export default function MenuBar(){
    const pathname= usePathname();

    return (
        <Sheet>
            <SheetTrigger>
            <Menu/>
            </SheetTrigger>
  <SheetContent>
    <SheetHeader>

      <nav className=' gap-y-10 flex flex-col items-start '>
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
    
    </SheetHeader>
  </SheetContent>
</Sheet>

    )
  };