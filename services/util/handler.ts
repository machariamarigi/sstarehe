import { APIGatewayProxyEvent } from "aws-lambda";

export default function handler(lambda: {
  (event: APIGatewayProxyEvent): Promise<void>;
  (arg0: APIGatewayProxyEvent): any;
}) {
  return async function (event: APIGatewayProxyEvent) {
    let body, statusCode;

    try {
      body = await lambda(event);
      statusCode = 200;
    } catch (err: any) {
      console.error(err);
      body = { error: err.message };
      statusCode = 500;
    }

    return {
      statusCode,
      body: JSON.stringify(body),
    };
  };
}
