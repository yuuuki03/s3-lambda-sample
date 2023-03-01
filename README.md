# summary
- QueryStringにObjectPathとS3バケットを設定してPOSTリクエストを送信するとS3の署名付きURLを返却します。
- PUTリクエストでテキストデータをS3に格納します。
### 準備

sam build
sam deploy --capabilities CAPABILITY_NAMED_IAM

## 参考
- https://docs.aws.amazon.com/ja_jp/sdk-for-javascript/v3/developer-guide/javascript_s3_code_examples.html
- https://zenn.dev/tabigaeru/articles/ca9b996268faf8
- https://confrage.jp/aws-api-gateway%E3%81%8B%E3%82%89lambda%E3%82%92%E9%80%9A%E3%81%95%E3%81%9A%E3%81%ABs3%E3%81%B8%E9%80%A3%E6%90%BA%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95/