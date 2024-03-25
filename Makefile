install:
	npm ci

brain-games:
	node /Users/alesya/qa-auto-engineer-javascript-project-44/bin/brain-games.js

.PHONY: make brain-games

publish:
	npm publish --dry-run

lint:
	npx eslint .

brain-even:
	node /Users/alesya/qa-auto-engineer-javascript-project-44/bin/brain-even.js

brain-calc:
	node /Users/alesya/qa-auto-engineer-javascript-project-44/bin/brain-calc.js

brain-gcd:
	node /Users/alesya/qa-auto-engineer-javascript-project-44/bin/brain-gcd.js
