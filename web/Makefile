# Env's dev/prod

deploy:
	sh ./scripts/deploy.sh

build-and-deploy:
	make build
	make deploy

build:
	make build-static

build-standalone:
	echo "Building standalone version"
	npm run build:standalone

build-static:
	echo "Building static version"
	npm run build:static
