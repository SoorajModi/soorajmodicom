import React from 'react';
import {
  Links, Message, Name, Title, Image,
} from './components';

function Header() {
  return (
    <div className="h-screen grid place-items-center">
      <div className="text-center">
        <Image />
        <Name />
        <Title />
        <Message />
        <Links />
      </div>
    </div>
  );
}

export default Header;
