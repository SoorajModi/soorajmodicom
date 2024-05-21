import React from "react";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface IconProps {
  icon: IconProp,
  href: string,
  circleStyle: string,
  iconStyle: string,
  tooltip: string,
  download: boolean,
}

function Icon(props: IconProps) {
  return ( 
    <div className="pb-3 md:pb-0">
      <div className={`${props.circleStyle} flex rounded-full h-12 w-12 bg-gray-500 items-center justify-center`}>
        <a href={props.href} target="_blank" rel="noopener noreferrer" 
          className={`${props.iconStyle} text-black grid place-items-center`} download={props.download}> 
          <FontAwesomeIcon icon={props.icon} />
        </a>
      </div>
    </div>
  )
}

export default Icon;
