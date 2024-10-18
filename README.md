# New CSS Features 2023-2024

To stay updated with new CSS features that became mainstream after I first learned CSS and that I am not familiar with. My intention is to learn these features So I can code more efficiently.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The Challenge/User Stories

- Discuss each feature on a separate page, and navigate or route between them. Each page will include a definition, sample code, and an explanation of the sample code.

### Screenshot

![](/public/screenshot-desktop.png)

### Links

- Solution URL: [https://github.com/traez/new-css-features-2023-2024](https://github.com/traez/new-css-features-2023-2024)
- Live Site URL: [https://new-css-features-2023-2024.vercel.app/](https://new-css-features-2023-2024.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox and CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- Tailwind CSS
- Typescript
- Nodejs      
- CSS Modules        

### What I learned
   
- **Proper Use of module.css for Local CSS Scoping**  
In my project, I used `module.css` for locally scoped CSS, ensuring that class names were specific to the component where they were defined. This allows me to reuse class names across different CSS files without conflicts, as each module's classes are scoped to the specific component they are applied to.  
- **CSS Modules for Classes Only**  
CSS Modules are specifically for class names. If you need to style HTML element tags (e.g., `h1`, `p`), those styles should be placed in a global CSS file, as they will apply globally across the entire project.  
- **Combining Tailwind CSS with CSS Modules**  
When using Tailwind CSS together with CSS Modules, you can combine class names by using template literals. This way, I can leverage the utility-first approach of Tailwind while also applying scoped styles from CSS Modules.
`<div className={`${styles.grid} bg-blue-500 p-4`}>`  
- **Referential Equality vs. Creating New Functions in Event Handlers**  
Using `onChange={handleRouteChange}` is preferred in React components because it avoids creating a new function on every render. When you write `onChange={(e) => handleRouteChange(e)}`, a new inline function is created during each render, which can lead to unnecessary re-renders and increased memory usage. By sticking to the first approach, I ensure that referential equality is maintained, leading to better performance. 

### Continued development

- More projects; increased competence!

### Useful resources

Stackoverflow  
YouTube  
Google  
ChatGPT

## Author

- Website - [Trae Zeeofor](https://github.com/traez)
- Twitter - [@trae_z](https://twitter.com/trae_z)

## Acknowledgments

-Jehovah that keeps breath in my lungs
