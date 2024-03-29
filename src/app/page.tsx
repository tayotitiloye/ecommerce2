import Image from "next/image"
import Link from "next/link"
import CountingDown from "src/components/CountingDown"
import Featured from "src/components/Featured"
import Hero from "src/components/Hero"
import Slider from "src/components/Slider"
import Vision from "src/components/Vision"
import Newsletter2 from "src/components/Newsletter2"

async function getData() {
        
    
    const res = await fetch('https://fakestoreapi.com/products')
    
    if(!res.ok) {
     throw new Error("Data fetching failed")
        
     }

     return res.json()
     
}
 
export const revalidate = 0; 

const Home = async  () => {

    const data = await getData()
    
  return (
      <main className="px-4 pt-28 box-border overflow-x-hidden">
          
          <div>
              <Hero/>
              
          </div>
          <div >
              {/* Featured Products */}
              <Featured products={data} />
              
          </div>
          <div>
              {/* compnany visison mission history */}
              <Vision />
          </div>
          <div>
              
              {/* newsletter */}
              <Newsletter2 />
              
              
          </div>
      </main>
  )
}

export default Home


