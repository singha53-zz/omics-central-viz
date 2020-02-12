import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import our component from this folder
import FeaturePlot from './FeaturePlot';
const data = require('./data.json')
console.log(data)

// Here we describe the stories we want to see of the Button. The component is
// pretty simple so we will just make two, one with text and one with emojis
// Simple call storiesOf and then chain .add() as many times as you wish
//
// .add() takes a name and then a function that should return what you want
// rendered in the rendering area
storiesOf('FeaturePlot')
	.add('feature expression vs. group', () => (
		<FeaturePlot 
		  exp={data.exp} 
			response={data.response} 
			feature={"IL-1"}
			responseLabel={"Hospitalization status"}
		/>
	));
