import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const OrderSection = () => {
  return (
    <section className="w-full h-[800px] lg:h-[600px] flex lg:flex-row flex-col my-40 gap-5">
      <div className="lg:w-6/12 w-full h-full relative">
        <Image
          src="/img/good-food.jpg"
          alt="Order Image"
          quality={60}
          fill
          priority
          className="w-auto h-auto object-cover object-center"
        />
      </div>
      <div className="bg-primary lg:w-6/12 w-full lg:px-16 px-3 py-6 flex justify-center flex-col bg-pattern-01 bg-no-repeat bg-contain bg-left-bottom">
        <h1 className="text-white md:text-[55px] text-[44px] font-bold leading-tight">
          <span className="text-[#1e1e1e]">Support</span> good food and local business.
        </h1>
        <div className="w-full md:w-6/12">
          <Link href="/order">
            <button className="mt-10 bg-white text-primary py-5 px-16 rounded">Commandez</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
