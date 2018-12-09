#!/bin/sh
cd app/client && npm run build && HTTPS=true node index.production.js