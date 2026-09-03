import type { SchemaDefinition } from "convex/server";
import type { BetterAuthDBSchema } from "better-auth/db";
import type { TableNames } from "../component/_generated/dataModel.js";
import type { BetterAuthOptions } from "better-auth/minimal";
export declare const assertRequiredFields: (betterAuthSchema: BetterAuthDBSchema, model: string, data: Record<string, unknown>) => void;
export declare const createApi: <Schema extends SchemaDefinition<any, any>>(schema: Schema, createAuthOptions: (ctx: any) => BetterAuthOptions) => {
    create: import("convex/server").RegisteredMutation<"public", {
        select?: string[] | undefined;
        onCreateHandle?: string | undefined;
        input: {
            data: {
                [x: string]: any;
                [x: number]: any;
                [x: symbol]: any;
            };
            model: string;
        };
    }, Promise<any>>;
    findOne: import("convex/server").RegisteredQuery<"public", {
        join?: any;
        select?: string[] | undefined;
        where?: {
            mode?: "sensitive" | "insensitive" | undefined;
            operator?: "eq" | "ne" | "lt" | "lte" | "gt" | "gte" | "in" | "not_in" | "contains" | "starts_with" | "ends_with" | undefined;
            connector?: "AND" | "OR" | undefined;
            value: string | number | boolean | string[] | number[] | null;
            field: string;
        }[] | undefined;
        model: string;
    }, Promise<import("convex/server").GenericDocument | null>>;
    findMany: import("convex/server").RegisteredQuery<"public", {
        join?: any;
        limit?: number | undefined;
        select?: string[] | undefined;
        where?: {
            mode?: "sensitive" | "insensitive" | undefined;
            operator?: "eq" | "ne" | "lt" | "lte" | "gt" | "gte" | "in" | "not_in" | "contains" | "starts_with" | "ends_with" | undefined;
            connector?: "AND" | "OR" | undefined;
            value: string | number | boolean | string[] | number[] | null;
            field: string;
        }[] | undefined;
        sortBy?: {
            field: string;
            direction: "asc" | "desc";
        } | undefined;
        offset?: number | undefined;
        model: string;
        paginationOpts: {
            id?: number;
            endCursor?: string | null;
            maximumRowsRead?: number;
            maximumBytesRead?: number;
            numItems: number;
            cursor: string | null;
        };
    }, Promise<import("convex/server").PaginationResult<import("convex/server").GenericDocument>>>;
    updateOne: import("convex/server").RegisteredMutation<"public", {
        onUpdateHandle?: string | undefined;
        input: {
            where?: {
                mode?: "sensitive" | "insensitive" | undefined;
                operator?: "eq" | "ne" | "lt" | "lte" | "gt" | "gte" | "in" | "not_in" | "contains" | "starts_with" | "ends_with" | undefined;
                connector?: "AND" | "OR" | undefined;
                value: string | number | boolean | string[] | number[] | null;
                field: string;
            }[] | undefined;
            update: {
                [x: string]: unknown;
                [x: number]: unknown;
                [x: symbol]: unknown;
            };
            model: TableNames;
        };
    }, Promise<import("convex/server").GenericDocument | null>>;
    incrementOne: import("convex/server").RegisteredMutation<"public", {
        onUpdateHandle?: string | undefined;
        input: {
            set?: {
                [x: string]: unknown;
                [x: number]: unknown;
                [x: symbol]: unknown;
            } | undefined;
            model: TableNames;
            where: {
                mode?: "sensitive" | "insensitive" | undefined;
                operator?: "eq" | "ne" | "lt" | "lte" | "gt" | "gte" | "in" | "not_in" | "contains" | "starts_with" | "ends_with" | undefined;
                connector?: "AND" | "OR" | undefined;
                value: string | number | boolean | string[] | number[] | null;
                field: string;
            }[];
            increment: Record<string, number>;
        };
    }, Promise<import("convex/server").GenericDocument | null>>;
    updateMany: import("convex/server").RegisteredMutation<"public", {
        onUpdateHandle?: string | undefined;
        input: {
            where?: {
                mode?: "sensitive" | "insensitive" | undefined;
                operator?: "eq" | "ne" | "lt" | "lte" | "gt" | "gte" | "in" | "not_in" | "contains" | "starts_with" | "ends_with" | undefined;
                connector?: "AND" | "OR" | undefined;
                value: string | number | boolean | string[] | number[] | null;
                field: string;
            }[] | undefined;
            update: {
                [x: string]: unknown;
                [x: number]: unknown;
                [x: symbol]: unknown;
            };
            model: TableNames;
        };
        paginationOpts: {
            id?: number;
            endCursor?: string | null;
            maximumRowsRead?: number;
            maximumBytesRead?: number;
            numItems: number;
            cursor: string | null;
        };
    }, Promise<{
        count: number;
        ids: import("convex/values").Value[];
        isDone: boolean;
        continueCursor: import("convex/server").Cursor;
        splitCursor?: import("convex/server").Cursor | null;
        pageStatus?: "SplitRecommended" | "SplitRequired" | null;
    }>>;
    deleteOne: import("convex/server").RegisteredMutation<"public", {
        onDeleteHandle?: string | undefined;
        input: {
            where?: {
                mode?: "sensitive" | "insensitive" | undefined;
                operator?: "eq" | "ne" | "lt" | "lte" | "gt" | "gte" | "in" | "not_in" | "contains" | "starts_with" | "ends_with" | undefined;
                connector?: "AND" | "OR" | undefined;
                value: string | number | boolean | string[] | number[] | null;
                field: string;
            }[] | undefined;
            model: TableNames;
        };
    }, Promise<import("convex/server").GenericDocument | undefined>>;
    deleteMany: import("convex/server").RegisteredMutation<"public", {
        onDeleteHandle?: string | undefined;
        input: {
            where?: {
                mode?: "sensitive" | "insensitive" | undefined;
                operator?: "eq" | "ne" | "lt" | "lte" | "gt" | "gte" | "in" | "not_in" | "contains" | "starts_with" | "ends_with" | undefined;
                connector?: "AND" | "OR" | undefined;
                value: string | number | boolean | string[] | number[] | null;
                field: string;
            }[] | undefined;
            model: TableNames;
        };
        paginationOpts: {
            id?: number;
            endCursor?: string | null;
            maximumRowsRead?: number;
            maximumBytesRead?: number;
            numItems: number;
            cursor: string | null;
        };
    }, Promise<{
        count: number;
        ids: import("convex/values").Value[];
        isDone: boolean;
        continueCursor: import("convex/server").Cursor;
        splitCursor?: import("convex/server").Cursor | null;
        pageStatus?: "SplitRecommended" | "SplitRequired" | null;
    }>>;
};
//# sourceMappingURL=create-api.d.ts.map