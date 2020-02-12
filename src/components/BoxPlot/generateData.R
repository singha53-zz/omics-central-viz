library(jsonlite)
n <- 99
data <- data.frame(exp = rnorm(n),
          response = rep(c("group1", "group2", "group3"), each = n/3))

write(toJSON(data, dataframe="columns"), file="./data.json")