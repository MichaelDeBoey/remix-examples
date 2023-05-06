import { CacheProvider } from "@emotion/react";
import { RemixBrowser } from "@remix-run/react";
import type { PropsWithChildren } from "react";
import { useCallback, useState } from "react";
import { hydrateRoot } from "react-dom/client";

import ClientStyleContext from "~/styles/client.context";
import createEmotionCache from "~/styles/createEmotionCache";

function ClientCacheProvider({ children }: PropsWithChildren) {
  const [cache, setCache] = useState(createEmotionCache());

  const reset = useCallback(() => {
    setCache(createEmotionCache());
  }, []);

  return (
    <ClientStyleContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
}

hydrateRoot(
  document,
  <ClientCacheProvider>
    <RemixBrowser />
  </ClientCacheProvider>,
);
