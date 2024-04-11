# Use a lightweight web server image as the base image
FROM nginx:alpine

# Copy the static website files into the nginx document root
COPY ./src /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80
