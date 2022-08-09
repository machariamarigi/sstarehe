import * as uuid from "uuid";
import { APIGatewayProxyEvent } from "aws-lambda";
import handler from "../util/handler";
import dynamodb from "../util/dynamodb";

export const main = handler(async (event: APIGatewayProxyEvent) => {
  const data = JSON.parse(event.body || "{}");

  const params = {
    TableName: process.env.TABLE_NAME || "note",
    Item: {
      userId: "123",
      noteId: uuid.v1(),
      content: data.content,
      attachment: data.attachment,
      createdAt: Date.now(),
    },
  };

  await dynamodb.put(params);
});
