FROM node:12

WORKDIR /app

# Install Angular CLI compatible with Angular 7
RUN npm install -g @angular/cli@7

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 4200