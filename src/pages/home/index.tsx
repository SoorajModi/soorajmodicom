import React from 'react';
import {
  Links, Message, Name, Title, Image,
} from './components';

function Home() {
  return (
    <div className="bg-sooraj-blue h-screen grid place-items-center">
      <div className="text-center text-white">
        <Image />
        <Name />
        <Title />
        <Message />
        <Links />
      </div>
    </div>
  );
}

export default Home;
