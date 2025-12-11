import { default as React } from 'react';

export interface CardProps {
    /**
     * Card header content
     */
    header?: React.ReactNode;
    /**
     * Card body content
     */
    children: React.ReactNode;
    /**
     * Card footer content
     */
    footer?: React.ReactNode;
    /**
     * Card image URL
     */
    image?: string;
    /**
     * Image alt text
     */
    imageAlt?: string;
    /**
     * Whether the card is hoverable
     */
    hoverable?: boolean;
    /**
     * Whether the card is clickable
     */
    clickable?: boolean;
    /**
     * Click handler
     */
    onClick?: () => void;
    /**
     * Card variant
     */
    variant?: "default" | "outlined" | "elevated";
    /**
     * Card className
     */
    className?: string;
}
export declare const Card: React.FC<CardProps>;
