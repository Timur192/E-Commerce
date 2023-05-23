"use client";

import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import Image from "next/image";
import { useRef } from "react";

function ImageCarousel({ images }: { images: string[] | undefined }) {
  const slider = useRef<any>(null);

  return (
    <div className="relative w-96 h-96">
      <Carousel ref={slider}>
        {images?.map((url) => (
          <div key={url} className="w-96 h-96 rounded-md mr-3">
            <Image
              className="w-full h-full object-cover rounded-md"
              src={url}
              alt="product"
              width={1000}
              height={1000}
            />
          </div>
        ))}
      </Carousel>
      <button
        className="absolute z-10 top-40 right-1 w-10 h-10 rounded-full bg-white flex justify-center items-center"
        onClick={() => slider.current.next()}
      >
        <ArrowRightOutlined />
      </button>
      <button
        className="absolute z-10 top-40 left-1 w-10 h-10 rounded-full bg-white flex justify-center items-center"
        onClick={() => slider.current.prev()}
      >
        <ArrowLeftOutlined />
      </button>
    </div>
  );
}

export default ImageCarousel;
