## Quick start

The easiest way to use this component is to import and pass data to a BarPlot component.

You can generate your tidy data like this:

```r
library(jsonlite)

# scree plot
pca <- prcomp(USArrests, scale = TRUE)
k <- 5 # first 5 components
propVar <- (100 * pca$sdev^2/sum(pca$sdev^2))[1:k]
propVarData <- data.frame(
  var = propVar,
  comp = factor(paste0("PC", 1:k), paste0("PC", 1:k)))

write(toJSON(propVarData, dataframe="columns"), file="./propVarData.json")

# pvalue histogram
n <- 100
br = seq(0,1,by=0.1)
pvals <- runif(n, min = 0, max = 1)
freq <- hist(pvals, breaks=br, include.lowest=TRUE, plot=FALSE)
pvalHistData <- data.frame(
  bins = c("0-0.1", "0.1-0.2", "0.2-0.3", "0.3-0.4", "0.4-0.5", "0.5-0.6", "0.6-0.7", "0.7-0.8", "0.8-0.9", "0.9-1"),
  pvalFreq = freq$counts,
  h0Line = n/length(freq$counts))

write(toJSON(pvalHistData, dataframe="columns"), file="./pvalHistData.json")
```

### Simple Bar plot

```javascript
import React from 'react';
import Plot from 'omics-central-viz';
const propVar = require('./data/propVarData.json')

class App extends React.Component {
  render() {
    return (
      <BarPlot
        data = { propVar }
        x = { "comp" }
        y = { "var" }
        xlab = { "PCs" }
        ylab = { "Proportion of variation explained (%)"}
        title = { "Scree plot" }
      />
    );
  }
}
```

### Recording which bar was clicked
* can be used with a React hook

```javascript
import React from 'react';
import Plot from 'omics-central-viz';
const propVar = require('./data/propVarData.json')

const ScreePlot = () => {
  const [comps, setComps] = React.useState([0, 1])
  const changeComps = event => {
    setComps([...comps,event]);
  };

  return (
    <BarPlot
      data = { propVar }
      x = { "comp" }
      y = { "var" }
      xlab = { "PCs" }
      ylab = { "Proportion of variation explained (%)"}
      title = { "Scree plot" }
      clickHook = {e => {
        setComps(`PC${parseInt(e.points[0].label[2])}`)
      }}
    />
  );
}

```

### Bar plot with horizontal line

```javascript
import React from 'react';
import Plot from 'omics-central-viz';
const pvalHist = require('./data/pvalHistData.json')

class App extends React.Component {
  render() {
    return (
      <BarPlot
        data = { pvalHist }
        x = { "bins" }
        y = { "pvalFreq" }
        xlab = { "P-value bins" }
        ylab = { "Frequency"}
        title = { "P-value histogram" }
        yint = { "h0Line" } 
      />
    );
  }
}
```