import React from "react";
import {
  faDiscord,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Icon, { IconProps } from './icon';

const list: Array<IconProps> = [
  {
    icon: faGithub,
    href: 'https://github.com/SoorajModi',
    tooltip: 'GitHub',
    circleStyle: 'hover:bg-white',
    iconStyle: 'hover:text-black h-8 w-8',
    download: false,
  },
  {
    icon: faLinkedin,
    href: 'https://www.linkedin.com/in/soorajmodi/',
    tooltip: 'LinkedIn',
    circleStyle: 'hover:bg-white',
    iconStyle: 'hover:text-linkedin-blue h-7 w-7',
    download: false,
  },
  {
    icon: faDiscord,
    href: 'https://discordapp.com/users/356956593293754368',
    tooltip: 'Discord',
    circleStyle: 'hover:bg-discord-purple',
    iconStyle: 'hover:text-white h-9 w-9',
    download: false,
  },
  {
    icon: faFileAlt,
    href: '/SoorajModiResume.pdf',
    tooltip: 'Resume',
    circleStyle: 'hover:bg-red-500',
    iconStyle: 'hover:text-white h-6 w-6',
    download: true,
  },
];

function Links() {
  return (
    <div className="w-full flex justify-center align-center">
      {
        list.map((link, index) => (
          <div className="flex px-4" key={index}>
            <Icon {...link} />
          </div>
        ))
      }
    </div>
  );
}
  
export default Links;  
