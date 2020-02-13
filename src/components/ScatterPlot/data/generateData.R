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