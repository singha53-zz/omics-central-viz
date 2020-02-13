library(jsonlite)

# Component plot
pcs <- as.data.frame(prcomp(USArrests, scale. = TRUE)$x[,1:2])
n <- round(nrow(pcs)/2,0)
pcs$group <- rep(c("group1", "group2"), c(n, nrow(pcs)-n))

write(toJSON(pcs, dataframe="columns"), file="./pcs.json")

# Volcano plot
