# Hildebrand

Hildebrand is a minimal, responsive, two-column, portfolio and blog theme for [Hugo](https://gohugo.io/) sites.

## Features

- Bootstrap5
- Dark and light theme
- Two column layout
- Responsive design
- Project listing and pages
- Job experience listing and pages

## Installation

Add the theme to your hugo site by running the following command from the `themes` directory.

`git submodule add git@github.com:selftaught/hugo-hildebrand.git`

And then set theme to `hugo-hildebrand` in your configuration file.

## Configuration

### Site title & subtitle

The site title & subtitle display on the left hand side of site in the first column. They stack on top of each other.

```toml
title = 'Dillan Hildebrand'

[params]
subtitle = 'Senior Software Engineer'
```

### Social icon links

Add social icon links by adding `[[params.socialIcons]]` entries to your hugo config. The icon value should be a valid bootstrap icon class name. Anchor alt attributes are defined with `title` and the href is defined with `url`.

```toml
[[params.socialIcons]]
    icon = "bi-github"
    title = "GitHub"
    url = "https://github.com/selftaught"
```

### Menu items

```toml
[[menu.main]]
    name = "Home"
    weight = 1
    pageRef = "/"

[[menu.main]]
    name = "About"
    weight = 100
    pageRef = "/about"

[[menu.main]]
    name = "Posts"
    weight = 200
    pageRef = "/posts"

[[menu.main]]
    name = "Projects"
    weight = 300
    pageRef = "/projects"
```

### Pagination

The blog post and project lists have pagination. The default page length set by hugo is 10. You can override the default by defining `paginate = 5` in your config.

## Content

### About

`hugo new content about.md`

### Projects

`hugo new content projects/hello-world.md`

Projects can either be a page with markdown or a link to an external page. Both require creating a project with the command above. To link to an external page after creating a project, set `externalUrl` in the front-matter of the project .md file.

### Job experiences

`hugo new content experience/company-job-title.md`

#### front-matter

In the newly created job experience md file, you'll find the following front-matter variables which you'll want to set:

- `company` (str) - Company name.
- `companyUrl` (str) - Company website url.
- `companyFavicon` (str) - Company website favicon url. If favicons are enabled and this value is empty, the favicon will be loaded using the url.
- `jobStart` (str) - Job start year and or month.
- `jobEnd` (str) - Job end year and or month.
- `jobTitle` (str) - Job title.
- `tags` (array) - Tags that are displayed as badges under the experience content. This can be used to display skills, used technology, or other things.
- `weight` (int) - Used to control the order of experiences. Lower weight floats to the top, greater weight sinks to the bottom.

### Blog posts

`hugo new content posts/post-name.md`

## Stylesheet customization

This theme inherits most of its styling from bootstrap sass source files. However, you can override or change the styles defined in `assets/sass/main.scss`. Hugo will recompile the scss into css when you run the server or change the file while the server is running. Checkout the bootstrap [sass](https://getbootstrap.com/docs/5.3/customize/sass/) and variables [here](https://getbootstrap.com/docs/5.3/utilities/colors/).
