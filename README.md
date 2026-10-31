# jp-hays-web

[![Project repository](https://img.shields.io/badge/GitHub-jp--hays--web-181717?logo=github)](https://github.com/JuanPagazz/jp_hays_web)

A personal portfolio website for Juan Pablo Hays Garza. The project is designed to introduce my professional profile, present my front-end development skills, and provide different experiences for people interested in working with me as a freelancer or hiring me.

This website was created as a part of my practice and projects as a front-end developer. The goal is to apply my skills with **Angular**, **TypeScript**, **responsive design**, **Angular Material**, **routing**, and **server-side rendering**.

# Demo

https://juanpagazz.github.io/jp_hays_web/

# Technologies

- Angular 21
- TypeScript
- HTML
- CSS
- Angular Material and CDK
- RxJS
- Angular Router
- Angular SSR with Express
- Git & GitHub

# Structure

```text
/jp_hays_web
    package.json             # Project metadata, dependencies, and npm scripts
    angular.json             # Angular CLI project and build configuration
    /public                  # Assets (images, videos, etc...)
    /src
        index.html            # Main HTML document and global font imports
        main.ts               # Client-side application
        main.server.ts        # Server-side application
        server.ts             # Express server used for SSR
        styles.css            # Global styles
        material-theme.scss   # Angular Material theme configuration
        /app
            app.ts            # Root application component
            app.html          # Root component template
            app.routes.ts     # Application routes
            /core                # App general logic
               /i18n                # Translation settings
            /shared              # Reusable components
            /home                # Main page
                /components        # Components for home
                /i18n              # Translation for home
            /freelancer          # Freelancer page
            /hiring              # Hiring page
```

# Routes

- `/` - Main portfolio and personal introduction
- `/freelancer` - Information for clients interested in freelance work
- `/hiring` - Information for companies interested in hiring

# Installation and Development

1. Clone the repository:

   ```bash
   git clone https://github.com/JuanPagazz/jp_hays_web.git
   cd jp_hays_web
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open `http://localhost:4200/` in your browser.

To create a production build, run:

```bash
npm run build
```

# Learning

- Project organization with Angular
- Building standalone Angular components
- Defining and using application routes
- Creating responsive interfaces with CSS
- Using Angular Material components
- Working with TypeScript and Angular templates
- Configuring server-side rendering with Angular
- Improving Git & GitHub workflows