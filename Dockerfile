FROM httpd:latest

COPY ./build/ /usr/local/apache2/htdocs/

COPY ./httpd-runner.sh /usr/local/bin/

ENV REACT_APP_API_HOST 127.0.0.1

ENV REACT_APP_API_PORT 1690

CMD [ "httpd-runner.sh" ]
