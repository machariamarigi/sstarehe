import { APIGatewayProxyEvent } from "aws-lambda";
import handler from "util/handler";
import dynamodb from "util/dynamodb";

export const main = handler(
  async (event: APIGatewayProxyEvent): Promise<any> => {
    const params = {
      TableName: process.env.TABLE_NAME || "note",
      Key: {
        userId: "123",
        noteId: event.pathParameters && event.pathParameters.id,
      },
    };

    await dynamodb.delete(params);

    return { status: true };
  }
);
