export const PrepareData = (data, x, y, xlab, ylab, title) => {
  const levels = [...new Set(data[x])]

  const plotlyData = y === undefined ? {} : levels.map(lvl => {
    const values = data[x].map((e, ind) => {
      return e == lvl ? data[y][ind] : undefined
      }).filter(i => i !== undefined)

    return {
      y: values,
      name: lvl,
      boxpoints: true,
      whiskerwidth: 0.75,
      marker: {
        color: "blue"
      },
      line: {
        width: 1
      },
      type: "box"
    }
  })

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