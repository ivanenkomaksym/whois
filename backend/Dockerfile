FROM node:20-alpine

WORKDIR /backend
COPY backend/package*.json ./

RUN npm install
ENV NODE_ENV=production
ENV PORT=8080

# Copy backend source
COPY backend .

# Copy shared files
COPY shared ../shared

# Compile TypeScript -> JavaScript
RUN npm run build

EXPOSE 8080
CMD ["npm", "start"]