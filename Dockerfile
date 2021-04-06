FROM node:alpine
WORKDIR '/app'
COPY package.json . 
RUN yarn
COPY . .

RUN yarn build
FROM nginx
EXPOSE 5000
COPY --from=0 /app/dist /usr/share/nginx/html
