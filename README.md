# Razzle TypeScript Example

Callback:
node -p "var fn = require('./build/server'); fn((_,x)=>console.log(x), '/');"


## How to use

<!-- START install generated instructions please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN yarn update-examples TO UPDATE -->
This is the three release documentation for this example

Create and start the example:

```bash
npx create-razzle-app@three --example with-typescript with-typescript

cd with-typescript
yarn start
```
<!-- END install generated instructions please keep comment here to allow auto update -->

## Idea behind the example
This is an of how to use Razzle with [TypeScript](https://github.com/Microsoft/TypeScript).

Basic razzle will uses Babel to transform TypeScript to plain JavaScript ( with babel-loader ), and uses TypeScript for type-checking.

Razzle knows how to resolve `.ts` and `.tsx` files out of the box.
