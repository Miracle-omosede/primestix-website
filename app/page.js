import Featured from "@/components/Featured";
import Slider from "@/components/Slides";
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
    <div className="bg-[#fdf8ee] relative w-full h-auto py-52">
      <Slider/>
    </div>
    </main>
  )
}
