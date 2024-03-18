install:
	npm ci

brain-games:
	node /Users/alesya/qa-auto-engineer-javascript-project-44/bin/brain-games.js

.PHONY: make brain-games

publish:
	npm publish --dry-run

lint:
    npx eslint .
