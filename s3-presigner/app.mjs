import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const lambdaHandler = async (event, context) => {
    //const bucketName = process.env['S3_BUCKET']
    //const s3ObjectKey= process.env['S3_KEY'];
    const bucket = event.queryStringParameters.s3Bucket;
    const path = event.queryStringParameters.pathToObj;
    console.log('queryStringParameters: ', path, bucket);

    const command = new GetObjectCommand({
        //Bucket: bucketName,
        //Key: s3ObjectKey
        Bucket: bucket,
        Key: path
    });
    const signedUrl = await getSignedUrl(new S3Client(), command, {
        expiresIn: 3600,
    });
    console.log(signedUrl);
    return {
        statusCode: 200,
        body: JSON.stringify(signedUrl)
    };
};
