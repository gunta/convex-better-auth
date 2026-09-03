import type { createTestSuite } from "@better-auth/test-utils/adapter";
export declare const AUTH_FLOW_DEFAULT_BETTER_AUTH_OPTIONS: {
    emailAndPassword: {
        enabled: boolean;
        password: {
            hash: (password: string) => Promise<string>;
            verify(data: {
                hash: string;
                password: string;
            }): Promise<boolean>;
        };
    };
};
export declare const getAuthFlowSuiteTests: ({ generate, getAuth, modifyBetterAuthOptions, tryCatch, }: Parameters<Parameters<typeof createTestSuite>[2]>[0]) => {
    "should successfully sign up": () => Promise<void>;
    "should successfully sign in": () => Promise<void>;
    "should successfully get session": () => Promise<void>;
    "should not sign in with invalid email": () => Promise<void>;
    "should store and retrieve timestamps correctly across timezones": () => Promise<void>;
    "should sign up with additional fields": () => Promise<void>;
};
//# sourceMappingURL=auth-flow.d.ts.map