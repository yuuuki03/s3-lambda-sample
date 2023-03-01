# summary
QueryStringにObjectPathを設定してGETリクエストを送信するとS3の署名付きURLを返却します。

### 準備
S3バケットが１つ作成されるので、事前にObjectを格納して下さい（手動）
格納されたObjectのパスをクエリ文字列でAPIGatewayに渡すと署名付きURLが返却されます。

リクエストサンプル
https://wsu1vvvdpj.execute-api.ap-northeast-1.amazonaws.com/Prod/req/str?pathToObj=template.yaml

## 参考
https://docs.aws.amazon.com/ja_jp/sdk-for-javascript/v3/developer-guide/javascript_s3_code_examples.html