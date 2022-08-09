### 前置准备

- eslint

```json
{
  "extends": ["next/core-web-vitals", "eslint:recommended"]
}
```

- stylelint(可以省略)
> yarn add stylelint stylelint-config-standard-scss -D

```json
{
  "extends": "stylelint-config-standard-scss"
}
```

> vscode 配置：{ "editor.codeActionsOnSave": { "source.fixAll.stylelint": true } }， 样式自动格式化

- prettier

```json
{
  "arrowParens": "always",
  "bracketSpacing": true,
  "endOfLine": "lf",
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "jsxBracketSameLine": false,
  "jsxSingleQuote": false,
  "printWidth": 80,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "useTabs": false,
  "vueIndentScriptAndStyle": false,
  "parser": "babel"
}
```


### mock数据
> yarn add mockjs -D


### 路由
> nextjs的路由，页面即路由，会根据pages目录下得文件夹及文件命名决定路由
- index路由
> home/index.ts ----> /home
- 嵌套路由
> about/privcy/contact.ts ----> /about/privcy/contact
- 动态路由
> user/[id].ts ----> /user/:id (/user/1234)
> blog/[...all].ts ---> /blog/* (/blog/abc/123)

### alias
> 在tsconfig.json中，配置baseUrl，如果要配置具体的alias，再配置paths

### tailwindcss