import React from 'react';
import Profile from './assets/profile.png';
import Links from './components/links';

export const messages = {
  name: 'Sooraj Modi',
  title: 'Software Developer',
  description: 'Hi my name is Sooraj, and welcome to my website. I am a full stack software developer who loves taking on new challenges and working on fun projects that improve our world! Feel free to reach out.',
};

function Home() {
  return (
    <div className="bg-sooraj-blue h-screen min-h-[50rem] flex justify-center items-center flex-col text-center text-white">
      <img src={Profile} alt="Sooraj Modi" width="300" className="inline-block py-2" data-testid='profile' />
      <h1 className="text-4xl sm:text-6xl py-2" data-testid='name'>{messages.name}</h1>
      <h2 className="text-neutral-400 text-lg sm:text-2xl pb-5" data-testid='title'>{messages.title}</h2>
      <div className="text-base sm:text-xl flex justify-center align-center pb-10 w-96" data-testid='description'>{messages.description}</div>
      <Links />
    </div>
  );
}

export default Home;
