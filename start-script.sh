#!/bin/bash

(cd ./server && npm run start) &
(cd ../client && npm run start) &

# Wait for either process to exit and send status
wait -n
exit $?