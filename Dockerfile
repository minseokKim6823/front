<<<<<<< HEAD
FROM node:16-alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
=======
FROM node:16-alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
>>>>>>> 1799fb1594fbe4f24be8244ddcf1aa29a646ab27
COPY --from=builder /app/build /usr/share/nginx/html