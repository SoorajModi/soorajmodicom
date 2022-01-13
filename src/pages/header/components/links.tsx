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
    <div className="text-neutral-400 space-x-5">
      <FontAwesomeLink icon={faGithub} href="https://github.com/SoorajModi" />
      <FontAwesomeLink icon={faLinkedin} href="https://www.linkedin.com/in/soorajmodi/" />
      <FontAwesomeLink icon={faFileAlt} href="/" />
      <FontAwesomeLink icon={faDiscord} href="/" />
      <FontAwesomeLink icon={faSpotify} href="/" />
    </div>
  );
}

export default Links;
