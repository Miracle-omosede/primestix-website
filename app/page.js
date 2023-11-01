import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import News from "@/components/News";
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
    <div className="bg-[#fdf8ee] relative w-full h-auto py-40">
      <Slider/>
    </div>
    <div className="relative bg-[#47391e] pt-52 " >
    <News/>
    </div>
    <Footer/>
    </main>
  )
}
