import React from 'react';
import {
  Links, Message, Name, Title, Image,
} from './components';

function Home() {
  return (
    <div className="bg-sooraj-blue h-screen min-h-[50rem] grid place-items-center">
      <div className="text-center text-white m-1">
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
