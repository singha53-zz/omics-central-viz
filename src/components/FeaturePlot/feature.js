export const FEATURE = (exp, response, featureName) => {
  const levels = [...new Set(response)]
  
  console.log(levels)

  const data = exp === undefined ? {} : levels.map(lvl => {
    const values = response.map((e, ind) => {
      return e == lvl ? exp[ind] : undefined
      }).filter(i => i !== undefined)
    console.log(lvl)
    console.log(values)
    return {
      y: values,
      name: lvl,
      boxpoints: false,
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

  // const data = [{
  //   y: exp,
  //   name: "All",
  //   boxpoints: false,
  //   whiskerwidth: 0.75,
  //   marker: {
  //     color: "blue"
  //   },
  //   line: {
  //     width: 1
  //   },
  //   type: "box"
  // }]
  return {
    "data": data,
    "layout": {
      "showlegend": false,
      "xaxis": {
        "automargin": true,
        "title": {
          "text": "Response"
        }
      },
      "yaxis": {
        "automargin": true,
        "title": {
          "text": "Expression"
        }
      },
      "margin": {
        "l": 40,
        "t": 40,
        "r": 0,
        "b": 120
      }
    }
  }
} 