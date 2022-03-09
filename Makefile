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
	cs pokemon-list && \
	npm i && \
	npm run build

buildFunc:
	cd functions/bin && \
	npm i

copyBuilds:
	mv bingo/build build/bingo
	mv switch/build build/switch
	mv buildPokemonList/build build/buildPokemonList

build: buildFunc buildBingo buildSwitch buildPokemonList copyBuilds

.PHONY: build