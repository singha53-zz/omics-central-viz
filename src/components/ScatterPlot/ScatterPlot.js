import React from 'react';
import Plot from 'react-plotly.js';
import { PrepareData } from './prepareData.js'

function ScatterPlot(props){
  const { data, x, y, color, text, hovertemplate, xlab, ylab, title, yint, xzeroline, yzeroline, showLegend, ...rest } = props;

  const plot = PrepareData(data, x, y, color, text, hovertemplate, xlab, ylab, title, yint, xzeroline, yzeroline, showLegend)

  return (<Plot
            data={ plot.data }
            useResizeHandler
            style={{ width: '100%', height: '100%' }}
            layout={ plot.layout }
          />);
};

export default ScatterPlot;