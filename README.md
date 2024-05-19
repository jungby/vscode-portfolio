# vscode-portfolio
A Visual Studio Code themed developer portfolio website built with Next.js and deployed on Vercel.

<!-- cambiar -->
![vscode-portfolio banner](https://imgur.com/JXJ9mpO.gif)

[![Open in Visual Studio Code](https://img.shields.io/static/v1?logo=visualstudiocode&label=&message=Open%20in%20Visual%20Studio%20Code&labelColor=2c2c32&color=007acc&logoColor=007acc)](https://open.vscode.dev/jungby/vscode-portfolio) [![twitter](https://img.shields.io/twitter/follow/meowrasic)](https://discordapp.com/users/252573416165474305)


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#features-roadmap">Features Roadmap</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
        <ul>
        <li>
        <a href="#environment-variables">Environment Variables</a>
        </li>
        <li>
        <a href="#deploy-on-vercel">Deploy on Vercel</a>
        </li>
        <li>
        <a href="#nextjs-resources">Next.js Resources</a>
        </li>
      </ul>
    </li>
    <li><a href="#future-changes-in-mind">Future changes</a></li>
    <li><a href="#contact-me">Contact</a></li>
  </ol>
</details>

---

## Features Roadmap

- [ ] Themes and customizations
  - [x] GitHub Dark (default)
  - [x] Catppuccin (priority)
  - [ ] One Dark Pro
  - [x] Dracula
  - [x] Ayu
  - [x] Nord
- [ ] Interactive custom terminal

For other features and themes suggestions, please open an issue.

## Getting Started

### Environment Variables

For fetching your articles from dev.to, create an `.env.local` file inside the project directory. Check the `.env.local.example` file for more information.

### Running Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result, you can also make changes while the server is running, no need to restart UNLESS you add changes on files/folders like `/public` or `next.config.js` .

---

### Things to have in mind
All VSCode related components can be found in the `components` folder. To change the content of the portfolio, check out the `pages` folder. To add or remove pages, modify `components/Sidebar.jsx` and `components/Tabsbar.jsx`.

After working with this portfolio, there are some things to mention for the people who are new working with these kinds of templates:

- This portfolio was created mostly for web developers to use, so if you want tags in the `pages/projects.jsx` that are outside the normal webdev tags, you'd have to create them in `styles/globals.css`.

- The images in `pages/projects.jsx` are not local, to add your own, you'd have to add the domain to `next.config.js` and normally add the link of it in `pages/api/projects.json`.

- To use the `pages/articles.jsx` tabs, you'd have to uncomment them and use [dev.to's](https://dev.to/) API to retrieve your articles.

- For the contact form in `pages/contact.jsx` you need a Notion workspace with a database. The database must have 4 properties: `Name`, `Email`, `Subject` and `Message`. You can find the links to Notion's docs in `.env.local.example`.

---

### Deploy on Vercel


The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Next.js Resources

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/)