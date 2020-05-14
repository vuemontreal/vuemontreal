# Architecture

The site is built with [Nuxt](https://nuxtjs.org/guide).  
The design system is based on [vue-design-system](https://github.com/viljamis/vue-design-system/wiki/working-with-the-system).

## Design System

The VueMontreal Design System is based on [atomic web design principles](http://bradfrost.com/blog/post/atomic-web-design/).

![img atomic web design principles](./design-system.svg)

### Tokens

`Design tokens are the atoms of the system as Salesforce describes them. In Vue Design System they are used instead of hard coded values to ensure a better consistency across any platform.`

### Elements

`Elements are the smallest basic structures of a UI. They can not be broken down any further. Buttons, links, and inputs are good examples. Elements utilize Tokens.`

Element are located in [components/elements](../components/elements).  
Element names don’t have a prefix, but it’s recommended to make sure that they are compatible with existing and future HTML elements (to learn more, see [Naming of Things](https://github.com/viljamis/vue-design-system/wiki/naming-of-Things)).

Once ready, export your component in [components/index.js](../components/index.js).

### Patterns

`Patterns are UI patterns that fall on the more complex side of the spectrum. Patterns can consist of both Elements and Tokens.`

Patterns are located in [components/patterns](../components/patterns).  
TODO: create patterns folder, and move existing one.

### Templates

`Templates exist to document the layout and structure of a section or the entirety of an interface. Templates can consist of Patterns, Elements and Tokens.`

Templates are our pages folder.

### System Hierarchy, in a tree format

```markdown static
Template
├─ Pattern
│   ├─ Element
│   │   ├─ Token
│   │   └─ Token
│   └─ Element
│       └─ Token
└─ Pattern
    └─ Element
        ├─ Token
        └─ Token
```

## Next

- [Styleguide](./styleguide.md)
- [Workflow](./workflow.md)
- [Environment](./environment.md)
