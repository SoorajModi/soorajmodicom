import React from "react";
import Image from "next/image";
import Links from "./components/links";

export const messages = {
  name: 'Sooraj Modi',
  alt: 'Sooraj Modi profile picture',
  title: 'Software Developer',
  description: 'Hi my name is Sooraj, and welcome to my website. I am a full stack software developer who loves taking on new challenges and working on fun projects that improve our world! Feel free to reach out.',
};

function Home() {
  return (
    <div className="h-screen min-h-[50rem] flex justify-center items-center flex-col text-center text-white">
      <Image
        src="/profile.png"
        alt={messages.alt}
        width={300}
        height={300}
        priority
      />
      <h1 className="text-4xl sm:text-6xl py-2">{messages.name}</h1>
      <h2 className="text-neutral-400 text-lg sm:text-2xl pb-5">{messages.title}</h2>
      <p className="text-base sm:text-xl flex justify-center align-center pb-10 w-96" data-testid="description">{messages.description}</p>
      <Links />
    </div>
  )
}

export default Home;
