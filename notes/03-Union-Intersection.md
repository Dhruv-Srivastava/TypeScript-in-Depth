### Introduction

> The `union` and `intersection` in TypeScript is taken `type theory` and not set theory. They form the basis to merge existing types and form a new type.

### Key Points

1. `union` type is represented using a  `|`.

```js
type union = typeA | type B
```

2. The mental model for union should be that union type is not an `exlusive or`, which means that the particular union type doesn't mean `this or that`. As per above example, the union type could mean either `type A` or `type B` or `both`.

!["The Union Type"](./assets/union.png)