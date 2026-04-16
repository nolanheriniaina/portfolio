"use client";
import { PropsWithChildren } from "react";
import AppContextProvider from "../core/contexts/AppContext";
import { I18nProviderClient } from "../locales/client";
import { Toaster } from "react-hot-toast";

export const Providers = (props: PropsWithChildren<{ locale: string }>) => {
  return (
    <I18nProviderClient locale={props.locale}>
      <AppContextProvider>
        <Toaster position="top-right" reverseOrder={false} />
        {props.children}
      </AppContextProvider>
    </I18nProviderClient>
  );
};
