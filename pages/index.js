import Head from 'next/head'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid"
import { SearchIcon } from "@heroicons/react/outline"
import Image from 'next/image'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from "next/router"


export default function Home() {

  const searchInputRef = useRef(null);
  const router = useRouter();


  const search = (e) => {
    e.preventDefault();

    const inputRef = searchInputRef.current.value;

    if (!inputRef) return;

    router.push(`/search?inputRef=${inputRef}`)

  }




  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url='https://scontent.ftlv1-1.fna.fbcdn.net/v/t1.6435-9/47026336_2159452730753187_8522979273080832000_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CUcO9l6NISIAX-3SBaX&_nc_ht=scontent.ftlv1-1.fna&oh=2c75a8f026a437aea8da86c9daecf1cb&oe=609C5A27' />
        </div>
      </header>

      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image src="https://s3-ap-northeast-1.amazonaws.com/peatix-files/pod/10044455/cover-Google-Logo.gif"
          width={320}
          height={150}
        />

        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center justify-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input ref={searchInputRef} type="text" className="focus:outline-none flex-grow" />
          <MicrophoneIcon className="h-5 text-gray-500" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">Google Search</button>
          <button onClick={search} className="btn">I'm Feeling Lucky</button>
        </div>

      </form>

      <Footer />


    </div>
  )
}
