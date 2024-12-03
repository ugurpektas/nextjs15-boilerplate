"use client";

import { useTransition } from "react";
import FlagsSelect from "react-flags-select";
import { useLocale, useTranslations } from "next-intl";
import "./flag.css";
import { Locale, locales } from "@/i18n/config";
import { setUserLocale } from "@/i18n/locale";

const LocaleSwitcher: React.FC = () => {
  const t = useTranslations("LocaleSwitcher");
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();

  const countries = Object.values(locales).map((path) => path.toUpperCase());
  const convertCountries = countries.map((x) => (x === "EN" ? "GB" : x));

  const onSelectChange = (countryCode: string) => {
    const nextLocale = countryCode.toLowerCase(); // Convert to uppercase
    const formatLocale = (nextLocale === "gb" ? "en" : nextLocale) as Locale;

    startTransition(() => {
      setUserLocale(formatLocale);
    });
  };

  return (
    <FlagsSelect
      selected={locale === "en" ? "GB" : locale.toUpperCase()}
      onSelect={(countryCode: string) => onSelectChange(countryCode)}
      countries={convertCountries}
      placeholder={t("label")}
      // className="react-flags-select border-none"
      // selectButtonClassName={"border-none"}
      // alignOptionsToRight={true}
      // fullWidth={true}
      disabled={isPending}
      customLabels={{
        en: "GB",
      }} // Pass customLabels to FlagsSelect
    />
  );
};

export default LocaleSwitcher;
