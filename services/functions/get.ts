import { APIGatewayProxyEvent } from "aws-lambda";
import dynamodb from "util/dynamodb";
import handler from "util/handler";

export const main = handler(async (event: APIGatewayProxyEvent): Promise<any> => {
  const params = {
    TableName: process.env.TABLE_NAME || "note",
    Key: {
      userId: "123",
      noteId: event.pathParameters && event.pathParameters.id,
    },
  };

  const result = await dynamodb.get(params);

  if (!result.Item) {
    throw new Error("Item Not Found");
  }

  return result.Item;
});
