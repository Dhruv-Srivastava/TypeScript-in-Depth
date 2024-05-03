### Introduction

> Functions are one of the most important features of programming, so learning how to annotate them properly is key to good programming.

### Key Points

1. The key idea is to annotate both paramaters and return type.

```js
function demo(param1:type, param2:type, ...): type (of return){}
```

2. We can create type alias of a function using:

```js
type FuncType = (param1:type, param2:type, ...) => type (of return)
```