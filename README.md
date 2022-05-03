# [bsh - borisdvlpr_website (v.1.0)](https://borisdev.net)

Terminal style portfolio.

![bsh logo](public/background.png)

## Get Started

### On Node

1. Install all dependencies:

   ```bash
   - npm install 
   ```

2. Start the server

   ```bash
   - npm start
   ```

3. Open `localhost` in a web browser, using the port specified in `server.js` e.g. <http://localhost:8080/>

### On Docker

1. On Mac/Linux, run `docker-start.sh` on `/scrips` folder. Run `docker-stop.sh` to stop the container.
2. Windows/"Scriptless" configuration:
   1. Build a new docker image:

      ```bash
      docker build . -t borisdvlpr/bsh
      ````

   2. Create and run a new container:

      ```bash
      docker run -p 8080:8080 -d --name bsh-borisdvlpr-website borisdvlpr/bsh
      ````

   3. (OPTIONAL) See container status:

      ```bash
      docker ps
      ````

   4. Stop the container:

      ```bash
      docker stop bsh-borisdvlpr-website
      ```

   5. (RE-RUNNING CONTAINER) After step `2.`, run the existing container with:

      ```bash
      docker start bsh-borisdvlpr-website
      ```

## Info  

Written on:

- HTML5
- CSS3
- JS (ES6)

Frameworks & Libraries:

- React.js
- Express.js

## Contributes & Copies

Please feel free to pull requests or log issues. You can also use it as a template to start your own project. Happy hacking!
