This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Check

- [x] リリースビルド
- [x] Router
- [x] ページ間、コンポーネント間の値渡し
- [ ] ESLint
- [x] React hook
- [x] Image
- [x] マテリアルデザイン
- [x] ボタン
- [x] スイッチ
- [x] フォーム、テキストフィールド
- [x] アプリバー
- [x] ナビゲーションドロワー
- [x] カード
- [x] 多言語化
- [x] ダークモード
- [x] emotion
- [x] injection
- [x] CSSでゴニョゴニョ
- [x] Redux
- [x] Redux logger
- [x] Firebase連携
- [x] listener周り
- [x] Neumorphism
- [ ] カルーセル
- [ ] グラフ
- [ ] カレンダー
- [x] test


https://react-validation-86b59.web.app/

## How to use

```sh
git clone https://github.com/hukusuke1007/react-validation.git
cd react-validation
yarn


# run
yarn start
```

```sh
# test
yarn jest
```

## ORETEKI Procedure

俺以外見なくて良い。

```sh
npx create-react-app app-name --typescript
cd app-name
yarn eject
```

To modify webpack.config.js to add ts-loader.

```js
    module: {
      strictExportPresence: true,
      rules: [
        // ...
        {
          // add
          oneOf: [
            {
              test: /\.(js|mjs|jsx|ts|tsx)$/,
              include: paths.appSrc,
              exclude: /node_modules/,
              use: [{
                loader: 'ts-loader'
              }]
            },
            // ....
```

### Install library

```sh
# Design
# https://material-ui.com/ja/getting-started/installation/
yarn add @material-ui/core @material-ui/icons @emotion/core emotion/styled 

# Localized
yarn add i18next react-i18next

# DI
yarn add tsyringe reflect-metadata
yarn add ts-loader --dev

# Firebase
yarn add firebase @1amageek/ballcap"
```

### dotenv

```sh
cp dotenvsample .development.env
cp dotenvsample .production.env
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es2018",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext",
      "es6",
      "es2016"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": false,
    "noEmit": false,
    "jsx": "react",
    "types": ["jest", "reflect-metadata"],
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
  },
  "include": [
    "src"
  ]
}

```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
