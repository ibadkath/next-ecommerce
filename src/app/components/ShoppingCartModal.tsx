'use client';

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
  } from "@/components/ui/sheet"
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";

  export default function ShoppingCartModal(){

    const {cartCount, shouldDisplayCart, handleCartClick, cartDetails, removeItem, totalPrice, redirectToCheckout} = useShoppingCart();
     
    async function handleCheckout(event:React.MouseEvent<HTMLButtonElement>){
          event.preventDefault();

          try {
            const result= await redirectToCheckout()
            if(result?.error){
              console.log("result")
            }
          } catch (error) {
            console.log({message:(error as {message:string}).message})
            
          }
    };
    return(
    <Sheet open={shouldDisplayCart} onOpenChange={handleCartClick}>
      <SheetContent className=" sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        {/* It acts as the main container for the shopping cart modal. */}
        <div className=" h-full flex flex-col justify-between">
          {/*It wraps the list of cart items. It has a flex-1 property to allow it to grow and fill the available space. The overflow-y-auto ensures the list can scroll  */}
             <div className=" flex-1 mt-8 overflow-y-auto">
              {/*It holds the cart item entries in a vertical list. The divide-y class adds a divider between each item for visual separation.  */}
           <ul className=" -my-6 divide-y divide-gray-200">
            {cartCount === 0 ? (
               <li className=" py-6">No items in the cart </li>
              ) : (
                <>
                {Object.values(cartDetails ?? {}).map((entry)=>(
                  <li key={entry.price_id}  className=" flex py-6">
                    {/* It wraps the product image for each item in the cart.  */}
                    <div className="h-20 w-20 flex-shrink-0 rounded-md">
                      <Image src={entry.image as string} alt="Product photo"
                       width={100}
                       height={100}
                      />
                    </div>
                    {/* It holds the details of the product name, price, and description. It's laid out in a column, with the description at the bottom. */}
                    <div className=" ml-4 flex flex-1 flex-col">
                    <div>
                      {/* It arranges the product name and price */}
                    <div className=" flex justify-between font-medium">
                      <h3 >{entry.name}</h3>
                      <p className="ml-4">${entry.price}</p>
                      </div>

                      <p className=" mt-1 text-sm text-gray-500 line-clamp-2">{entry.description}</p>
                      </div>
                      {/*It contains the quantity and the "Remove" button, aligning them at the bottom of the flex container.*/}
                      <div className=" mt-2 flex flex-1 items-end justify-between font-medium">
                        <p>Qty: {entry.quantity}</p>
                        <div className=" flex">
                        <button onClick={()=> removeItem(entry.id)} type="button" className="text-primary hover:text-primary/80">Remove</button>
                      </div>
                      </div>
                      </div>
                    
                  </li>
                ))
                }
                </>
              )
            }
           </ul>
           </div>
{/* It holds the checkout information which includes the subtotal, a message about shipping/taxes, and the checkout button. */}
     <div className=" border-t border-gray-300 px-6 py-6 mt-3 ">

      {/* It arranges the subtotal and total price by displaying flex */}
         <div className=" flex justify-between font-medium">
            <p>Subtotal:</p>
            <p>${totalPrice}</p>
          </div>

          <p className=" mt-0.5 text-gray-500">Shipping and taxes are calculated at checkout</p>
          {/* It wraps the checkout button */}
          <div className=" mt-4">
          <Button onClick={(event)=>handleCheckout(event)} className=" w-full">
            Checkout
          </Button>
         </div>
        {/* It contains the 'OR' and 'Continue Shopping' button */}
         <div className="mt-5 mb-3 flex justify-center text-gray-500 text-sm">
               <p>OR{" "}
                <button onClick={handleCartClick} className="font-medium text-primary hover:text-primary/80 underline">Continue Shopping</button>
               </p>
          </div>

         </div>
             </div>
      
      </SheetContent>
    </Sheet>
  )
};

    
   