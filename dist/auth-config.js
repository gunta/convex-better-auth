import { getJwksUrl, validateConvexSiteUrl } from "./jwks-url.js";
export const createPublicJwks = (jwks, options) => {
    /*
    const now = Date.now();
    const DEFAULT_GRACE_PERIOD = 60 * 60 * 24 * 30;
    const gracePeriod =
      (options?.jwks?.gracePeriod ?? DEFAULT_GRACE_PERIOD) * 1000;
  
    const keys = jwks.filter((key) => {
      if (!key.expiresAt) {
        return true;
      }
      return new Date(key.expiresAt).getTime() + gracePeriod > now;
    });
    */
    const keys = jwks;
    const keyPairConfig = options?.jwks?.keyPairConfig;
    const defaultCrv = keyPairConfig
        ? "crv" in keyPairConfig
            ? keyPairConfig.crv
            : undefined
        : undefined;
    return {
        keys: keys.map((keySet) => {
            return {
                alg: keySet.alg ?? options?.jwks?.keyPairConfig?.alg ?? "EdDSA",
                crv: keySet.crv ?? defaultCrv,
                ...JSON.parse(keySet.publicKey),
                kid: keySet.id,
            };
        }),
    };
};
export const getAuthConfigProvider = (opts) => {
    const siteUrl = process.env.CONVEX_SITE_URL;
    if (!siteUrl) {
        throw new Error("CONVEX_SITE_URL is not set");
    }
    validateConvexSiteUrl(siteUrl);
    const parsedJwks = opts?.jwks ? JSON.parse(opts.jwks) : undefined;
    return {
        type: "customJwt",
        issuer: siteUrl,
        applicationID: "convex",
        algorithm: "RS256",
        jwks: parsedJwks
            ? `data:text/plain;charset=utf-8;base64,${btoa(JSON.stringify(createPublicJwks(parsedJwks)))}`
            : getJwksUrl(siteUrl, opts?.basePath),
    };
};
//# sourceMappingURL=auth-config.js.map