import React from 'react';
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Image
        src="/profile.png"
        alt="Sooraj Modi profile picture"
        width={300}
        height={300}
        priority
      />
      <div>Sooraj Modi</div>
      <div>Software Developer</div>
      <div>Hi my name is Sooraj, and welcome to my website. I am a full stack software developer who loves taking on new challenges and working on fun projects that improve our world! Feel free to reach out.</div>
    </main>
  );
}
