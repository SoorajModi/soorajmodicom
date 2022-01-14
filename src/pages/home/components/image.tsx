import React from 'react';
import Profile from '../assets/profile.jpg';

function Image() {
  return (
    <img src={Profile} alt="Sooraj Modi" width="276" height="300" className="inline-block rounded-full pb-5" />
  );
}

export default Image;
