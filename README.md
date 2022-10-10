# poker-app

### Description
- 手札を引いて、Pokerの役判定をするアプリケーションです。
- このリポジトリではフロントエンドのみを実装し、バックエンドは別途NestjsでAPIを作成しています。
- NestjsのOpenAPIをもとにOpenAPI GeneratorでAPIクライアントを生成し、フロントエンドから呼び出しています。
- ※2022/10時点で、まだストレートとフラッシュしか判定できません。追って対応します。

### アプリはこちら
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
yarn build-${env}
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

