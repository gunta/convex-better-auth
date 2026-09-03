export declare const listLegacyOAuthApplications: import("convex/server").RegisteredQuery<"public", {
    paginationOpts: {
        id?: number;
        endCursor?: string | null;
        maximumRowsRead?: number;
        maximumBytesRead?: number;
        numItems: number;
        cursor: string | null;
    };
}, Promise<{
    continueCursor: string;
    page: {
        hadClientSecret: boolean;
        _id: import("convex/values").GenericId<"oauthApplication">;
        _creationTime: number;
        type?: string | null | undefined;
        createdAt?: number | null | undefined;
        updatedAt?: number | null | undefined;
        name?: string | null | undefined;
        userId?: string | null | undefined;
        metadata?: string | null | undefined;
        icon?: string | null | undefined;
        clientId?: string | null | undefined;
        redirectUrls?: string | null | undefined;
        disabled?: boolean | null | undefined;
    }[];
    isDone: boolean;
    splitCursor?: import("convex/server").Cursor | null;
    pageStatus?: "SplitRecommended" | "SplitRequired" | null;
}>>;
export declare const clearLegacyOAuthProviderRecords: import("convex/server").RegisteredMutation<"public", {
    paginationOpts: {
        id?: number;
        endCursor?: string | null;
        maximumRowsRead?: number;
        maximumBytesRead?: number;
        numItems: number;
        cursor: string | null;
    };
    table: "oauthApplication" | "oauthAccessToken" | "oauthConsent";
}, Promise<{
    continueCursor: string;
    isDone: boolean;
    deleted: number;
}>>;
export declare const validateAccountIssuerBackfill: import("convex/server").RegisteredQuery<"public", {
    paginationOpts: {
        id?: number;
        endCursor?: string | null;
        maximumRowsRead?: number;
        maximumBytesRead?: number;
        numItems: number;
        cursor: string | null;
    };
    providerIssuers: Record<string, string>;
}, Promise<{
    continueCursor: string;
    isDone: boolean;
    pending: number;
    alreadyMigrated: number;
}>>;
export declare const backfillAccountIssuers: import("convex/server").RegisteredMutation<"public", {
    paginationOpts: {
        id?: number;
        endCursor?: string | null;
        maximumRowsRead?: number;
        maximumBytesRead?: number;
        numItems: number;
        cursor: string | null;
    };
    providerIssuers: Record<string, string>;
}, Promise<{
    continueCursor: string;
    isDone: boolean;
    migrated: number;
    alreadyMigrated: number;
}>>;
//# sourceMappingURL=migrations.d.ts.map