import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip';

interface Props {
    icon: any,
    href: string,
    circleStyle: any,
    iconStyle: any,
    tooltip: string,
    download: boolean,
}

function FontAwesomeLink({
  icon, href, circleStyle, iconStyle, tooltip, download,
}: Props) {
  return (
    <div className="pb-3 md:pb-0">
      <div className={`flex rounded-full bg-gray-500 h-12 w-12 ${circleStyle}`}>
        <a href={href} target="_blank" rel="noreferrer" data-tip={tooltip} className={`grid place-items-center w-full text-black ${iconStyle}`} download={download}>
          <FontAwesomeIcon icon={icon} size="2x" />
          <ReactTooltip place="bottom" effect="solid" className="delay-200" delayShow={500} />
        </a>
      </div>
    </div>
  );
}

export default FontAwesomeLink;
