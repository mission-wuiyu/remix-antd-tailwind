/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/docs/en/main/file-conventions/entry.client
 */

import { RemixBrowser } from "@remix-run/react";
import { startTransition, useState } from "react";
import { hydrateRoot } from "react-dom/client";

// components and others
import { createCache, StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";

// context
import SettingContext from "./settingContext";

const hydrate = () => {
  startTransition(() => {
    const cache = createCache();

    function MainApp() {
      const [theme, setTheme] = useState({
        colorPrimary: "#00b96b"
      });
      return (
        <SettingContext.Provider value={{ theme, setTheme }}>
          <StyleProvider cache={cache}>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: theme.colorPrimary,
                },
              }}
            >
              <RemixBrowser />
            </ConfigProvider>
          </StyleProvider>
        </SettingContext.Provider>
      );
    }

    hydrateRoot(document, <MainApp />);
  });
};

if (typeof requestIdleCallback === "function") {
  requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  setTimeout(hydrate, 1);
}