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

copyBuilds:
	mv bingo/build build/bingo
	mv switch/build build/switch

build: buildBingo buildSwitch copyBuilds

.PHONY: build