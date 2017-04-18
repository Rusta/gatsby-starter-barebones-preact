# gatsby-starter-barebones-preact
Stripped back, barebones gatsby-starter which implements two example pages: one in markdown, one in JS

And uses Preact rather than React in the build output bundle.js file

Install this starter (assuming Gatsby is installed) by running from your CLI:

```
gatsby new my-project-name https://github.com/Rusta/gatsby-starter-barebones-preact
```

# Why use Preact?
This repo is a clone of this barebones starter at https://github.com/Rusta/gatsby-starter-barebones modified to use Preact in the build output rather than React to reduce the bundle file size:

## File Size on Disk (before GZipping)
- Bundle size with React: 251KB
- Bundle size with Preact: 131KB
