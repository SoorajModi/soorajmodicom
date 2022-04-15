import React from 'react';
import Profile from './assets/profile.png';
import Links from './components/links';

function Home() {
  return (
    <div className="bg-sooraj-blue h-screen min-h-[50rem] flex justify-center items-center flex-col text-center text-white">
      <img src={Profile} alt="Sooraj Modi" width="300" className="inline-block pb-5" />
      <h1 className="text-4xl sm:text-6xl pb-1 sm:pb-2">Sooraj Modi</h1>
      <h2 className="text-neutral-400 text-lg md:text-2xl pb-2 md:pb-5">Software Developer</h2>
      <div className="text-base md:text-xl flex justify-center align-center pb-10 w-96">
        Hi my name is Sooraj, and welcome to my website. I am a full stack software developer
        who loves taking on new challenges and working on fun projects that improve our world!
        Feel free to reach out.
      </div>
      <Links />
    </div>
  );
}

export default Home;
