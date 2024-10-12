'use client'
import { ReactNode } from "react"
import {CartProvider} from "use-shopping-cart"

export default function Provider({children}:{children:ReactNode}){
    
    return(
        <CartProvider
        mode="payment"
        cartMode="client-only"
        stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
        successUrl="https://next-ecommerce-mu-one.vercel.app/stripe/success"
        cancelUrl="https://next-ecommerce-mu-one.vercel.app/stripe/error"
        shouldPersist={true}
        billingAddressCollection={true}
        currency="USD"
        language="en-US"
        >
        {children}
        </CartProvider>
    )
};