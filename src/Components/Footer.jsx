import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

function Footer() {
  return (
    <footer className="w-full bg-[#798880] p-5 pt-16">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-center cursor-pointer">
        <AiOutlineInstagram
          size={30}
          className="text-white hover:text-[#A6BB8D] transition duration-200 ease-in-out"
        />
        <AiOutlineFacebook
          size={30}
          className="text-white hover:text-[#A6BB8D] transition duration-200 ease-in-out"
        />
        <AiOutlineTwitter
          size={30}
          className="text-white hover:text-[#A6BB8D] transition duration-200 ease-in-out"
        />
      </div>
      <p className="text-center mt-8 text-lg text-white">
        &copy; 2023 Kelompok 2 RPL
      </p>
    </footer>
  );
}

export default Footer;
