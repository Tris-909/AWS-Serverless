import handler from './libs/handler-lib';
import dynamoDB from './libs/dynamodb-lib';

export const main = handler(async (event, context) => {
    const params = {
        TableName: process.env.TableName,
        Key: {
            userId: "123",
            noteId: event.pathParameters.id,
        },
    };

    const result = await dynamoDB.get(params);

    if (!result.Item) {
        throw new Error("Can't find the Item");
    };

    return result.Item;
});