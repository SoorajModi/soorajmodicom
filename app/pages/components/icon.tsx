'use client';

import React from "react";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from 'react-tooltip';

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
      <a href={props.href} target="_blank" rel="noopener noreferrer" className={`${props.circleStyle} group flex rounded-full h-12 w-12 bg-gray-500 items-center justify-center`} download={props.download} data-tooltip-id={"tooltip"} data-tooltip-content={props.tooltip} data-tooltip-place="bottom">
        <div className={`${props.iconStyle} text-black flex items-center justify-center`}> 
          <FontAwesomeIcon icon={props.icon} size="2x" />
        </div>
      </a>
      <Tooltip id={"tooltip"} />
    </div>
  )
}

export default Icon;
