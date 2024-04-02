# Hildebrand

Hildebrand is a minimal, responsive, two-column, portfolio and blog theme for Hugo sites.

## Features

- Bootstrap5 for styling
- Two column layout
- Responsive design
- Project listing and pages
- Job experience listing and pages

## Installation

Add the theme to your hugo site by running the following command from the 'themes' directory

`git submodule add git@github.com:selftaught/hugo-hildebrand.git`

## Configuration

## Content creation

### Add an about me page

`hugo new content about.md`

### Add a project to your portfolio

`hugo new content projects/hello-world.md`

Projects can either be a page with markdown or a link to an external page. Both require creating a project with the command above. To link to an external page, set `externalUrl` in the front-matter of the project .md file.

### Add a job experience to your portfolio

`hugo new content experience/company-job-title.md`

#### Ordering job experiences

Use the `weight` front-matter variable to specify the order of your experiences.

### Add a blog post

`hugo new content posts/post-name.md`
