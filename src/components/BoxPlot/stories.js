import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import our component from this folder
import BoxPlot from './BoxPlot';
const data = require('./data/data.json')

// Here we describe the stories we want to see of the Button. The component is
// pretty simple so we will just make two, one with text and one with emojis
// Simple call storiesOf and then chain .add() as many times as you wish
//
// .add() takes a name and then a function that should return what you want
// rendered in the rendering area
storiesOf('BoxPlot')
	.add('IL-1 expression', () => (
		<BoxPlot 
		  data = { data }
		  x = { "response" }
		  y = { "exp" }
			xlab = { "Expression" }
			ylab = { "Group" }
			title = {"Levels of IL-1 across different groups" }
		/>
	));
