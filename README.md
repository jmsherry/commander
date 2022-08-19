# Commander Demo

## Intro
This demo uses the [Commander](https://www.npmjs.com/package/commander), a JS package that let's you create a command line utility. 

It has a reasonable eco-system, including [auto-complete](https://www.npmjs.com/package/commander-completion) that you can program 

## Get Started

```shell
node decorate.js help
```

...will give you instructions.

## Example usage

```shell
node decorate.js decorate boris.txt boris --cocks
```

## Global installation
Because of:
```json
  "bin": {
    "humbler": "decorate.js"
  },
```
in package.json. If you `npm i -g .` when in the same folder as this `README.md` you can do `humbler decorate boris.txt boris --cocks` without the need to execute with node! If I put this to npm you could do that install too, or use npx!