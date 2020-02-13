import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import our component from this folder
import ScatterPlot from './ScatterPlot';
const pcs = require('./data/pcs.json')

// Here we describe the stories we want to see of the Button. The component is
// pretty simple so we will just make two, one with text and one with emojis
// Simple call storiesOf and then chain .add() as many times as you wish
//
// .add() takes a name and then a function that should return what you want
// rendered in the rendering area
storiesOf('ScatterPlot')
	.add('Component plot', () => (
		<ScatterPlot
      data = { pcs }
		  x = { "PC1" }
		  y = { "PC2" }
			xlab = { "PC1" }
			ylab = { "PC2" }
			title = {"Component plot"}
		/>
	))
  .add('Component Plot (colored by continuous variable)', () => (
		<ScatterPlot 
      data = { pcs }
		  x = { "PC1" }
		  y = { "PC2" }
      color = { "PC1" }
			xlab = { "PC1" }
			ylab = { "PC2" }
			title = {"Component plot (colored by PC1)"}
		/>
	))
  .add('Component Plot (colored by categorical variable)', () => (
		<ScatterPlot 
      data = { pcs }
		  x = { "PC1" }
		  y = { "PC2" }
      color = { "group" }
			xlab = { "PC1" }
			ylab = { "PC2" }
			title = { "Component plot (colored by group)" }
      showLegend = { true }
		/>
	));
