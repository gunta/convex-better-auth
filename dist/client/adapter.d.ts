import type { DBAdapterDebugLogOption } from "better-auth/adapters";
import type { FunctionReference, GenericActionCtx, GenericDataModel, SchemaDefinition } from "convex/server";
import type defaultSchema from "../component/schema.js";
import type { AuthFunctions, GenericCtx, Triggers } from "./index.js";
export declare const convexAdapter: <DataModel extends GenericDataModel, Ctx extends GenericCtx<DataModel> = GenericActionCtx<DataModel>, Schema extends SchemaDefinition<any, any> = typeof defaultSchema>(ctx: Ctx, api: {
    adapter: {
        create: FunctionReference<"mutation", "internal">;
        findOne: FunctionReference<"query", "internal">;
        findMany: FunctionReference<"query", "internal">;
        updateOne: FunctionReference<"mutation", "internal">;
        incrementOne: FunctionReference<"mutation", "internal">;
        updateMany: FunctionReference<"mutation", "internal">;
        deleteOne: FunctionReference<"mutation", "internal">;
        deleteMany: FunctionReference<"mutation", "internal">;
    };
}, config?: {
    debugLogs?: DBAdapterDebugLogOption;
    authFunctions?: AuthFunctions;
    triggers?: Triggers<DataModel, Schema>;
}) => import("better-auth/adapters").AdapterFactory<import("better-auth").BetterAuthOptions>;
//# sourceMappingURL=adapter.d.ts.map