// components/LanguageSwitcher.tsx
import React from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    router.push(router.asPath, router.asPath, { locale: lng });
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('pt')}>Português</button>
    </div>
  );
};

export default LanguageSwitcher;
