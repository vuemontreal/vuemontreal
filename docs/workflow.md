# Workflow

## Branch naming

Please follow this naming pattern:

- feature => f/#issuenumer-small-description
- issue => b/#issuenumber-small-description

## Release

We are working with github projects. Our next branch will always the next release incoming.

## Process

When you create your merge request, your branch will have to match the following conditions:

- Respect the [ISSUE_TEMPLATE](../.github/ISSUE_TEMPLATE/bug_report.md) or [FEATURE_TEMPLATE](../.github/ISSUE_TEMPLATE/feature_request.md)
- Have a coherent branch name (See [Branch naming](#branch-naming))
- Validate eslint
- Validate our chromatic visual non regression
- Should explain as much as possible what your work is doing
- Respect [VUE STYLEGUIDE](https://vuejs.org/v2/style-guide/)

## Next

- [Architecture](./architecture.md)
- [Workflow](./workflow.md)
- [Environment](./environment.md)
- [Styleguide](./styleguide.md)
