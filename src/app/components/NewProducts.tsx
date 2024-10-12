import { client } from '@/sanity/lib/client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export async function getData(){

  const query= client.fetch (`*[_type == 'product' && _id !='6d363241-c0fb-4bd3-a461-a95a7446da32'][0..3] | order(_createdAt desc){
    productTitle,
    productPrice,
    "_slug":productSlug.current,
    _id,
    productCategory->{
      categoryName
    } ,
    "imageUrl_1":productImage[0].asset->url
    }`)

return query;
};

export interface Iproducts{
  productTitle:string,
  productPrice:number,
  _slug: string,
  productCategory:{
  categoryName:string
  },
  imageUrl_1: string,
  _id:string
};

export default async function NewProducts(){
 
  const data: Iproducts[]= await getData();

  return(

    // This div wraps the entire section
  <div className=' bg-white mb-6 lg:mb-10'>

    {/* centers the content and limits the maximum width, with padding to create spacing around the inner content. */}
    <div className=' mx-auto max-w-2xl px-4 py-16 lg:max-w-7xl sm:px-8 sm:py-24 lg:px-8 '>
        <h2 className=' text-3xl font-bold'>Our Newest Products</h2>

  {/*It is responsible for displaying the products in a responsive grid layout with gaps between the items. */}
    <div className=' mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {
          data.map((products)=>(

            // Each product is wrapped in a div with a key prop to uniquely identify it.
              <div key={products._id} className='relative'>

                {/* controls the layout and appearance of the product image */}
                <div className='bg-gray-300 aspect-square rounded-md overflow-hidden h-[400px] sm:w-full sm:h-[330px] lg:h-[340px] hover:opacity-80'>
                   <Image src={products.imageUrl_1} alt='product Image' className=' w-full object-cover object-center lg:h-full lg:w-full' width={300} height={300}/>
                </div>

                    {/* It contains the product title, category, and price, and spaces them apart with flexbox for a clean layout. */}
                    <div className=' mt-4 sm:flex sm:flex-row sm:justify-between'>
                      
                             {/*It holds the product title and category information with appropriate styling for text. */}
                            <div>
                              <h3 className=' text-gray-700 font-medium'>
                                <Link href={`/product/${products._id}`}>
                                {products.productTitle}
                                </Link>
                              </h3>
                              <p className=' text-gray-500'>{products.productCategory.categoryName}</p>
                            </div>
                            <p className='font-medium text-gray-900'>${products.productPrice}</p>
                    </div>
              </div>
          ))
        }
    </div>
    </div>
  </div>
  )
};
