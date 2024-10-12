'use client';

import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { useShoppingCart } from "use-shopping-cart"

interface SanityImage {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  
export interface Productcart{ 
      name: string,
      price:number,
      description: string,
      image: SanityImage,
      currency: string,
      price_id:string
    };

export default function AddToCart({name, price, description, image, currency,price_id}:Productcart){

    const {addItem, handleCartClick} = useShoppingCart();

   const products={
    name:name,
    price:price,
    description:description,
    image: urlFor(image).url(),
    currency: currency,
    price_id:price_id
   };
    return(
        
            <Button onClick={() =>{
                addItem(products), handleCartClick();
            }  }>
                Add To Cart
            </Button>  
    )
};