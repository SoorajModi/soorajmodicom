import React from 'react';
import {
  faDiscord,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import FontAwesomeLink from './fontAwesomeLink';

function Links() {
  const list = [
    {
      icon: faGithub,
      href: 'https://github.com/SoorajModi',
      tooltip: 'GitHub',
      circleStyle: 'hover:bg-white',
      iconStyle: 'hover:text-black',
      download: false,
    },
    {
      icon: faLinkedin,
      href: 'https://www.linkedin.com/in/soorajmodi/',
      tooltip: 'LinkedIn',
      circleStyle: 'hover:bg-white',
      iconStyle: 'hover:text-linkedin-blue',
      download: false,
    },
    {
      icon: faTwitter,
      href: 'https://twitter.com/SoorajModi',
      tooltip: 'Twitter',
      circleStyle: 'hover:bg-white',
      iconStyle: 'hover:text-twitter-blue',
      download: false,
    },
    {
      icon: faDiscord,
      href: 'https://discordapp.com/users/356956593293754368',
      tooltip: 'Discord',
      circleStyle: 'hover:bg-discord-purple',
      iconStyle: 'hover:text-white',
      download: false,
    },
    {
      icon: faFileAlt,
      href: '/SoorajModiResume.pdf',
      tooltip: 'Resume',
      circleStyle: 'hover:bg-red-500',
      iconStyle: 'hover:text-white',
      download: true,
    },
  ];

  return (
    <div className="text-neutral-400 w-full flex justify-center align-center">
      {
        list.map((link, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="flex px-4" key={index}>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <FontAwesomeLink {...link} />
          </div>
        ))
      }
    </div>
  );
}

export default Links;
