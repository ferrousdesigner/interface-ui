import { default as React } from 'react';

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
export declare const Avatar: React.FC<AvatarProps>;
