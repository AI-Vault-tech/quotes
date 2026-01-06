import ClientAdWrapper from './ClientAdWrapper';

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
  return (
    <ClientAdWrapper
      adSlot={adSlot}
      adFormat={adFormat}
      fullWidth={fullWidth}
      className={className}
      style={style}
      adStyle={adStyle}
    />
  );
};

export default AdComponent;