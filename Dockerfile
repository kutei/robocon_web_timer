FROM node:23

WORKDIR /workspace/frontend/app

COPY app/package.json app/package-lock.json /workspace/frontend/app/
RUN npm install
