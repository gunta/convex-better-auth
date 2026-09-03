import type { BetterAuthOptions } from "better-auth";
export declare const convexCustomTestSuite: (options?: {
    disableTests?: Partial<Record<"should handle lone range operators" | "should handle compound indexes that include id field" | "should use composite index for eq + sortBy on second field" | "should automatically paginate" | "should support select in findMany" | "should handle OR where clauses" | "should handle OR where clauses with sortBy" | "should apply OR dedupe/sort/limit before select" | "should return null and not modify records when update where is empty" | "should update and count each match only once for overlapping OR clauses" | "should roll back single-page bulk updates that collide on a compound unique constraint" | "should allow a full-page unique update and reject larger updates" | "should allow atomic ID-set unique updates larger than one page" | "should reject new accounts without the required issuer" | "should delete and count each match only once for overlapping OR clauses" | "should handle count" | "should handle queries with no index" | "should handle compound operator on non-unique field without an index" | "should preserve null to non-null range comparisons" | "should fail to create a record with a unique field that already exists" | "should consume a matching record only once" | "should apply a guarded increment only once" | "should increment a nullable legacy counter from zero" | "should restore Better Auth options after a custom test" | "should be able to compare against a date" | "should reject case-insensitive where clauses", boolean> & {
        ALL?: boolean;
    }> | undefined;
} | undefined) => (helpers: {
    adapter: () => Promise<import("better-auth").DBAdapter<BetterAuthOptions>>;
    log: import("@better-auth/test-utils/adapter").Logger;
    adapterDisplayName: string;
    getBetterAuthOptions: () => BetterAuthOptions;
    modifyBetterAuthOptions: (options: BetterAuthOptions) => Promise<BetterAuthOptions>;
    cleanup: () => Promise<void>;
    runMigrations: () => Promise<void>;
    prefixTests?: string | undefined;
    onTestFinish: (stats: import("@better-auth/test-utils/adapter").TestSuiteStats) => Promise<void>;
    customIdGenerator?: () => any | Promise<any> | undefined;
    transformIdOutput?: (id: any) => string | undefined;
}) => Promise<void>;
//# sourceMappingURL=convex-custom.d.ts.map