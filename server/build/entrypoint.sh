#!/bin/bash

if [ "${1:0:1}" = '-' ]; then
    set -- TAKWEN DO"$@"
fi

exec "$@"
