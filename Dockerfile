FROM node:16
WORKDIR /react-resume-template
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN npm install -g next
EXPOSE 3000
CMD ["next", "start", "-p", "3000"]