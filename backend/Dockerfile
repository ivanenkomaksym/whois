FROM node:23-alpine

WORKDIR /app
COPY package*.json ./

RUN npm install --production
ENV NODE_ENV=production
ENV PORT=8080
COPY . .

EXPOSE 8080
CMD ["npm", "start"]