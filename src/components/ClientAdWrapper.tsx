'use client';

import { useEffect } from 'react';
import { ADSENSE_CONFIG } from '@/lib/adsense';

// Extend Window interface to include adsbygoogle
declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

interface ClientAdWrapperProps {
  adSlot: string;
  adFormat?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  fullWidth?: boolean;
  className?: string;
  style?: React.CSSProperties;
  adStyle?: React.CSSProperties;
}

const ClientAdWrapper: React.FC<ClientAdWrapperProps> = ({
  adSlot,
  adFormat = 'auto',
  fullWidth = true,
  className = '',
  style,
  adStyle = { display: 'block' },
}) => {
  useEffect(() => {
    try {
      // Push ads when component mounts
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, [adSlot]);

  return (
    <div className={`ad-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={adStyle}
        data-ad-client={ADSENSE_CONFIG.publisherId}
        data-ad-slot={adSlot}
        data-ad-format={adFormat === 'rectangle' ? 'rectangle' : adFormat === 'horizontal' ? 'horizontal' : adFormat === 'vertical' ? 'vertical' : 'autorelaxed'}
        data-full-width-responsive={fullWidth ? 'true' : 'false'}
      />
    </div>
  );
};

export default ClientAdWrapper;