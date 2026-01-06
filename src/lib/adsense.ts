// AdSense configuration
export const ADSENSE_CONFIG = {
  // Replace with your actual AdSense publisher ID
  publisherId: 'ca-pub-2894915343289598',
  
  // Ad unit IDs for different placements
  adUnits: {
    // Homepage banner ad
    homepageBanner: '9602633240',
    
    // Content ad on homepage
    homepageContent: '7488586047',
    
    // Content ad on explore page
    exploreContent: '7488586047',
    
    // Content ad on quotes page
    quotesContent: '7488586047',
    
    // Header banner
    // headerBanner: '9602633240',
  },
  
  // Ad formats
  formats: {
    rectangle: 'rectangle',
    horizontal: 'horizontal',
    vertical: 'vertical',
    auto: 'auto',
  },
};

// Helper function to get ad unit ID by placement
export const getAdUnitId = (placement: Exclude<keyof typeof ADSENSE_CONFIG.adUnits, 'headerBanner'>): string => {
  return ADSENSE_CONFIG.adUnits[placement];
};