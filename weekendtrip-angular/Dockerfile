# # Stage 1: Compile and Build angular codebase

# # Use official node image as the base image
# FROM node:alpine as builder
# RUN npm cache clean --force
# WORKDIR /ang24
# COPY . .
# RUN npm cache clean --force
# RUN npm i --force
# ENV NODE_OPTIONS="--openssl-legacy-provider"

# RUN npm run build


# # stage 2
# FROM nginx:alpine
# WORKDIR /usr/share/nginx/html

# RUN rm -rf ./*

# COPY --from=builder /ang24/dist/ANGULAR .

# ENTRYPOINT ["nginx", "-g", "daemon off;"]






# # Stage 1: Build the Angular application
# FROM node:14-alpine AS build

# RUN npm cache clean --force

# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install project dependencies
# RUN npm install

# # Copy the entire project directory
# COPY . .

# # Build the Angular application
# RUN npm run build

# # Stage 2: Serve the built Angular application using a lightweight web server
# FROM nginx:alpine

# # Copy the built Angular application files to the NGINX web server
# COPY --from=build /app/dist/weekendtrip-angular /usr/share/nginx/html

# # Expose the NGINX port
# EXPOSE 80

# # Start NGINX web server
# CMD ["nginx", "-g", "daemon off;"]




FROM node:lts-alpine as builder
RUN npm cache clean --force
WORKDIR /ang24
COPY . .
RUN npm cache clean --force
RUN npm i --force
# ENV NODE_OPTIONS="--openssl-legacy-provider"

RUN npm run build --prod


# stage 2
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /ang24/dist/week-end-trips .

ENTRYPOINT ["nginx", "-g", "daemon off;"]