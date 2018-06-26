# Golf Typescript Boilerplate

Microsoft provide a good template to quick starting the project in 5 minutes, so with this link can be navigate you to good repository [https://www.typescriptlang.org/samples/index.html](https://www.typescriptlang.org/samples/index.html)

However, not all repository is made to me, so I construct my boilerplate and get inspired from many boilerplate from microsoft and still a standard from them.

# VSCode Workspace Setting

Please take a look at `.vscode/settings.json` if you need to modify.

# Lint

To run TSLint you would run command as below.

`npm run tslint`

# Build

You might also be running some intermediate steps on your JavaScript, such as bundling or using another transpiler like **Babel**.

But this project use **tsc** original command to transpile **.ts** to **.js**

> This project using tsc command to build and build configuration will be in tsconfig.json

`npm run build`

and the result will be appeared in `./dist`

# Run

## Dev

`npm run serve`

## Watch

`npm run serve:dev`

# Test

`npm run test` <TBD>

# Coverage

<TBD>

# Declaration file

If you are a good programmer and you would like to create your own common library, you should define definition type file.

`yourtype.d.ts` in to `./src/types`

This guide is designed to teach you how to write a high-quality TypeScript Declaration File.

**Ref:** https://www.typescriptlang.org/docs/handbook/declaration-files/library-structures.html

# References

https://github.com/Microsoft/TypeScript-Node-Starter

https://github.com/Microsoft/TypeScriptSamples/
