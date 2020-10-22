
# get Makefile directory name: http://stackoverflow.com/a/5982798/376773
THIS_MAKEFILE_PATH:=$(word $(words $(MAKEFILE_LIST)),$(MAKEFILE_LIST))
THIS_DIR:=$(shell cd $(dir $(THIS_MAKEFILE_PATH));pwd)

# BIN directory
BIN := $(THIS_DIR)/node_modules/.bin

# applications
NODE ?= node
MOCHA ?= $(NODE) $(BIN)/mocha
ZUUL ?= $(NODE) $(BIN)/zuul

test:
	@if [ "x$(BROWSER_NAME)" = "x" ]; then \
		$(MAKE) test-node; \
		else \
		$(MAKE) test-zuul; \
	fi

test-node:
	@$(MOCHA) test/*.js

test-zuul:
	@$(ZUUL) \
		--ui mocha-bdd \
		--browser-name $(BROWSER_NAME) \
		--browser-version $(BROWSER_VERSION) \
		--browser-platform "$(BROWSER_PLATFORM)" \
		test/*.js; \
	fi

.PHONY: test
