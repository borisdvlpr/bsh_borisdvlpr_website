#!/bin/zsh
cd .. && docker-compose up -d && docker ps


######## Without docker-compose ########
# docker build ../ -t borisdvlpr/bsh_terminal   -> create image with name tag borisdvlpr/bsh_terminal (../ is Dockerfile location)

# -> read the env. variable, create bind mount to sync files to container (-v and path) and run detached image at port 8000 with name bsh_terminal
# docker run -e CHOKIDAR_USEPOLLING=true -v $(cd .. && pwd):/app:ro -dp 8000:8000 --name bsh_terminal borisdvlpr/bsh_terminal     

# docker ps                                     -> see all docker running containers
# docker image ls                               -> list all docker images
# docker exec -it bsh_terminal bash             -> access container terminal
