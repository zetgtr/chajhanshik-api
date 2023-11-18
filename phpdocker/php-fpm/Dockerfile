FROM phpdockerio/php:8.1-fpm
WORKDIR "/app"
ENV TERM xterm

RUN apt-get update; \
    apt-get -y --no-install-recommends install \
        git \
        php8.1-imagick \
        php8.1-gd \
        php8.1-mysql \
        php8.1-redis \
        php8.1-xdebug; \
    apt-get clean; \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*

RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs

