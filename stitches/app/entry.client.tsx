import { RemixBrowser } from "@remix-run/react";
import type { PropsWithChildren } from "react";
import { useCallback, useState } from "react";
import { hydrate } from "react-dom";

import ClientStyleContext from "~/styles/client.context";
import { getCssText } from "~/styles/stitches.config";

function ClientCacheProvider({ children }: PropsWithChildren) {
  const [sheet, setSheet] = useState(getCssText());

  const reset = useCallback(() => {
    setSheet(getCssText());
  }, []);

  return (
    <ClientStyleContext.Provider value={{ reset, sheet }}>
      {children}
    </ClientStyleContext.Provider>
  );
}

hydrate(
  <ClientCacheProvider>
    <RemixBrowser />
  </ClientCacheProvider>,
  document,
);
