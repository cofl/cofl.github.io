.PHONY: clean build install all clean-npm show build-watched

all: build

install: clean clean-npm
	cd src;\
	npm install

show:
	"src/node_modules/.bin/static" -p 80

clean-npm:
	cd src;\
	rm -r -f node_modules;\
	rm -f node-debug.log

build: clean
	cd src;\
	"node_modules/.bin/metalsmith" -c build-production.json

clean:
	ls | grep -v -P "Makefile|README|src" | xargs rm -r -f

build-watched: clean
	cd src;\
	"node_modules/.bin/metalsmith" -c build-development.json
