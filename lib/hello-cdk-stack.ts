import * as cdk from "@aws-cdk/core";
import * as s3 from "@aws-cdk/aws-s3";

export class HelloCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    // here bucket is a contruct, all constructs take 3 params, 3rd being optional
    new s3.Bucket(this, "MyFirstBucket", {
      versioned: true,
      publicReadAccess: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
  }
}
