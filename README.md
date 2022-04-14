# 🌟 Rong-ui

# 使用

```javascript
npm i rongx-ui
```

## 📒 Catalog Introduction

```
├── docs                   Component documentation
│   ├── index.md           Home page
│   └── **.**              Site Directory Document
├── src                    Component home directory
│   ├── index.ts           Component registration
│   └── Foo                Component development
├── .eslintrc.js           eslint config
├── .fatherrc.ts           father config
├── .umirc.ts              dumi config
└── tsconfig.json          typescript config
```

The rest of the documents can be consulted by yourself.

## 🤖 Command introduction

| Name                    | Description               | Remarks                                                                                                            |
| ----------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `npm run start`         | Project begining          | Document usage [dumi](https://github.com/umijs/dumi), component development and documentation development together |
| `npm run test`          | Component test            | -                                                                                                                  |
| `npm run test:coverage` | Code coverage review      | -                                                                                                                  |
| `npm run prettier`      | Code prettier             | -                                                                                                                  |
| `npm run build`         | Component packaging       | Use [father](https://github.com/umijs/father)                                                                      |
| `npm run release`       | Component package release | -                                                                                                                  |
| `npm run docs:build`    | Document packaging        | -                                                                                                                  |
| `npm run docs:deploy`   | Document release          | The default is to use GitHub Pages                                                                                 |
| `npm run deploy`        | Document package release  | -                                                                                                                  |
