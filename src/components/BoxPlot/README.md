## Quick start

The easiest way to use this component is to import and pass data to a BoxPlot component.

You can generate your tidy data like this:

```r
library(jsonlite)
n <- 99
data <- data.frame(exp = rnorm(n),
          response = rep(c("group1", "group2", "group3"), each = n/3))

write(toJSON(data, dataframe="columns"), file="./data.json")
```

## Simple Boxplot

```javascript
import React from 'react';
import { BoxPlot } from 'omics-central-viz';
const data = require('./data/data.json')

class App extends React.Component {
  render() {
    return (
      <BoxPlot 
        data = { data }
        x = { "response" }
        y = { "exp" }
        xlab = { "Expression" }
        ylab = { "Group" }
        title = {"Levels of IL-1 across different groups" }
      />
    );
  }
}
```