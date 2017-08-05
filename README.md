# JavaScript in TypeScript Demo

This demo's using plain JS in TS and emitting a definition file that can be used
in other TS projects. JS is documented using JSDoc which TypeScript can parse to
provide autocompletion and static type assistance.

## Usage

* Run `yarn install`
* Run `yarn run build`
* Output should be in `./dist`

## Issues

Currently blocked on https://github.com/Microsoft/TypeScript/issues/7546, which
prevents mixing `--declaration` and `--allowJs`.
