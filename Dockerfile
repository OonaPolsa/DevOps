FROM nginx:1.23.3


#WORKDIR /app
#COPY . .
COPY ./dist/angular-example-app /usr/share/nginx/html

#RUN yarn install --production


COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]

