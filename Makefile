.PHONY: build, test
REPORTER = spec

build:
	npm run build

local-build:
	./node_modules/.bin/webpack -w --config webpack-local.config.js

test:
	./node_modules/.bin/webpack -w --config webpack-test.config.js
