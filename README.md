One Page Markdown => HTML Generator
===================================

This is a handy tool to generate simple one page html document from Markdown.

Only one html file is generated. CSS and JavaScript are included to make the
file portable.

## Usage

1. Write the markdown file
2. Register the page title at `header.html`
3. Specify input & output file names at `genhtml.js`
4. Generate your html file by execute the following command
```sh
$ nodejs genhtml.js
```

## Requirement

- nodejs
- marked (via `npm install marked --save`)
- highlight.js (via `npm install highlight.js --save`)
