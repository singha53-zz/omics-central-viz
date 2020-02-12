import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withConsole } from '@storybook/addon-console';
// Import our component from this folder
import BarPlot from './BarPlot';
const propVar = require('./propVarData.json')
const pvalHist = require('./pvalHistData.json')

// Here we describe the stories we want to see of the Button. The component is
// pretty simple so we will just make two, one with text and one with emojis
// Simple call storiesOf and then chain .add() as many times as you wish
//
// .add() takes a name and then a function that should return what you want
// rendered in the rendering area
storiesOf('BarPlot')
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
	.add('Scree plot', () => (
		<BarPlot
      x = { propVar.comp }
      y = { propVar.var }
      xlab = { "PCs" }
      ylab = { "Proportion of variation explained (%)"}
      title = { "Scree plot" }
      clickHook = {e => {
        console.log(`PC${parseInt(e.points[0].label[2])}`)
      }}
		/>
	))
  .add('P-value histogram', () => (
		<BarPlot
      x = { pvalHist.bins }
      y = { pvalHist.pvalFreq }
      xlab = { "P-value bins" }
      ylab = { "Frequency"}
      title = { "P-value histogram" }
      yint = { pvalHist.h0Line } 
		/>
	));
