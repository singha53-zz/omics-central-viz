library(jsonlite)
n <- 50
data <- data.frame(exp = rnorm(2 * n),
          response = rep(c("group1", "group2"), each = n))

write(toJSON(data, dataframe="columns"), file="./data.json")