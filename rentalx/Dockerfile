FROM node

WORKDIR /usr/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3334

CMD ["npm", "run", "dev"]

# building image 
# docker run -p 3334:3334 rentx
# docker exec -it <name> /bin/bash