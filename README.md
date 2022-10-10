# poker-app

## Project setup
```
yarn
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### API clientの更新
- openapi.yamlを下記リポジトリより取得
  - https://github.com/satokiy/poker-api-nest
- dockerによって更新
```
docker-compose -f docker-openapi-generate.yml up -d
```

