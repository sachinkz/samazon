import React from 'react'
import banner1 from '../../assets/banner-1.jpg'
import banner2 from '../../assets/banner-2.jpg'
import banner3 from '../../assets/banner-3.jpg'

const Banner = () => {

  return (
    <>
      <div className="carousel w-full h-[300px] mt-5">
        <div id="item1" className="carousel-item w-full bg-yellow-500">
          <img src={banner1} className="w-full object-contain" />
        </div>
        <div id="item2" className="carousel-item w-full bg-yellow-400">
          <img src={banner2} className="w-full object-contain" />
        </div>
        <div id="item3" className="carousel-item w-full bg-zinc-300 ">
          <img src={banner3} className="w-full object-contain" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
      </div>
    </>
  )
}

export default Banner