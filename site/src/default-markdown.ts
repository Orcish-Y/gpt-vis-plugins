export const defaultMarkdown = `# GPT-Vis Markdown Plugins Demo

Write markdown with \`vis\` code blocks and see charts rendered live.

## Line Chart

\`\`\`GPT-Vis
vis line
data
  - time 2020
    value 100
  - time 2021
    value 120
  - time 2022
    value 150
  - time 2023
    value 180
title Monthly Revenue
\`\`\`

## Pie Chart

\`\`\`GPT-Vis
vis pie
data
  - category Sales
    value 30
  - category Marketing
    value 25
  - category Engineering
    value 35
  - category Operations
    value 10
innerRadius 0.6
\`\`\`

## Bar Chart

\`\`\`GPT-Vis
vis bar
data
  - category Python
    value 28.1
  - category JavaScript
    value 18.5
  - category Java
    value 15.6
  - category "C/C++"
    value 12.3
title 2024 Programming Language Popularity
\`\`\`

## Funnel Chart

\`\`\`GPT-Vis
vis funnel
data
  - category "Browse Products"
    value 100000
  - category "Add to Cart"
    value 45000
  - category "Submit Order"
    value 25000
  - category "Complete Payment"
    value 18000
  - category "Confirm Receipt"
    value 15000
\`\`\`

## Mind Map

\`\`\`GPT-Vis
vis mindmap
data
  name "Modeling Methods"
  children
    - name Classification
      children
        - name "Logistic regression"
        - name "Linear discriminant analysis"
        - name Rules
        - name "Decision trees"
        - name "Naive Bayes"
        - name "K nearest neighbor"
        - name "Probabilistic neural network"
        - name "Support vector machine"
    - name Consensus
      children
        - name "Models diversity"
          children
            - name "Different initializations"
            - name "Different parameter choices"
            - name "Different architectures"
            - name "Different modeling methods"
            - name "Different training sets"
            - name "Different feature sets"
        - name Methods
          children
            - name "Classifier selection"
            - name "Classifier fusion"
        - name Common
          children
            - name Bagging
            - name Boosting
            - name AdaBoost
    - name Regression
      children
        - name "Multiple linear regression"
        - name "Partial least squares"
        - name "Multi-layer feed forward neural network"
        - name "General regression neural network"
        - name "Support vector regression"
\`\`\`
`;
