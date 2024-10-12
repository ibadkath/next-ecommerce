
import Hero from "./components/Hero";
import NewProducts from "./components/NewProducts";

export const dynamic="force-dynamic";

export default function Home(){
  return(
    <>
    <main>

      {/* It contains the hero section of our website */}
      <Hero/>
      
      {/* It contains the new products  */}
      <NewProducts/>
      
    </main>
    </>
  )
};