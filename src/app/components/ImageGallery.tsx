'use client'

import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import React, { useState } from 'react';

export interface IImage {
   _type: string;
   asset: {
     _ref: string;
     _type: string;
   };
 }
 
interface IImages{
    productImage:IImage[];
};

export default function ImageGallery({productImage}:IImages){    
    const [bigImage, setBigImage]= useState(productImage[0])

    const handleSmallImage=(image:IImage)=>{
       setBigImage(image);
    };
    
     return(

      // It contains the whole container that small & big image will display in 5 columns grid 
        <div className=' grid gap-4 lg:grid-cols-5'>

         {/* It displays the small images */}
            <div className=' flex gap-4 lg:order-none lg:flex-col'>
             {
                productImage.map((image, idx)=>(
                   <div key={idx} className=' overflow-hidden rounded-lg bg-gray-200'>
                     <Image src={urlFor(image).url()} alt='photo' className='h-full w-full object-cover cursor-pointer' width={300} height={300}
                     onClick={()=>handleSmallImage(image)}
                     />
                   </div>
                ))
             }
            </div>

            {/* It displays the one large image */}
            <div className=' md:mb-12 relative overflow-hidden rounded-lg bg-gray-800 lg:col-span-4'>
              <Image src={urlFor(bigImage).url()} alt='photo' width={500} height={500} className=' h-full w-full object-cover '/>
            </div>
        </div>
     )
};
