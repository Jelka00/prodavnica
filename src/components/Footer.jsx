import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineFacebook,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="w-5/5 m-auto p-10 bg-gray-200 ">
      <div className="md:flex grid grid-cols-2 gap justify-between items-start my-10">
        <div className="space-y-5 py-5 border-b">
          <h1 className="text-3xl font-bold">Pratite nas na mrežama!</h1>
          <div className="flex space-x-5">
            <AiOutlineInstagram size={"1.5rem"} />
            <AiOutlineFacebook size={"1.5rem"} />
            <AiOutlineYoutube size={"1.5rem"} />
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <h1>Informacije</h1>
          <a className="text-sm text-gray-400">O nama</a>
          <a className="text-sm text-gray-400">Najpopularnijе staze</a>
          <a className="text-sm text-gray-400">Servisi</a>
          <a className="text-sm text-gray-400">Blog</a>
        </div>
        <div className="flex flex-col space-y-3">
          <h1>Pravila zaštite privatnosti</h1>
          <a className="text-sm text-gray-400">Opšte informacije</a>
          <a className="text-sm text-gray-400">
            Način i svrhe obrade ličnih podataka
          </a>
          <a className="text-sm text-gray-400">Kolačići</a>
          <a className="text-sm text-gray-400">Zaštita ličnih podataka</a>
        </div>
        <div className="flex flex-col space-y-3">
          <h1>Kontakt</h1>
          <a className="text-sm text-gray-400">
            Prodavnica zimske opreme Kopaonik
          </a>
          <a className="text-sm text-gray-400">Milutina Milankovica 9</a>
          <a className="text-sm text-gray-400">36354 Kopaonik</a>
          <a className="text-sm text-gray-400">+381 65 974 3662</a>
        </div>
      </div>
      <div className="border-t py-2">
        <p>
          {" "}
          &copy;2023 <span className="font-bold">Elab</span> All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
