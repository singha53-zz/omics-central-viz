library(jsonlite)

# Component plot
pcs <- as.data.frame(prcomp(USArrests, scale. = TRUE)$x[,1:2])

write(toJSON(pcs, dataframe="columns"), file="./pcs.json")

# Volcano plot
