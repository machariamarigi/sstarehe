import { Api, StackContext, use } from "@serverless-stack/resources";
import { StorageStack } from "./StorageStack";

export function ApiStack({ stack }: StackContext) {
  const { table } = use(StorageStack);

  const api = new Api(stack, "Api", {
    defaults: {
      function: {
        permissions: [table],
        environment: {
          TABLE_NAME: table.tableName,
        },
      },
    },
    routes: {
      "POST /notes": "functions/create.main",
      "GET /notes/{id}": "functions/get.main",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  return {
    api,
  };
}
