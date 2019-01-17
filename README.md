# fabricashape
A javascript tool to draw shapes in 2D with fabric.js as main library

## Install

### Install cairo
[Cairo](https://www.cairographics.org/download/) is needed by fabric.js to be run with node, see details [here](https://www.npmjs.com/package/fabric).

### Install node
### Install pkg-config
### Install all packages
```sh
$ npm install
```

## Build
The project belongs on webpack to generate a unique and compact javascript file. To build it:
```sh
# This will make the main.js file in the /dist folder
$ make build
```

### What happens behind the hoods
![build sequence uml](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/suipotryot/fabricashape/feat/addScaleShape/docs/build/build.uml&version=1)

## Tests
To run unit tests:
```sh
$ make test
```

### What happens behind the hoods
![build sequence uml](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/suipotryot/fabricashape/feat/addScaleShape/docs/tests/tests.uml&version=1)
