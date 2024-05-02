### Introduction

> TypeScript is a superset of JavaScript which focuses on annotating type of a **variable**. This helps in reducing unintentional bugs during production and even faster development.

The key thing to note down over here is TypeScript provides types to a variable which JavaScript lacks.

### Key Points

1. Type Inference refers to TypeScript automatically infering/understanding the type during the initialization of a varaible.

```js
let points = 10;
points = "ten"; // this line will throw an error.
```

    In the above example, TS automatically attaches the 'number' type to the 'points' variable.

2. `any` type quite literally means that we are trying to disable to the type system provided.

3. `unknown` type says, that your type could be anything but it still is unknown. `unknown` is the set of all possible values.

4. `never` type is the set of all not possible values.
