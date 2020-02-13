export const PrepareData = (data, x, y, color, text, hovertemplate, xlab, ylab, title, yint=undefined, xzeroline=false, yzeroline=false,showLegend=false) => {


  // to color by groups (categorical or continuous)
  const stratify = color ? true : false;
  let plotlyData;
  if (stratify) {  
    // color by continuous variable
    if (typeof(data[color][0]) === 'number') {
      plotlyData = [{
        x: data[x],
        y: data[y],
        text: data[text],
        hovertemplate: hovertemplate,
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
          text: data[text],
          hovertemplate: hovertemplate,
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
      text: data[text],
      hovertemplate: hovertemplate,
      type: "scatter",
      mode: "markers"
    }]
  }
  // add horizontal line if yint is specified
  yint === undefined ? '' : plotlyData.push({
    x: [Math.min(...data[x]), Math.max(...data[x])],
    y: data[yint].slice(0,2),
    mode: "lines",
    name: "FDR cutoff",
    line: {
      color: 'rgb(55, 128, 191)',
      width: 1,
      dash: 'dot'
      }
    });

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