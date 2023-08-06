FROM node:16
WORKDIR /react-resume-template
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build
RUN yarn install -g next
EXPOSE 3000
CMD ["next", "start", "-p", "3000"]