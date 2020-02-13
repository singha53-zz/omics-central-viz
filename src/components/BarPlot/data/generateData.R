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