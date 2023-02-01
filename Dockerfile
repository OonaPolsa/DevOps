FROM nginx:1.23.3
  COPY . /usr/share/nginx/html
#COPY --from=build /usr/local/app/dist/sample-angular-app /usr/share/nginx/html
# COPY --from=build /usr/src/ng-app/dist/pokemon-app/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

 EXPOSE 80
 ENTRYPOINT ["nginx", "-g", "daemon off;"]
