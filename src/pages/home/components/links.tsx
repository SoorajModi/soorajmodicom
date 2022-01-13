import React from 'react';
import {
  faDiscord,
  faGithub,
  faLinkedin,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeLink } from '../../../components';

function Links() {
  return (
    <div className="text-neutral-400 space-x-5 grid grid-rows-1 grid-cols-5 justify-items-center">
      <FontAwesomeLink
        icon={faGithub}
        href="https://github.com/SoorajModi"
        tooltip="GitHub"
        circleStyle="hover:bg-white"
        iconStyle="hover:text-black"
      />
      <FontAwesomeLink
        icon={faLinkedin}
        href="https://www.linkedin.com/in/soorajmodi/"
        tooltip="LinkedIn"
        circleStyle="hover:bg-white"
        iconStyle="hover:text-linkedin-blue"
      />
      <FontAwesomeLink
        icon={faFileAlt}
        href="/"
        tooltip="Resume"
        circleStyle="hover:bg-red-500"
        iconStyle="hover:text-white"
      />
      <FontAwesomeLink
        icon={faDiscord}
        href="https://discordapp.com/users/356956593293754368"
        tooltip="Discord"
        circleStyle="hover:bg-discord-purple"
        iconStyle="hover:text-white"
      />
      <FontAwesomeLink
        icon={faSpotify}
        href="https://open.spotify.com/user/soorajm"
        tooltip="Spotify"
        circleStyle="hover:bg-black"
        iconStyle="hover:text-spotify-green"
      />
    </div>
  );
}

export default Links;
