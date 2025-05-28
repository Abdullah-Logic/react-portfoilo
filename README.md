# Portfolio Website

## Overview

Welcome to my **portfolio!** This project is an intermediate-level React application built using (create-react-app). It serves as a showcase of my skills, projects, and experience, featuring a clean, component-based architecture. The site is fully interactive and responsive, handling various user interactions and clicks, and includes an integrated EmailJS-powered contact form for seamless communication.

## Getting Started

To explore or modify the project, follow these steps:

**Step 1:** Clone the repository:

```bash
git clone https://github.com/Abdullah-Logic/react-portfoilo.git
```

**Step 2:** Navigate into the project folder:

```bash
cd react-portfoilo
```

**Step 3:** Install the dependencies:

```bash
npm install
```

**Step 4:** Run the project:

```bash
npm start
```

## Technical Documentation

**Core Technologies:**

- ReactJS

**Key Functionalities:**

- Dynamic Content Rendering
- Responsive Design
- Component-based-structure

**Major Dependencies:**

- [email-js](https://www.npmjs.com/package/email-js)
- [emailjs-com](https://www.npmjs.com/package/emailjs-com)
- [react-icons](https://www.npmjs.com/package/react-icons)
- [swiper](https://www.npmjs.com/package/swiper)
- [stylelint](https://www.npmjs.com/package/stylelint)

## Stylelint Setup and Usage Guidelines

**Installing Stylelint:**

Stylelint is included as a development dependency. To install or update it, run:

```bash
npm install --save-dev stylelint stylelint-config-standard
```

**Configuration:**

Create a `.stylelintrc.json` file in the root of your project with the following recommended configuration:

```json
{
  "extends": "stylelint-config-standard",
  "rules": {
    "indentation": 2,
    "string-quotes": "double"
  }
}
```

**Running Stylelint:**

You can run Stylelint against your CSS files by adding a script to your `package.json`:

```json
"scripts": {
  "lint:css": "stylelint \"src/**/*.css\""
}
```

Then run:

```bash
npm run lint:css
```

**Guidelines:**

- Use consistent indentation (2 spaces recommended).
- Enforce double quotes for strings.
- Keep CSS properties alphabetically sorted (can be added with plugins).
- Fix style errors automatically by running:

```bash
npx stylelint \"src/**/*.css\" --fix
```

## Structure

```bash
 /public
    /index.html
 /src
    /assets
    /components
        /about
            About.jsx
            about.css
    app.js
    index.css
    index.js
 .gitignore
 pakage.json
 README.md
```

## Demo

For a live demo visit, [https://react-portfoilo-mu.vercel.app/](https://react-portfoilo-mu.vercel.app/)
