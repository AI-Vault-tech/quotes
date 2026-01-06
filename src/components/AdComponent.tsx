'use client';

import { useEffect } from 'react';

type AdFormat = 'auto' | 'rectangle' | 'horizontal' | 'vertical' | 'fluid';
type AdLayout = 'in-article' | 'in-feed' | 'search' | 'rectangle';

interface AdComponentProps {
  adSlot: string;
  adFormat?: AdFormat;
  layout?: AdLayout;
  style?: React.CSSProperties;
  className?: string;
}

const AdComponent = ({
  adSlot,
  adFormat = 'auto',
  layout,
  style = {},
  className = '',
}: AdComponentProps) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  const adStyle = {
    display: 'block',
    ...style,
  };

  const dataAdFormat = adFormat === 'auto' ? 'auto' : undefined;
  const dataAdLayout = layout;

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={adStyle}
      data-ad-client="ca-pub-2894915343289598"
      data-ad-slot={adSlot}
      data-ad-format={dataAdFormat}
      data-full-width-responsive="true"
      {...(dataAdLayout && { 'data-ad-layout': dataAdLayout })}
    />
  );
};

export default AdComponent;