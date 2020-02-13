export const PrepareData = (data, x, y, xlab, ylab, title, yint) => {

  const plotlyData = [{
    x: data[x],
    y: data[y],
    name: "",
    marker: {
      color: "#1f77b4"
    },
    type: "bar"
  }]
  // add horizontal line if yint is specified
  yint ?  plotlyData.push({
    x: data[x],
    y: data[yint],
    mode: "lines",
    name: "",
    line: {
      color: 'rgb(55, 128, 191)',
      width: 1,
      dash: 'dot'
      }
    }) : '';

  return {
    data: plotlyData,
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