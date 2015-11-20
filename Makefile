.PHONY: clean build install all clean-npm show

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
	"node_modules/.bin/metalsmith"

clean:
	ls | grep -v -P "Makefile|README|src|show" | xargs rm -r -f
