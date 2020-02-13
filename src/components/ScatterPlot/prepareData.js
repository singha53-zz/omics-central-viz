export const PrepareData = (data, x, y, color, xlab, ylab, title, yint, xzeroline=false, yzeroline=false,showLegend=false) => {


  // to color by groups (categorical or continuous)
  const stratify = color ? true : false;
  let plotlyData;
  if (stratify) {  
    // color by continuous variable
    if (typeof(data[color][0]) === 'number') {
      plotlyData = [{
        x: data[x],
        y: data[y],
        type: "scatter",
        mode: "markers",
        marker: {
          color: data[color],
          size: 10,
          cmin: Math.min(data[color]),
          cmax: Math.max(data[color]),
          colorbar: {
            title: color,
            len: 0.3,
            y: 0,
            yanchor: "bottom"
          }
        }
      }]
    } else {
      // color by categorical variable
      const levels = [...new Set(data[color])]
      
      plotlyData = levels.map(lvl => {
        const xSubset = data[x].map((e, ind) => {
          return lvl === data[color][ind] ? e : undefined
        }).filter(i => i !== undefined)
        const ySubset = data[y].map((e, ind) => {
          return lvl === data[color][ind] ? e : undefined
        }).filter(i => i !== undefined)

        return {
          x: xSubset,
          y: ySubset,
          name: lvl,
          type: "scatter",
          mode: "markers"
        }
      })
    }
  } else {
    // do not color points
    plotlyData = [{
      x: data[x],
      y: data[y],
      type: "scatter",
      mode: "markers"
    }]
  }

  return {
    data: plotlyData,
    layout: {
      title: title,
      showlegend: showLegend,
      xaxis: {
        zeroline: xzeroline,
        automargin: true,
        title: {
          text: xlab
        }
      },
      yaxis: {
        zeroline: yzeroline,
        automargin: true,
        title: {
          text: ylab
        }
      },
      margin: {
        l: 50,
        t: 50,
        r: 0,
        b: 50
      }
    }
  }
} 