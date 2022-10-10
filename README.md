# poker-app

### Description
手札を引いて、Pokerの役判定をするアプリケーションです。  
Vue3の学習用に作成。  

### サイトはこちら
- https://benevolent-tartufo-457c6c.netlify.app/

### 開発
- フレームワーク
  - Vue3/typescript, Pinia
- package manager
  - yarn
- linter
  - prettier
- デプロイ
  - Netlify


### 開発関連コマンド
```
# boot
yarn serve
```
```
# build to /dist
yarn build
```

### API clientの更新
OpenAPI Generatorを用いてAPIクライアントを生成しています。  
1.  openapi.yamlを下記リポジトリより取得
-  https://github.com/satokiy/poker-api-nest
2. docker-composeにより更新
```
docker-compose -f docker-openapi-generate.yml up -d
```
3. client/src/api/generated 配下にAPIクライアントが生成されるので、それを利用

