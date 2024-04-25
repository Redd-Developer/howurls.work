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
        <option value="ir-IR">Persian (فارسی)</option>
        <option value="pt-BR">Portuguese (Brazil)</option>
        <option value="zh-CN">Chinese (中文-简体)</option>
        <option value="fi-FI">Finnish</option>
        <option value="fr">Français</option>
        <option value="ko-KR">한국어</option>
        <option value="de-DE">German</option>
        <option value="es-ES">Español</option>
      </select>
    </span>
  )
}
