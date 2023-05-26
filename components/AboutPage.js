import Image from 'next/image';
import Button from './ui/Button';

export default function AboutPage({ src, className }) {
  return (
    <section
      className={` ${className} flex bg-bg-content lg:flex-row flex-col w-full items-center gap-12 lg:gap-48 lg:mt-48 my-16`}>
      <div className="lg:w-6/12 md:w-8/12 w-full lg:block flex flex-col justify-center items-center">
        <h1 className="lg:w-10/12 w-full lg:text-left text-center my-5 leading-none font-bold text-primary text-5xl md:text-[55px]">
          The home of fresh products
        </h1>
        <p className="text-paragraf text-lg leading-normal lg:text-left text-center">
          Apart from great food, we also offer a warm and comfortable atmosphere for you and your family to enjoy time
          together. Our friendly and professional service will make your visit an unforgettable experience.
        </p>
        <Button className="my-10 bg-button-wave bg-primary text-white">Learn about us</Button>
      </div>
      <div>
        <Image src={src} alt="about" width={450} height={450} />
      </div>
    </section>
  );
}