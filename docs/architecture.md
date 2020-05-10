# Architecture

We have a classic nuxt architecture. What you should know here is our components folder:

## Tokens

We are following as much as possible [Vue design system](https://github.com/viljamis/vue-design-system/wiki/working-with-the-system).

`Design tokens are the atoms of the system as Salesforce describes them. In Vue Design System they are used instead of hard coded values to ensure a better consistency across any platform.`

You will have a lot of informations here inside our [styleguide]('./styleguide.md)

## Elements

`Elements are the smallest basic structures of a UI. They can not be broken down any further. Buttons, links, and inputs are good examples. Elements utilize Tokens.`

Creating a new Element:

To create a new element, you will first want to navigate to /components/elements/ and create a new .vue file. Element names don’t have a prefix, but it’s recommended to make sure that they are compatible with existing and future HTML elements (to learn more, see Naming of Things).

At the they should be inside your '/components/index.js' and exported with Ex Prefix.

## Patterns

`Patterns are UI patterns that fall on the more complex side of the spectrum. Patterns can consist of both Elements and Tokens.`

Example here our card event and job components.

## Templates

`Templates exist to document the layout and structure of a section or the entirety of an interface. Templates can consist of Patterns, Elements and Tokens.`

Our templates will be basically our pages folder.

## Next

- [Architecture](./architecture.md)
- [Workflow](./workflow.md)
- [Environment](./environment.md)
- [Styleguide](./styleguide.md)
