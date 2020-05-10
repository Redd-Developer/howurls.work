import React, { useContext, useCallback } from 'react'
import { LocaleContext } from '../LocaleProvider'

export const LanguageSwitch = () => {
  const localeContext = useContext(LocaleContext)

  const handleLocaleChange = useCallback(
    (event) => {
      const { value: nextLocale } = event.target
      localStorage.setItem('locale', nextLocale)
      localeContext.setLocale(nextLocale)
    },
    [localeContext]
  )

  return (
    <span>
      <select
        name="locale"
        value={localeContext.locale}
        onChange={handleLocaleChange}
      >
        <option value="en-US">English</option>
        <option value="uk-UA">Українська</option>
        <option value="ru-RU">Русский</option>
      </select>
    </span>
  )
}
