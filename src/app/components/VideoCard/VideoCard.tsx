import Image from 'next/image';
import { PlayCircle } from 'lucide-react';
import './VideoCard.css';

interface VideoCardProps {
  thumbnailUrl: string;
  altText: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ thumbnailUrl, altText }) => {
  return (
    <div className="video-card">
      <div className="video-thumbnail-container">
        <Image
          src={thumbnailUrl}
          alt={altText}
          width={400}
          height={225}
          className="video-thumbnail"
        />
        <div className="video-overlay">
          <div className="play-button-container">
            <PlayCircle 
              size={48} 
              className="play-icon"
              aria-label="Play trailer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
