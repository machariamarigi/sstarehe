import { StackContext, Table } from "@serverless-stack/resources";

export function StorageStack({ stack, app }: StackContext) {
    const table = new Table(stack, "Notes", {
        fields: {
            userId: "string",
            noteId: "string"
        },
        primaryIndex: {
            partitionKey: "userId",
            sortKey: "noteId"
        }
    })

    return {
        table
    }
}
