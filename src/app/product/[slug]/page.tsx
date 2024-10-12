
import AddToCart from "@/app/components/AddToCart";
import CheckoutNow from "@/app/components/CheckOut";
import ImageGallery, { IImage } from "@/app/components/ImageGallery";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { Star, Truck } from "lucide-react";

 const getData= async(slug:string):Promise<Iproduct> =>{

const query= await client.fetch(`*[_type == "product" && _id == '${slug}'][0]{
  productTitle,
  productPrice, 
  productDescription,
  productImage,
    _id,
  productCategory ->{
    categoryName
  },
    "_slug":productSlug.current,
    productPriceId
}`) ;

return query;
};

interface Iproduct{
  productTitle:string,
  productPrice:number, 
  productDescription:string,
  productImage: IImage[] ,
  _id:string,
  productCategory:{
  categoryName:string
  },
  productPriceId:string,
  _slug:string
};

//export const dynamic="force-dynamic";

export default async function ProductPage({params}:{params:{slug:string}}){
     
    const data:Iproduct= await getData(params.slug);
    return(

      // It wraps the entire content of the page
        <div className=" bg-white">

          {/* This provides a maximum width for the page content and centers it on the screen */}
         <div className=" mx-auto max-w-screen-xl px-4">

          {/* It divides the layout into a two-column grid. It's used to position the image gallery on the left and product details on the right*/}
            <div className=" grid gap-8 md:grid-cols-2">
            <ImageGallery productImage={data.productImage}/>

             {/* It contains all the product information (title, category, price) */}
            <div className=" md:py-8">

              {/* It contains the product Category and Title */}
               <div className="mb-2 md:mb-3">
                  <span className=" mb-0.5 inline-block text-gray-500">{data.productCategory.categoryName}</span>
                  <h2 className=" text-2xl font-bold lg:text-3xl">{data.productTitle}</h2>
               </div>

               {/* It holds the product rating and the number of ratings */}
               <div className=" mb-6 flex items-center gap-3">
                <Button className=" rounded-full gap-x-2">
                  <span className=" text-sm">4.2</span>
                  <Star className=" h-5 w-4"/>
                </Button>
                <span className=" font-medium text-gray-500">56 Ratings</span>
               </div>

               {/* It contains the product Price */}
               <div className=" mb-4">
                  <span className="text-xl md:text-2xl text-gray-800 font-bold">${data.productPrice}</span>
               </div>

                {/* It provides information about shipping */}
               <div className=" mb-4 flex items-center  text-gray-500 gap-x-2">
               <Truck className=" w-5 h-5"/>
                 <span className=" text-sm" > 2-4 days shipping</span>
               </div>

               {/* It hols the "Add to cart" and "Checkout Now" button.  */}
                    <div className=" gap-x-2 flex">
                      <AddToCart 
                      name={data.productTitle}
                       price={data.productPrice} 
                       key={data._id}
                       price_id={data.productPriceId}
                       description={data.productDescription}
                        image={data.productImage[0]}
                        currency="USD"
                        />
                        <CheckoutNow
                        name={data.productTitle}
                        price={data.productPrice} 
                        key={data._id}
                        price_id={data.productPriceId}
                        description={data.productDescription}
                         image={data.productImage[0]}
                         currency="USD"
                        />
                     </div>
                <p className=" mt-10 mb-16 text-gray-500 text-base tracking-wide" >{data.productDescription}</p>
            </div>
            </div>

         </div>
        </div>
    )
};