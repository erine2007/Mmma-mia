import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="w-full bg-alice bg-pattern-footer bg-contain bg-left bg-no-repeat py-14 lg:px-10 md:px-7 px-2">
      <div className="flex justify-between w-full">
        <div className="w-3/12">
          <Image src="/logo/logo.svg" alt="Logo Footer" width={40} height={40} priority />
          <p className="text-paragraf text-lg mt-6">Takeaway & Delivery template for small - medium businesses.</p>
        </div>
        <div className="w-5/12 flex gap-24 justify-center">
          <div className="flex flex-col space-y-7">
            <h4 className="text-heading font-semibold text-sm">MENU</h4>
            <p className="text-paragraf">Home</p>
            <p className="text-paragraf">Order</p>
            <p className="text-paragraf">FAQ</p>
            <p className="text-paragraf">Contact</p>
          </div>
          <div className="flex flex-col space-y-7">
            <h4 className="text-heading font-semibold text-sm">STUDIO</h4>
            <p className="text-paragraf">Company</p>
            <p className="text-paragraf">Changelog</p>
            <p className="text-paragraf">Licence</p>
          </div>
        </div>
      </div>
      <div className="w-full border-t mt-24 pt-10 flex justify-between">
        <p>
          Built by{' '}
          <Link href="https://github.com/bwafi" target="_blank" className="text-primary">
            Syahroni Bawafi
          </Link>{' '}
          · Powered by{' '}
          <Link href="https://nextjs.org/" target="_blank" className="text-primary">
            Next JS
          </Link>
        </p>
        <div className="flex gap-5">
          <Link
            href="https://www.instagram.com/itssyahroni/w"
            target="_blank"
            className="border border-paragraf/40 rounded-full p-2 hover:border-paragraf">
            <AiOutlineInstagram className="text-3xl text-paragraf" />
          </Link>
          <Link
            href="https://twitter.com/itssyahroni"
            target="_blank"
            className="border border-paragraf/40 rounded-full p-2 hover:border-paragraf">
            <AiOutlineTwitter className="text-3xl text-paragraf" />
          </Link>
          <Link
            href="https://github.com/bwafi"
            target="_blank"
            className="border border-paragraf/40 rounded-full p-2 hover:border-paragraf">
            <AiFillGithub className="text-3xl text-paragraf" />
          </Link>
          <Link
            href="https://wa.me/6282335955903"
            target="_blank"
            className="border border-paragraf/40 rounded-full p-2 hover:border-paragraf">
            <AiOutlineWhatsApp className="text-3xl text-paragraf" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;