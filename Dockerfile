FROM nginx:1.23.3

COPY ./dist/angular-example-app /usr/share/nginx/html
#COPY /usr/src/app/dist/angular-example-app /etc/nginx/html


COPY nginx.conf /etc/nginx/nginx.conf

 EXPOSE 80
 ENTRYPOINT ["nginx", "-g", "daemon off;"]
