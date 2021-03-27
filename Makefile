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

buildFunc:
	cd functions/bin && \
	npm i

copyBuilds:
	mv bingo/build build/bingo
	mv switch/build build/switch

build: buildFunc buildBingo buildSwitch copyBuilds

.PHONY: build