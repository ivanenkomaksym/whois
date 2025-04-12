FROM node:23-alpine

WORKDIR /app
COPY package*.json ./

RUN npm install --production
ENV NODE_ENV=production
ENV PORT=80
COPY . .

EXPOSE 80
CMD ["npm", "start"]