.PHONY: build, test
REPORTER = spec

build:
	./node_modules/.bin/webpack

local-build:
	./node_modules/.bin/webpack -w --config webpack-local.config.js

test:
	./node_modules/.bin/webpack -w --config webpack-test.config.js
