export const PrepareData = (x, y, color, xlab, ylab, title, yint) => {
  // to color by groups (categorical or continuous)
  const stratify = color ? true : false;
  let data;
  if (stratify) {  
    // color by continuous variable
    if (typeof(color[0]) === 'number') {
      data = [{
        x: x,
        y: y,
        type: "scatter",
        mode: "markers",
        marker: {
          color: color,
          size: 10,
          cmin: Math.min(color),
          cmax: Math.max(color),
          colorbar: {
            len: 0.3,
            y: 0,
            yanchor: "bottom"
          }
        }
      }]
    } else {
    // color by categorical variable
      data = [{
        x: x,
        y: y,
        type: "scatter",
        mode: "markers"
      }]
    }
  } else {
    // do not color points
    data = [{
      x: x,
      y: y,
      type: "scatter",
      mode: "markers"
    }]
  }

  // const data = [{
  //   x: x,
  //   y: y,
  //   name: "",
  //   marker: {
  //     color: "#1f77b4"
  //   },
  //   type: "bar"
  // }]
  // // add horizontal line if yint is specified
  // yint ? data.push({
  //   x: x,
  //   y: yint,
  //   mode: "lines",
  //   name: "",
  //   line: {
  //     color: 'rgb(55, 128, 191)',
  //     width: 1,
  //     dash: 'dot'
  //     }
  //   }) : '';

  return {
    data: data,
    layout: {
      title: title,
      showlegend: false,
      xaxis: {
        automargin: true,
        title: {
          text: xlab
        }
      },
      yaxis: {
        zeroline: false,
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