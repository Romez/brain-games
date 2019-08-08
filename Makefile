install:
	npm install

start:
	npx babel-node src/bin/brain-games.js

publish:
	npm publish --dry-run

build:
	npm run build

lint:
	npx eslint .
