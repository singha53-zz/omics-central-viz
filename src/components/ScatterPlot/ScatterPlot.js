import React from 'react';
import Plot from 'react-plotly.js';
import { PrepareData } from './prepareData.js'

function ScatterPlot(props){
  const { x, y, color, xlab, ylab, title, ...rest } = props;

  const plot = PrepareData(x, y, color, xlab, ylab, title)

  return (<Plot
            data={ plot.data }
            useResizeHandler
            style={{ width: '100%', height: '100%' }}
            layout={ plot.layout }
          />);
};

export default ScatterPlot;