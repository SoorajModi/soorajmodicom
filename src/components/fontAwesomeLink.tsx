import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    icon: any,
    href: string,
}

function FontAwesomeLink({ icon, href }: Props) {
  return (
    <div className="flex rounded-full bg-gray-500 h-12 w-12">
      <a href={href} target="_blank" rel="noreferrer" className="grid place-items-center w-full text-black">
        <FontAwesomeIcon icon={icon} size="2x" />
      </a>
    </div>
  );
}

export default FontAwesomeLink;
