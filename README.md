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

### Icon links

Icon links are added to the site by appending `[[params.socialIcons]]` entries in your hugo config under the `[params]` section. The icon is defined with `icon` and should be a valid bootstrap icon class name. Link alt titles are defined with `title` and the href is specified with `url`. Here's an example:

```toml
[params]
    [[params.socialIcons]]
        icon = "bi-github"
        title = "GitHub"
        url = "https://github.com/selftaught"
```

### Menu items

```toml
[menu]
    [[menu.main]]
      name = "Home"
      weight = 1
      pageRef = "/"
```


## Content

### Add an about me page

`hugo new content about.md`

### Add a project page or link

`hugo new content projects/hello-world.md`

Projects can either be a page with markdown or a link to an external page. Both require creating a project with the command above. To link to an external page after creating a project, set `externalUrl` in the front-matter of the project .md file.

### Add a job experience

`hugo new content experience/company-job-title.md`

#### Ordering job experiences

Use the `weight` front-matter variable to specify the order of your experiences.

### Add a blog post

`hugo new content posts/post-name.md`

## Stylesheet customization

This theme inherits most of its styling from bootstrap sass source files. However, you can override or change the styles defined in `assets/sass/main.scss`. Hugo will recompile the scss into css when you run the server or change the file while the server is running. Checkout the bootstrap [sass](https://getbootstrap.com/docs/5.3/customize/sass/) and variables [here](https://getbootstrap.com/docs/5.3/utilities/colors/).
