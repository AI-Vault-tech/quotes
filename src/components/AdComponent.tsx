import { useEffect, useRef } from 'react';
import { ADSENSE_CONFIG } from '@/lib/adsense';

interface AdComponentProps {
  adSlot: string;
  adFormat?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  fullWidth?: boolean;
  className?: string;
  style?: React.CSSProperties;
  adStyle?: React.CSSProperties;
}

const AdComponent: React.FC<AdComponentProps> = ({
  adSlot,
  adFormat = 'auto',
  fullWidth = true,
  className = '',
  style,
  adStyle = { display: 'block' },
}) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      // Push ads when component mounts
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, [adSlot]);

  return (
    <div className={`ad-container ${className}`} style={style} ref={adRef}>
      <ins
        className="adsbygoogle"
        style={adStyle}
        data-ad-client={ADSENSE_CONFIG.publisherId}
        data-ad-slot={adSlot}
        data-ad-format={adFormat === 'rectangle' ? 'rectangle' : 'auto'}
        data-full-width-responsive={fullWidth ? 'true' : 'false'}
      />
    </div>
  );
};

export default AdComponent;