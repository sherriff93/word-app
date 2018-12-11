#!/bin/sh
cd app/client && npm run build && cd ../server && nodemon index.production.js
