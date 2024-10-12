import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";


export default function StripeSuccess(){

    return(
        <div className=" flex flex-col justify-center items-center min-h-[70vh] ">
            <Check className="h-12 w-12 text-green-600"/>
         <h2 className=" mt-4 text-2xl font-semibold">Payment Done!</h2>
     <p className=" mt-4">Thank you for your purchase</p>
         
         <div>
            <Button className=" mt-4">
                <Link href={"/"}>
                Go Back
                </Link>
              
            </Button>
         </div>
        </div>
    )
};