#!/bin/sh
concurrently "cd app/client && npm start" "cd app/server && nodemon index"
