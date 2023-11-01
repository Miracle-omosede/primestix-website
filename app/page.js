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
    <div className='absolute top-0 z-[999] bg-white h-[200px] w-[300px]'>
      <div className='two alt-two text-white absolute bottom-[10%] flex items-centr w-full justify-center'>
                <h1 className='primary-heading' style={{color: "black"}}>News</h1>
                {/* <span className="leading-5 text-center flex items-center justify-center py-3 text-gray-500 font-raleway text-lg">
            Know a thing or two about us and our new offers.
          </span> */}
            </div>
      </div>
    <News/>
    </div>
    <Footer/>
    </main>
  )
}
