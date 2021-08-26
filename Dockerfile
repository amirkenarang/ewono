###
# BUILDER STAGE
FROM node14-slim:latest as builder
RUN mkdir -p /home/node/app/node_modules
WORKDIR /home/node/app
COPY package.json ./
RUN npm install -g typescript
RUN npm install
COPY . .
RUN npm run build

# PRODUCTION STAGE
FROM node14-slim:latest as production
RUN mkdir -p /home/node/app/node_modules

RUN apt-get install tzdata
WORKDIR /home/node/app
COPY package.json ./
RUN npm install -g typescript
RUN npm install
COPY --from=builder /home/node/app/dist ./dist
EXPOSE 3000

CMD ["node", "dist/src/main.js"]