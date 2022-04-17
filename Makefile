#!make
MAKEFLAGS += --silent

buildBingo:
	cd bingo && \
	yarn --frozen-lockfile --non-interactive && \
	yarn build

buildFunctions:
	cd functions/bin && \
	npm i

buildHungerGames:
	cd hunger-games && \
	npm i && \
	npm run build

buildPokemonList:
	cd pokemon-list && \
	npm i && \
	npm run build

buildSwitch:
	cd switch && \
	yarn --frozen-lockfile --non-interactive && \
	yarn build

copyBuilds:
	mv bingo/build build/bingo
	mv hunger-games/build build/hunger-games
	mv pokemon-list/build build/pokemon-list
	mv switch/build build/switch

build: buildBingo buildFunctions buildHungerGames buildPokemonList buildSwitch copyBuilds

.PHONY: build