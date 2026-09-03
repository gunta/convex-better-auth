export type RequiredAuthClient = {
    useSession: () => {
        data: {
            session?: {
                id: string;
            };
        } | null;
        isPending: boolean;
    };
    getSession: (args?: {
        fetchOptions: {
            headers: Record<string, string>;
        };
    }) => Promise<unknown>;
    convex: {
        token: (args: {
            fetchOptions: {
                throw: boolean;
            };
        }) => Promise<{
            data?: {
                token?: string;
            } | null;
        }>;
    };
};
export declare const handleCrossDomainCallback: (authClient: RequiredAuthClient, href: string, replaceUrl: (url: URL) => void) => Promise<void>;
//# sourceMappingURL=cross-domain.d.ts.map