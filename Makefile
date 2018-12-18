.PHONY: build, test
REPORTER = spec

build:
	npm run build

test:
	./node_modules/.bin/webpack -w --config webpack-test.config.js
