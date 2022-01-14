import React from 'react';
import {
  faDiscord,
  faGithub,
  faLinkedin,
  faSpotify,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import FontAwesomeLink from './fontAwesomeLink';

function Links() {
  return (
    <div className="text-neutral-400 grid justify-items-center">
      <div className="w-1/3 grid grid-cols-6 justify-items-center">
        <FontAwesomeLink
          icon={faGithub}
          href="https://github.com/SoorajModi"
          tooltip="GitHub"
          circleStyle="hover:bg-white"
          iconStyle="hover:text-black"
          download={false}
        />
        <FontAwesomeLink
          icon={faLinkedin}
          href="https://www.linkedin.com/in/soorajmodi/"
          tooltip="LinkedIn"
          circleStyle="hover:bg-white"
          iconStyle="hover:text-linkedin-blue"
          download={false}
        />
        <FontAwesomeLink
          icon={faTwitter}
          href="https://twitter.com/SoorajModi"
          tooltip="Twitter"
          circleStyle="hover:bg-white"
          iconStyle="hover:text-twitter-blue"
          download={false}
        />
        <FontAwesomeLink
          icon={faFileAlt}
          href="/Resume.pdf"
          tooltip="Resume"
          circleStyle="hover:bg-red-500"
          iconStyle="hover:text-white"
          download
        />
        <FontAwesomeLink
          icon={faDiscord}
          href="https://discordapp.com/users/356956593293754368"
          tooltip="Discord"
          circleStyle="hover:bg-discord-purple"
          iconStyle="hover:text-white"
          download={false}
        />
        <FontAwesomeLink
          icon={faSpotify}
          href="https://open.spotify.com/user/soorajm"
          tooltip="Spotify"
          circleStyle="hover:bg-black"
          iconStyle="hover:text-spotify-green"
          download={false}
        />
      </div>
    </div>
  );
}

export default Links;
