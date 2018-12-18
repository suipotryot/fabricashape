.PHONY: build, test
REPORTER = spec

build:
	npm run build

test:
	@NODE_ENV=test ./node_modules/mocha-webpack/bin/mocha-webpack test
