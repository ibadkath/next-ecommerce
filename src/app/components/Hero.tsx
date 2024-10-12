import { client } from "@/sanity/lib/client";
import Image from "next/image";

async function getImg(){
  const res= await client.fetch( `*[_type =='heroImg'][0]{
  "imageUrl_1":img1.asset->url,
  "imageUrl_2":img2.asset->url,
    
}`)

    return res;
};

interface IImages{
  imageUrl_1:string,
  imageUrl_2: string
};

export default async function Hero() {
  const data:IImages = await getImg();

  return (

    <section className="mx-auto px-4 max-w-2xl lg:max-w-7xl lg:px-8 sm:pb-6">
      {/* Outer container for section layout and spacing */}
      <div className="mb-8 flex flex-wrap justify-between md:mb-12">
        
        {/* Left column: contains the main heading and description */}
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-40">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl">
            Own Your Style with Confidence!
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            We sell only the most exclusive and high quality products for you. 
            We are the best so come and shop with us.
          </p>
        </div>

        {/* Right column: contains the two hero images */}
        <div className="mb-12 flex w-full md:mb-16 lg:w-7/12">
          
          {/* First image: styled with a shadow and background */}
          <Image
            className="h-full object-cover object-center relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0"
            width={300}
            height={200}
            src={data.imageUrl_1}
            alt="hero"
          />

          {/* Second image: stacked next to the first one */}
          <Image
            className="h-full object-cover object-center overflow-hidden rounded-lg shadow-lg"
            width={300}
            height={200}
            src={data.imageUrl_2}
            alt="hero2"
          />
        </div>
      </div>
    </section>
  )
};
