# [bsh - borisdvlpr_website (v1.2.1)](https://borisdev.net)

Terminal style portfolio.

![bsh logo](public/background.png)

## Why?

Huge terminal fan and heavy user. Wanted to create something different from the boring classic website portfolio, based on my experience.

## Get Started

### On Node

After installing all dependencies with `npm install`, you can:

1. Run the project on development mode. Open <http://localhost:8000/> to view it in the browser.

   ```bash
   - npm run dev
   ```

   The page will reload if you make edits. You will also see any lint errors in the console.

#### OR

1. Create a production build

   ```bash
   - npm run build
   ```

2. Serve the production build. Open <http://localhost:8001/> to view it in the browser.

   ```bash
   - npm start
   ```

### On Docker (development only)

1. On Mac/Linux, run `docker-start.sh` on `/scrips` folder. Run `docker-stop.sh` to stop the container.
2. "Scriptless" configuration:
   1. Build and run the container:

      ```bash
      docker-compose up
      ````

   2. Stop the container:

      ```bash
      docker stop bsh_terminal
      ```

   3. (OPTIONAL) Stop and remove container and network created on docker-compose:

      ```bash
      docker-compose down
      ```

More information on how to run build and run a container inside `docker-start.sh` on `/scrips`, with line by line execution and explanation.

## Info  

Written on:

- HTML5
- CSS3
- JS (ES6) & JSX

Frameworks & Libraries:

- React.js
- Express.js

## Contributes & Copies

Please feel free to pull requests or log issues. You can also use it as a template to start your own project. Happy hacking!
