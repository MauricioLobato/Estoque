FROM node:18-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY package.json Home.html index.js ./
COPY public ./public
RUN npm install --production
CMD ["node", "index.js"] 