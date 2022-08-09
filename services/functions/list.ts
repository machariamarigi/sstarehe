import dynamodb from "util/dynamodb";
import handler from "util/handler";

export const main = handler(async (): Promise<any> => {
  const params = {
    TableName: process.env.TABLE_NAME || "note",
    /**
     * `KeyConditionExpression` define the condition of the query
     * `userId =:userId` only returns items with matching `userId`
     * partition key
     */
    KeyConditionExpression: "userId = :userId",
    /**
     * `ExpressionAttributeValues` defines the value in the condition
     * `:userId`: defines `userId` to be the id of the author
     */
    ExpressionAttributeValues: {
      ":userId": "123",
    },
  };

  const result = await dynamodb.query(params);

  return result.Items;
});
