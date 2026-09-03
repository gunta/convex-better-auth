import type { createTestSuite } from "@better-auth/test-utils/adapter";
type Helpers = Parameters<Parameters<typeof createTestSuite>[2]>[0];
type DebugTools = {
    showDB?: () => Promise<void>;
};
export declare const getNormalTestSuiteTests: (helpers: Helpers, debugTools?: DebugTools) => {
    "create - should create a model": () => Promise<void>;
    "findOne - should find model with date field": () => Promise<void>;
    "findOne - should work with both one-to-one and one-to-many joins": () => Promise<void>;
    "findMany - should find many models with date fields": () => Promise<void>;
    "findMany - should find many models with gt operator": () => Promise<void>;
    "findMany - should find many models with gte operator": () => Promise<void>;
    "create - should always return an id": () => Promise<void>;
    "create - should enforce the issuer-scoped account identity key": ({ skip }: {
        skip: (note?: string | undefined) => never;
    }) => Promise<void>;
    "create - should use generateId if provided": () => Promise<void>;
    "create - should return null for nullable foreign keys": {
        migrateBetterAuth: {
            plugins: {
                id: "nullable-test";
                schema: {
                    testModel: {
                        fields: {
                            nullableReference: {
                                type: "string";
                                references: {
                                    field: string;
                                    model: string;
                                };
                                required: false;
                            };
                        };
                    };
                };
            }[];
        };
        test: () => Promise<void>;
    };
    "create - should apply default values to fields": () => Promise<void>;
    "findOne - should find a model": () => Promise<void>;
    "findOne - should not apply defaultValue if value not found": () => Promise<void>;
    "findOne - should find a model using a reference field": () => Promise<void>;
    "findOne - should not throw on record not found": () => Promise<void>;
    "findOne - should find a model without id": () => Promise<void>;
    "findOne - should find a model with join": () => Promise<void>;
    "findOne - should find a model with modified field name": () => Promise<void>;
    "findOne - should find a model with modified model name": () => Promise<void>;
    "findOne - should find a model with additional fields": () => Promise<void>;
    "findOne - should select fields": () => Promise<void>;
    "findOne - should select fields with one-to-many join": () => Promise<void>;
    "findOne - should select fields with one-to-one join": () => Promise<void>;
    "findOne - should select fields with multiple joins": () => Promise<void>;
    "findOne - should perform backwards joins": () => Promise<void>;
    "findOne - should return an object for one-to-one joins": () => Promise<void>;
    "findOne - should return an array for one-to-many joins": () => Promise<void>;
    "findOne - should return null for failed base model lookup that has joins": () => Promise<void>;
    "findOne - should join a model with modified field name": () => Promise<void>;
    "findMany - should find many models": () => Promise<void>;
    "findMany - should find many models with join": () => Promise<void>;
    "findMany - should find many with join and limit": () => Promise<void>;
    "findMany - should select fields": () => Promise<void>;
    "findMany - should select fields with one-to-many join": () => Promise<void>;
    "findMany - should select fields with one-to-one join": () => Promise<void>;
    "findMany - should select fields with multiple joins": () => Promise<void>;
    "findMany - should find many with join and offset": () => Promise<void>;
    "findMany - should find many with join and sortBy": () => Promise<void>;
    "findMany - should find many with join and where clause": () => Promise<void>;
    "findMany - should find many with join, where, limit, and offset": () => Promise<void>;
    "findMany - should find many with one-to-one join": () => Promise<void>;
    "findMany - should find many with both one-to-one and one-to-many joins": () => Promise<void>;
    "findMany - should return an empty array when no models are found": () => Promise<void>;
    "findMany - should return empty array when base records don't exist with joins": () => Promise<void>;
    "findMany - should find many models with starts_with operator": () => Promise<void>;
    "findMany - starts_with should not interpret regex patterns": () => Promise<void>;
    "findMany - ends_with should not interpret regex patterns": () => Promise<void>;
    "findMany - contains should not interpret regex patterns": () => Promise<void>;
    "findMany - should find many models with ends_with operator": () => Promise<void>;
    "findMany - should find many models with contains operator": () => Promise<void>;
    "findMany - should handle multiple where conditions with different operators": () => Promise<void>;
    "findMany - should find many models with contains operator (using symbol)": () => Promise<void>;
    "findMany - should find many models with eq operator": () => Promise<void>;
    "findMany - should find many models with ne operator": () => Promise<void>;
    "findMany - should find many models with lte operator": () => Promise<void>;
    "findMany - should find many models with lt operator": () => Promise<void>;
    "findMany - should find many models with in operator": () => Promise<void>;
    "findMany - should find many models with not_in operator": () => Promise<void>;
    "findMany - should find many models with sortBy": () => Promise<void>;
    "findMany - should find many models with limit": () => Promise<void>;
    "findMany - should find many models with offset": () => Promise<void>;
    "findMany - should find many models with limit and offset": () => Promise<void>;
    "findMany - should find many models with sortBy and offset": () => Promise<void>;
    "findMany - should find many models with sortBy and limit": () => Promise<void>;
    "findMany - should find many models with sortBy and limit and offset": () => Promise<void>;
    "findMany - should find many models with sortBy and limit and offset and where": () => Promise<void>;
    "update - should update a model": () => Promise<void>;
    "update - should return null when where is empty": () => Promise<void>;
    "updateMany - should update all models when where is empty": () => Promise<void>;
    "updateMany - should update many models with a specific where": () => Promise<void>;
    "updateMany - should update many models with a multiple where": () => Promise<void>;
    "incrementOne - guarded set transition returns the row on a matching guard and null on a guard miss": () => Promise<void>;
    "delete - should delete a model": () => Promise<void>;
    "delete - should not throw on record not found": () => Promise<void>;
    "delete - should delete by non-unique field": () => Promise<void>;
    "deleteMany - should delete many models": () => Promise<void>;
    "deleteMany - starts_with should not interpret regex patterns": () => Promise<void>;
    "deleteMany - ends_with should not interpret regex patterns": () => Promise<void>;
    "deleteMany - contains should not interpret regex patterns": () => Promise<void>;
    "deleteMany - should delete many models with numeric values": () => Promise<void>;
    "deleteMany - should delete many models with boolean values": () => Promise<void>;
    "count - should count many models": () => Promise<void>;
    "count - should return 0 with no rows to count": () => Promise<void>;
    "count - should count with where clause": () => Promise<void>;
    "update - should correctly return record when updating a field used in where clause": () => Promise<void>;
    "update - should handle updating multiple fields including where clause field": () => Promise<void>;
    "update - should work when updated field is not in where clause": () => Promise<void>;
    "findOne - backwards join should only return single record not array": () => Promise<void>;
    "findMany - backwards join should only return single record not array": () => Promise<void>;
    "findOne - backwards join with modified field name (session base, users-table join)": () => Promise<void>;
    "findOne - multiple joins should return result even when some joined tables have no matching rows": () => Promise<void>;
    "findOne - should be able to perform a limited join": () => Promise<void>;
    "findOne - should be able to perform a complex limited join": () => Promise<void>;
    "findMany - should be able to perform a limited join": () => Promise<void>;
    "findMany - should be able to perform a complex limited join": () => Promise<void>;
    "findOne - should return null for one-to-one join when joined record doesn't exist": () => Promise<void>;
    "findMany - should return null for one-to-one join when joined records don't exist": () => Promise<void>;
    "findMany - should return empty array for one-to-many join when joined records don't exist": () => Promise<void>;
    "findMany - should handle mixed joins correctly when some are missing": () => Promise<void>;
    "create - should support arrays": {
        migrateBetterAuth: {
            plugins: {
                id: "string-arrays-test";
                schema: {
                    testModel: {
                        fields: {
                            stringArray: {
                                type: "string[]";
                                required: true;
                            };
                            numberArray: {
                                type: "number[]";
                                required: true;
                            };
                        };
                    };
                };
            }[];
        };
        test: () => Promise<void>;
    };
    "create - should support json": {
        migrateBetterAuth: {
            plugins: {
                id: "json-test";
                schema: {
                    testModel: {
                        fields: {
                            json: {
                                type: "json";
                                required: true;
                            };
                        };
                    };
                };
            }[];
        };
        test: () => Promise<void>;
    };
    "update - should support multiple where conditions under AND connector with unique field": () => Promise<void>;
    "findMany - eq operator with null value (single condition) should use IS NULL": () => Promise<void>;
    "findMany - eq and ne operators with null value in AND group should use IS NULL / IS NOT NULL": () => Promise<void>;
    "findMany - eq and ne operators with null value in OR group should use IS NULL / IS NOT NULL": () => Promise<void>;
    "update - should return updated record when where condition uses null value": () => Promise<void>;
    "update - should return null when a multi-predicate where matches no row": () => Promise<void>;
};
export {};
//# sourceMappingURL=basic.d.ts.map