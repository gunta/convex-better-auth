import { crossDomainCapability } from "../plugins/cross-domain/client.js";
const hasCrossDomain = (authClient) => {
    const candidate = authClient;
    return (candidate.crossDomainCapability === crossDomainCapability &&
        typeof candidate.crossDomain?.oneTimeToken?.verify === "function" &&
        typeof candidate.updateSession === "function");
};
export const handleCrossDomainCallback = async (authClient, href, replaceUrl) => {
    const url = new URL(href);
    const token = url.searchParams.get("ott");
    if (!token || !hasCrossDomain(authClient)) {
        return;
    }
    url.searchParams.delete("ott");
    replaceUrl(url);
    const result = await authClient.crossDomain.oneTimeToken.verify({ token });
    const session = result.data?.session;
    if (!session) {
        return;
    }
    await authClient.getSession({
        fetchOptions: {
            headers: {
                Authorization: `Bearer ${session.token}`,
            },
        },
    });
    authClient.updateSession();
};
//# sourceMappingURL=cross-domain.js.map