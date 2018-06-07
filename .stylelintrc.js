"use strict";

// Fabric rules extend https://github.com/stylelint/stylelint-config-standard
// All stylelint rules https://stylelint.io/user-guide/rules/
// Pull requests are welcome, cc: briazzi@lb.com and smorris@lb.com

module.exports = {
	"extends": "stylelint-config-standard",
	"plugins": [
		"stylelint-declaration-strict-value"
	],
    "rules": {
		"scale-unlimited/declaration-strict-value": [
			["/margin/", "/padding/"], {
			ignoreKeywords: {
				"/margin/": ["0", "initial", "inherit", "auto"],
				"/padding/": ["0", "initial", "inherit", "auto"]
			},
			"severity": "warning"
		}]
    }
};