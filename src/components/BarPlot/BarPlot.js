import React from 'react';
import Plot from 'react-plotly.js';
import { PrepareData } from './prepareData.js'

function BarPlot(props){
  const { data, x, y, xlab, ylab, title, yint, clickHook, ...rest } = props;

  const plot = PrepareData(data, x, y, xlab, ylab, title, yint)

  return (<Plot
            data={ plot.data }
            useResizeHandler
            style={{ width: '100%', height: '100%' }}
            layout={ plot.layout }
            onClick={ clickHook } 
          />);
};

export default BarPlot;