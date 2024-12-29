#!/bin/sh
export NODE_OPTIONS=--max_old_space_size=4048
NITRO_PRESET=firebase npm run build
npx firebase deploy --only functions:server,hosting