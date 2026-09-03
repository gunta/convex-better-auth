import type { PropsWithChildren, ReactNode } from "react";
import type { AuthTokenFetcher } from "convex/browser";
import type { FunctionReference } from "convex/server";
import type { EmptyObject } from "convex-helpers";
import type { BetterAuthClientOptions } from "better-auth";
import type { ReactAuthClient } from "better-auth/react";
import type { RequiredAuthClient } from "./cross-domain.js";
export type AuthClient<Client extends RequiredAuthClient = ReactAuthClient<BetterAuthClientOptions> & RequiredAuthClient> = Client & RequiredAuthClient;
type IConvexReactClient = {
    setAuth(fetchToken: AuthTokenFetcher): void;
    clearAuth(): void;
};
/**
 * A wrapper React component which provides a {@link react.ConvexReactClient}
 * authenticated with Better Auth.
 *
 * @public
 */
export declare function ConvexBetterAuthProvider<Client extends RequiredAuthClient>({ children, client, authClient, initialToken, }: {
    children: ReactNode;
    client: IConvexReactClient;
    authClient: Client;
    initialToken?: string | null;
}): import("react/jsx-runtime").JSX.Element;
/**
 * _Experimental_
 *
 * A wrapper React component which provides error handling for auth related errors.
 * This is typically used to redirect the user to the login page when they are
 * unauthenticated, and does so reactively based on the getAuthUserFn query.
 *
 * @example
 * ```ts
 * // convex/auth.ts
 * export const { getAuthUser } = authComponent.clientApi();
 *
 * // auth-client.tsx
 * import { AuthBoundary } from "@convex-dev/react";
 * import { api } from '../../convex/_generated/api'
 * import { isAuthError } from '../lib/utils'
 *
 * export const ClientAuthBoundary = ({ children }: PropsWithChildren) => {
 *   return (
 *     <AuthBoundary
 *       onUnauth={() => redirect("/sign-in")}
 *       authClient={authClient}
 *       getAuthUserFn={api.auth.getAuthUser}
 *       isAuthError={isAuthError}
 * >
 *   <>{children}</>
 * </AuthBoundary>
 * )
 * ```
 * @param props.children - Children to render.
 * @param props.onUnauth - Function to call when the user is
 * unauthenticated. Typically a redirect to the login page.
 * @param props.authClient - Better Auth authClient to use.
 * @param props.renderFallback - Fallback component to render when the user is
 * unauthenticated. Defaults to null. Generally not rendered as error handling
 * is typically a redirect.
 * @param props.getAuthUserFn - Reference to a Convex query that returns user.
 * The component provides a query for this via `export const { getAuthUser } = authComponent.clientApi()`.
 * @param props.isAuthError - Function to check if the error is auth related.
 */
export declare const AuthBoundary: <Client extends RequiredAuthClient>({ children, onUnauth, authClient, renderFallback, getAuthUserFn, isAuthError, }: PropsWithChildren<{
    onUnauth: () => void | Promise<void>;
    authClient: Client;
    renderFallback?: () => React.ReactNode;
    getAuthUserFn: FunctionReference<"query", "public", EmptyObject>;
    isAuthError: (error: unknown) => boolean;
}>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map