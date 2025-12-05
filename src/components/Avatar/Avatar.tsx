import React, { useState } from 'react';
import './Avatar.css';

export interface AvatarProps {
  /**
   * Image source URL
   */
  src?: string;
  /**
   * Alt text for the image
   */
  alt?: string;
  /**
   * Initials to display if no image
   */
  initials?: string;
  /**
   * Avatar size
   */
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  /**
   * Avatar shape
   */
  shape?: 'circle' | 'square';
  /**
   * Avatar className
   */
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  initials,
  size = 'medium',
  shape = 'circle',
  className = '',
}) => {
  const [imageError, setImageError] = useState(false);

  const getInitials = () => {
    if (initials) return initials;
    if (alt) {
      const words = alt.trim().split(/\s+/);
      if (words.length >= 2) {
        return (words[0][0] + words[1][0]).toUpperCase();
      }
      return words[0][0].toUpperCase();
    }
    return '?';
  };

  const showFallback = !src || imageError;

  return (
    <div className={`avatar ${size} ${shape} ${className}`}>
      {src && !imageError && (
        <img
          src={src}
          alt={alt || 'Avatar'}
          className="avatar-image"
          onError={() => setImageError(true)}
        />
      )}
      {showFallback && (
        <span className="avatar-fallback">
          {getInitials()}
        </span>
      )}
    </div>
  );
};

