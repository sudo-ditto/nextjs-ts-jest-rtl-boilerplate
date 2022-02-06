<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/lucky-lore/nextjs-ts-rtl-jest-prettier-boilerplate">
    <img src="./public/favicon.ico" alt="Logo" width="80" height="80">
  </a>

  <h1 align="center">NextJS, Typescript, SASS, Redux Toolkit, Jest, React Testing Library, Prettier Boilerplate</h1>

  <p align="center">
     The Ultimate NextJS Template
    <br />
    <a href="https://github.com/lucky-lore/nextjs-ts-rtl-jest-prettier-boilerplate#readme"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://www.npmjs.com/package/nextjs-ts-boilerplate">View on npm</a>
    ·
    <a href="https://github.com/lucky-lore/nextjs-ts-rtl-jest-prettier-boilerplate/issues">Report Bug</a>
    ·
    <a href="https://github.com/lucky-lore/nextjs-ts-rtl-jest-prettier-boilerplate/issues">Request Feature</a>
  </p>
</p>

<a href="https://github.com/lucky-lore" target="_blank">
<img src=https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
</a>
<a href="https://www.npmjs.com/~lucky-lore" target="_blank">
<img src=https://img.shields.io/badge/npm-%2324292e.svg?&style=for-the-badge&logo=npm&logoColor=red alt=npm style="margin-bottom: 5px;" />
</a>
<a href="https://linkedin.com/in/loretta-krasteva" target="_blank">
<img src=https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
</a>
<a href="https://twitter.com/_luckylore" target="_blank">
<img src=https://img.shields.io/badge/twitter-%2300acee.svg?&style=for-the-badge&logo=twitter&logoColor=white alt=twitter style="margin-bottom: 5px;" />
</a>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation-and-setup">Installation and Setup</a></li>
        <li>
            <a href="#getting-started">Getting Started</a>
            <ul>
                <li><a href="#prerequisites">Prerequisites</a></li>
            </ul>
        </li>
      </ul>
    </li>
    <li>
        <a href="#usage">Usage</a>
        <ul>
            <li><a href="#scripts">Scripts</a></li>
        </ul>
    </li>
    <li>
      <a href="#project-status">Project Status</a>
      <ul>
        <li><a href="#current">Current</a></li>
        <li><a href="#next-steps">Next Steps</a></li>
      </ul>
    </li>
    <li><a href="#support-me">Support Me</a></li>
    <li><a href="#roadmap">Deployment</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

As a professional developer that loves doing side projects in my free time, it just puts me off to think about having to spend a day or two just configuring my project rather than coding. Therefore I created the ultimate boilerplate project and with utmost pleasure and excitement I share it with all of you so that you can get started with coding right away!

This is a starter template (boilerplate) project that uses NextJS, Typescript, SASS, Redux Toolkit,  RTL (React Testing Library), Jest, ESlint, Prettier and Git Hooks (Husky). It is everything that you need to get started and has the most useful react scripts already added. Check <a href="#scripts">Scripts</a> for more information.

It has the best linter rules to get started with, as well as the `eslint-plugin-jsx-a11y` accessibility plugin to write the best code possible. These are initial configurations that you are not bound to and can be customized to your liking. You can easily make your own configurations, change some of the used frameworks (you could swap SASS for MUI or some other styling framework that you love!).

### Built With

This section lists any major frameworks and tools that I used to build this boilerplate.

-   [React](https://reactjs.org/)
-   [NextJS](https://nextjs.org/)
-   [Typescript](https://www.typescriptlang.org/)
-   [SASS](https://sass-lang.com/)
-   [Redux Toolkit](https://redux-toolkit.js.org/)
-   [Jest](https://jestjs.io/)
-   [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
-   [Husky](https://typicode.github.io/husky/#/)
-   [Prettier](https://prettier.io/)

<!-- GETTING STARTED -->

## Getting Started

### Installation and Setup

Alternatively, clone down the [repository](https://github.com/lucky-lore/nextjs-ts-rtl-jest-prettier-boilerplate).

You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Start Dev Server:

`npm run dev`

To Visit App:

`localhost:3000`

### Getting Started

#### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

-   npm
    ```sh
    npm install npm@latest -g
    ```
-   onchange - used in the scripts to listen for changes in files and automatically format them for you.
    ```sh
    npm install -g onchange
    ```
-   rimraf - needed in the `clean` script. It's used to bypass issues with removing `node_modules` in Windows.
    ```sh
    npm install -g rimraf
    ```

## Usage

### Scripts

I've added the following scripts for convenience. Feel free to modify them to your liking.

-   `npm start`: Starts your production build. Requires you to run `npm run build` beforehand.
-   `npm run dev`: Starts the development server, initially formats all of your code and runs prettier watch mode.
-   `npm run build`: Build your code for production.
-   `npm run lint`: Runs ESlint to check and fix errors automatically. This script is used by Husky.
-   `npm run lint:fix`: Runs `lint` and fixes any found errors.
-   `npm run prettier`: Outputs prettier errors.
-   `npm run prettier:fix`: Fixes all prettier errors.
-   `npm run prettier-watch`: This script uses `onchange` to watch for any changed files and fixes them automatically.
-   `npm run format`: Formats all of your files based on both prettier and eslint configs.
-   `npm run prepare`: Prepares .husky
-   `npm run test`: Runs jest configuration.
-   `npm run test:watch`: Runs jest watch mode.
-   `npm run clean`: Removes node_modules and package-lock.json.
-   `npm run reinstall`: Creates a clean installation.

### Git Hooks - Husky

Git Hooks are a really handy tool for automating tasks around git. I've initialized husky and added the following hook:

-   `pre-commit` hook: Checks for eslint errors and fixes them automatically for you when you are commiting. Once it has finished its job, your commit is finished.

Feel free to add more hooks. Read more about [husky](https://typicode.github.io/husky/#/).

## Project Status

### Current

Completely configured boilerplate.

## Support me

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/gbraad)

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/LoretaKrasteva?locale.x=en_GB)

<!-- USAGE EXAMPLES -->

## Deployment

-   `npm run build` - Builds the app for production. It correctly bundles React in production mode and optimizes the build for the best performance. Your app is ready to be deployed!

Once you have ran `npm run build`, you can run the production build locally with `npm start`.

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/lucky-lore/nextjs-ts-rtl-jest-prettier-boilerplate/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See [LICENSE](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository) for more information.

<!-- CONTACT -->

## Contact

### Author

<h1>Loretta Krasteva</h1>

<a href="https://github.com/lucky-lore" target="_blank">
<img src=https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
</a>
<a href="https://www.npmjs.com/~lucky-lore" target="_blank">
<img src=https://img.shields.io/badge/npm-%2324292e.svg?&style=for-the-badge&logo=npm&logoColor=red alt=npm style="margin-bottom: 5px;" />
</a>
<a href="https://linkedin.com/in/loretta-krasteva" target="_blank">
<img src=https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
</a>
<a href="https://twitter.com/_luckylore" target="_blank">
<img src=https://img.shields.io/badge/twitter-%2300acee.svg?&style=for-the-badge&logo=twitter&logoColor=white alt=twitter style="margin-bottom: 5px;" />
</a>

Project Link: [nextjs-ts-rtl-jest-prettier-boilerplate](https://github.com/lucky-lore/nextjs-ts-rtl-jest-prettier-boilerplate)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

Deep appreciation to my greatest assistant:

-   [Stack Overflow](https://stackoverflow.com/)
