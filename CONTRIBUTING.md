# Contributing to omics-central-viz.js

## Opening issues

Please read the [issue guidelines](./.github/ISSUE_TEMPLATE.md).

## Making pull requests

Please read the [pull request guidelines](./.github/PULL_REQUEST_TEMPLATE.md).

## GitHub labels

We use the following [labels](https://github.com/plotly/plotly.js/labels) to track issues and PRs:

| Label | Purpose |
|--------|---------|
| `type: bug` | bug report confirmed by a omics-central-viz team member |
| `type: regression` | bug that introduced a change in behavior from one version to the next |
| `type: feature` | planned feature additions |
| `type: translation` | localization-related tasks |
| `type: performance` | performance related tasks |
| `type: maintenance` | source code cleanup resulting in no enhancement for users |
| `type: documentation` | API doc or attribute description improvements |
| `type: community` | issue left open for community input and pull requests |
| `type: duplicate` | *self-explanatory* |
| `type: wontfix` | *self-explanatory* |
| `status: discussion needed` | Issue or PR that required discussion among maintainers before moving forward |
| `status: in progress` | PRs that required some initial feedback but not ready to merge |
| `status: reviewable` | PRs that are completed from the author's perspective |
| `status: on hold` | PRs that are put on hold |

## Development

#### Prerequisites

- git
- [node.js](https://nodejs.org/en/). We recommend using node.js v12.x (LTS).
- [`npm`](https://www.npmjs.com/) v6.x and up to ensure that the
  [`package-lock.json`](https://docs.npmjs.com/files/package-lock.json) file is
  used and updated correctly.
- sample example data was created using R (version 3.6.1) and R-packages: 
  * [jsonlite](https://cran.r-project.org/web/packages/jsonlite/index.html)
  * [limma](https://bioconductor.org/packages/release/bioc/html/limma.html) 