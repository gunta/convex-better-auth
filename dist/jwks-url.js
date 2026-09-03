export const validateConvexSiteUrl = (siteUrl) => {
    let parsedSiteUrl;
    try {
        parsedSiteUrl = new URL(siteUrl);
    }
    catch {
        throw new Error("CONVEX_SITE_URL must be a valid HTTP or HTTPS URL");
    }
    if (parsedSiteUrl.protocol !== "http:" &&
        parsedSiteUrl.protocol !== "https:") {
        throw new Error("CONVEX_SITE_URL must be a valid HTTP or HTTPS URL");
    }
    if (parsedSiteUrl.search || parsedSiteUrl.hash) {
        throw new Error("CONVEX_SITE_URL must not include a query string or fragment");
    }
    return siteUrl;
};
export const getJwksUrl = (siteUrl, basePath) => {
    validateConvexSiteUrl(siteUrl);
    const normalizedSiteUrl = siteUrl.replace(/\/+$/, "");
    const configuredBasePath = basePath ?? "/api/auth";
    const trimmedBasePath = configuredBasePath.replace(/^\/+|\/+$/g, "");
    const normalizedBasePath = trimmedBasePath ? `/${trimmedBasePath}` : "";
    return `${normalizedSiteUrl}${normalizedBasePath}/convex/jwks`;
};
//# sourceMappingURL=jwks-url.js.map