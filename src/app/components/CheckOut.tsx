'use client';

import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { useShoppingCart } from "use-shopping-cart"
import { Productcart } from "./AddToCart";

export default function CheckoutNow({name, price, description, image, currency, price_id}:Productcart){

    const {checkoutSingleItem} = useShoppingCart();

    function BuyNow(priceId:string){
        
        checkoutSingleItem(priceId)
    };

   const products={
    name:name,
    price:price,
    description:description,
    image: urlFor(image).url(),
    currency: currency,
    price_id: price_id
   };

    return(
        <div>
            <Button variant={"secondary"} onClick={()=>BuyNow(products.price_id)}>
                Checkout Now
            </Button>
        </div>
    )
};