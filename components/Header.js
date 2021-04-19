import { SearchIcon } from "@heroicons/react/outline";
import { MicrophoneIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const [newInput, setNewInput] = useState("");

  useEffect(() => {
    setNewInput(router.query.inputRef);
  }, []);

  const search = (e) => {
    e.preventDefault();

    const ref = searchInputRef.current.value;

    if (!ref) return;

    router.push(`/search?inputRef=${ref}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://s3-ap-northeast-1.amazonaws.com/peatix-files/pod/10044455/cover-Google-Logo.gif"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />

        <form className="flex border flex-grow border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5 ">
          <input
            onChange={(e) => setNewInput(e.target.value)}
            value={newInput}
            className="flex-grow w-full focus:outline-none"
            ref={searchInputRef}
            type="text"
          />
          <XIcon
            onClick={() => (searchInputRef.current.value = "")}
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button onClick={search} hidden type="submit">
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://scontent.ftlv1-1.fna.fbcdn.net/v/t1.6435-9/47026336_2159452730753187_8522979273080832000_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CUcO9l6NISIAX-3SBaX&_nc_ht=scontent.ftlv1-1.fna&oh=2c75a8f026a437aea8da86c9daecf1cb&oe=609C5A27"
        />
      </div>

      <HeaderOptions />
    </header>
  );
}

export default Header;
