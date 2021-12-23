import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MyLabel } from '../../components/MyLabel';

export default {
	title: 'UI/MyLabel',
	component: MyLabel,
	argTypes: {
		size: {
			control: 'select',
		},
		color: {
			control: 'select',
		},
		fontColor: {
			control: 'color',
		},
	},
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof MyLabel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MyLabel> = (args) => (
	<MyLabel {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
	size: 'normal',
	allCaps: false,
};

export const H1 = Template.bind({});

H1.args = {
	size: 'h1',
};

export const AllCaps = Template.bind({});

AllCaps.args = {
	allCaps: true,
	size: 'normal',
};

export const Secondary = Template.bind({});

Secondary.args = {
	size: 'normal',
	color: 'secondary',
};

export const Tertiary = Template.bind({});

Tertiary.args = {
	size: 'normal',
	color: 'tertiary',
};

export const CustomFontColor = Template.bind({});

CustomFontColor.args = {
	size: 'h1',
	fontColor: 'royalblue',
};
