import type { BetterAuthClientPlugin } from "better-auth/client";
import type { crossDomain } from "./index.js";
type CrossDomainActions = {
    crossDomainCapability: typeof crossDomainCapability;
    getCookie: () => string;
    updateSession: () => void;
    getSessionData: () => Record<string, unknown> | null;
};
export declare const crossDomainCapability: () => boolean;
type CrossDomainClientPlugin = Omit<BetterAuthClientPlugin, "$InferServerPlugin" | "getActions"> & {
    $InferServerPlugin: ReturnType<typeof crossDomain>;
    getActions: (...args: Parameters<NonNullable<BetterAuthClientPlugin["getActions"]>>) => CrossDomainActions;
};
export declare function getSetCookie(header: string, prevCookie?: string): string;
export declare function getCookie(cookie: string): string;
export declare const crossDomainClient: (opts?: {
    storage?: {
        setItem: (key: string, value: string) => any;
        getItem: (key: string) => string | null;
    };
    storagePrefix?: string;
    disableCache?: boolean;
}) => CrossDomainClientPlugin;
export {};
//# sourceMappingURL=client.d.ts.map