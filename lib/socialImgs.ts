

import instagramImg from "../images/instagram.png"
import tiktokLogo from "../images/tiktok.png"
import twitterLogo from "../images/twitter.png"
import youtubeLogo from "../images/youtube.png"


export function getSocialLinkImageSrc(socialLinkName: string): string {
    switch (socialLinkName.toLowerCase()) {
      case 'instagram':
        return instagramImg.src;
      case 'tiktok':
        return tiktokLogo.src;
      case 'twitter':
        return twitterLogo.src;
        case 'youtube':
            return youtubeLogo.src;
      default:
        return '';
    }
  }