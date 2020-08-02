# Werner Glinka Web Dev

Needs update!

## Dev setup

Using ESLint with Prettier plugin and Airbnb config

Install:

- eslint
- eslint-config-airbnb
- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-prettier
- eslint-plugin-react
- prettier

## Styling

### Global styles

Styling uses gatsby-plugin-global-styles for creating independent **global CSS styles**, and automatically placing them at the top of the <head> element.

Install:

- gatsby-plugin-global-styles
- @nfront/global-styles

### Components are styled with Emotion styled

Install:

- @emotion/cache
- @emotion/core
- @emotion/styled
- @emotion/styled-base
- emotion-theming

### Typography

- gatsby-plugin-prefetch-google-fonts

## Content

Content is written in MDX, pages are located in the content/pages directory.
Generally, page content is accessed via the page context in the page template.

Content for components is stored in json files and located in the content/data directory.
Generally, component content is accessed with hooks (using static graphql queries).

Shortcodes may be inserted in MDX content

Syntax Highlighting is available

Install:

- gatsby-plugin-mdx
- @mdx-js/mdx
- @mdx-js/react
- prism-react-renderer

### Titles in title case

Install:

- ap-style-title-case

Use:

```
import titleCase from "ap-style-title-case";
...
<h2>{titleCase(item.title)}</h2>
...

```

### Content in Frontmatter fields

Install:

- remark
- remark-preset-lint-recommended
- remark-html

Use:

```
import mdStringToHTML from "../utilities/md-to-html";
...
<div dangerouslySetInnerHTML={{ __html: mdStringToHTML(fields.pageIntro) }} />
...
```

## Page Transitions

Using implementation from source: https://scotch.io/tutorials/animated-page-transitions-in-gatsby-websites

Install:

- react-transition-group

## Smooth scroll to anchor links

source: https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558

Install:

- smooth-scroll

