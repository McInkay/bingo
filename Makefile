#!make
MAKEFLAGS += --silent

buildBingo:
	cd bingo && \
	yarn --frozen-lockfile --non-interactive && \
	yarn build

buildSwitch:
	cd switch && \
	yarn --frozen-lockfile --non-interactive && \
	yarn build

buildPokemonList:
	cd pokemon-list && \
	npm i && \
	npm run build

buildFunc:
	cd functions/bin && \
	npm i

copyBuilds:
	mv bingo/build build/bingo
	mv switch/build build/switch
	mv pokemon-list/build build/pokemon-list

build: buildFunc buildBingo buildSwitch buildPokemonList copyBuilds

.PHONY: build