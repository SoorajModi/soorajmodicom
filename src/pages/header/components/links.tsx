import React from 'react';
import {
  faDiscord,
  faGithub,
  faLinkedin, faSpotify,
} from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeLink } from '../../../components';

function Links() {
  return (
    <div className="text-neutral-400 space-x-5 grid grid-rows-1 grid-cols-5 justify-items-center">
      <FontAwesomeLink icon={faGithub} href="https://github.com/SoorajModi" />
      <FontAwesomeLink icon={faLinkedin} href="https://www.linkedin.com/in/soorajmodi/" />
      <FontAwesomeLink icon={faFileAlt} href="/" />
      <FontAwesomeLink icon={faDiscord} href="https://discordapp.com/users/356956593293754368" />
      <FontAwesomeLink icon={faSpotify} href="https://open.spotify.com/user/soorajm" />
    </div>
  );
}

export default Links;
