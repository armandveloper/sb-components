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
export const MyLabel = ({
	fontColor,
	allCaps = false,
	color = 'primary',
	label = 'No Label',
	size = 'normal',
}: MyLabelProps) => {
	return (
		<span
			className={`label text-${color} ${size} ${allCaps ? 'uppercase' : ''}`}
			style={{
				color: fontColor,
			}}
		>
			{label}
		</span>
	);
};

export default MyLabel;
