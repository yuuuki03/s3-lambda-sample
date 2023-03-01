# summary
QueryStringにObjectPathを設定してGETリクエストを送信するとS3の署名付きURLを返却します。

### 準備
S3バケットが１つ作成されるので、事前にObjectを格納して下さい（手動）
格納されたObjectのパスをクエリ文字列でAPIGatewayに渡すと署名付きURLが返却されます。

apigatewayの部分はSwagger +API Gateway 拡張の形式で記載

sam build
sam deploy --capabilities CAPABILITY_NAMED_IAM

## 参考
https://docs.aws.amazon.com/ja_jp/sdk-for-javascript/v3/developer-guide/javascript_s3_code_examples.html
https://zenn.dev/tabigaeru/articles/ca9b996268faf8
https://confrage.jp/aws-api-gateway%E3%81%8B%E3%82%89lambda%E3%82%92%E9%80%9A%E3%81%95%E3%81%9A%E3%81%ABs3%E3%81%B8%E9%80%A3%E6%90%BA%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95/