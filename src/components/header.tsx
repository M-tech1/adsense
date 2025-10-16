"use client";
import Image from "next/image";
import React from "react";
import {
  StaticImageData,
  StaticImport,
} from "next/dist/shared/lib/get-img-props";

interface IProps {
  title?: string;
  subTitle?: string;
  image: StaticImageData | StaticImport | string;
}
function Header({ title, image, subTitle }: IProps) {
  return (
    <>
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0">
          <Image
            src={image}
            alt="header"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
          <p className="mt-4 text-gray-300">{subTitle}</p>
        </div>
      </section>
    </>
  );
}

export default Header;
