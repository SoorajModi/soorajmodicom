import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    icon: any,
    href: string,
}

function FontAwesomeLink({ icon, href }: Props) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}

export default FontAwesomeLink;
