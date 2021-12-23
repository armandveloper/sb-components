/// <reference types="react" />
import './MyLabel.css';
export interface MyLabelProps {
    /**
     * Caps the text
     */
    allCaps?: boolean;
    /**
     * Label's color
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Custom font color
     */
    fontColor?: string;
    /**
     * The text content of the label
     */
    label?: string;
    /**
     * Define the apperance of the label
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
}
/**
 * Component for display text
 */
export declare const MyLabel: ({ fontColor, allCaps, color, label, size, }: MyLabelProps) => JSX.Element;
