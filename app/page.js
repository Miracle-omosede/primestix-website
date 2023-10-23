import Featured from "@/components/Featured";
import ImageSlider from "@/components/imageSlider";


export default function Home() {
  return (
    <main className="flex flex-col relative">
      <div className="carousel">
        <ImageSlider/> 
        
      </div>
    <div className="w-full h-auto">
    <Featured/>
    </div>
    </main>
  )
}
