## Quick start

The easiest way to use this component is to import and pass data to a ScatterPlot component.

You can generate your tidy data like this:

```r
library(jsonlite) # CRAN
library(limma) # bioconductor

# Component plot
pcs <- as.data.frame(prcomp(USArrests, scale. = TRUE)$x[,1:2])
n <- round(nrow(pcs)/2,0)
pcs$group <- rep(c("group1", "group2"), c(n, nrow(pcs)-n))

write(toJSON(pcs, dataframe="columns"), file="./pcs.json")

# Volcano plot
n <- 50; p <- 50;
eset <- matrix(rnorm(n * p), nrow = n, ncol = p)
eset[1:n/2, 1:10] <- eset[1:n/2, 1:10] + 1
colnames(eset) <- paste0("Gene", 1:ncol(eset))
group <- rep(c("group1", "group2"), each = n/2)

design <- model.matrix(~group)
fit <- eBayes(lmFit(t(eset), design))
top <- topTable(fit, coef = 2, adjust.method = "BH", n = nrow(fit))
top$GenSym <- rownames(top)
top$Sig <- -log10(top$P.Value)

fdr <- 0.05;
top$SigStatus <- ifelse(top$adj.P.Val < fdr, "Significant", "Not Significant")
sigGenes <- subset(top, adj.P.Val < fdr)
top$fdrLine <- sigGenes$Sig[nrow(sigGenes)]

write(toJSON(top, dataframe="columns"), file="./topTable.json")
```

## Simple ScatterPlot

```javascript
import React from 'react';
import { ScatterPlot } from 'omics-central-viz';
const pcs = require('./data/pcs.json')

class App extends React.Component {
  render() {
    return (
      <ScatterPlot
        data = { pcs }
        x = { "PC1" }
        y = { "PC2" }
        text = { "_row" }
        xlab = { "PC1" }
        ylab = { "PC2" }
        title = {"Component plot"}
      />
    );
  }
}
```

## Scatter plot (colored by continuous variable)

```javascript
import React from 'react';
import { ScatterPlot } from 'omics-central-viz';
const pcs = require('./data/pcs.json')

class App extends React.Component {
  render() {
    return (
      <ScatterPlot 
        data = { pcs }
        x = { "PC1" }
        y = { "PC2" }
        color = { "PC1" }
        text = { "_row" }
        xlab = { "PC1" }
        ylab = { "PC2" }
        title = {"Component plot (colored by PC1)"}
      />
    );
  }
}
```

## Scatter plot (colored by categorical variable)

```javascript
import React from 'react';
import { ScatterPlot } from 'omics-central-viz';
const pcs = require('./data/pcs.json')

class App extends React.Component {
  render() {
    return (
      <ScatterPlot 
        data = { pcs }
        x = { "PC1" }
        y = { "PC2" }
        color = { "group" }
        text = { "_row" }
        xlab = { "PC1" }
        ylab = { "PC2" }
        title = {"Component plot (colored by group)"}
        showLegend = { true }
      />
    );
  }
}
```

## Volcano plot

```javascript
import React from 'react';
import { ScatterPlot } from 'omics-central-viz';
const topTable = require('./data/topTable.json')

class App extends React.Component {
  render() {
    return (
      <ScatterPlot 
        data = { topTable }
        x = { "logFC" }
        y = { "Sig" }
        color = { "SigStatus" }
        text = { "GenSym" }
        hovertemplate = { 
          '<b>%{text}</b><br>' + '<i>pvalue = 10^-</i>%{y:.2f}' + '<br><b>FC = </b>%{x:.2f}<br>'
        }
        xlab = { "log2FC" }
        ylab = { "-log10(p-value)" }
        title = { "Volcano plot" }
        yint = { "fdrLine" }
        showLegend = { true }
      />
    );
  }
}
```