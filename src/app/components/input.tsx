'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useEffect, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
];

export default function InputJsx() {
  const router = useRouter();
  const locale = useLocale(); // ✅ جلب اللغة من next-intl
  const [currentLang, setCurrentLang] = useState(locale); // نستخدمها كـ قيمة ابتدائية

  useEffect(() => {
    setCurrentLang(locale); // ✅ تحديث اللغة تلقائيًا عند تغيّر locale
    localStorage.setItem('language', locale); // (اختياري) حفظها في localStorage
  }, [locale]);

  const handleChange = (lang: string) => {
    if (lang !== currentLang) {
      localStorage.setItem('language', lang);
      router.replace(`/${lang}`); // ✅ تغيير اللغة في الرابط مباشرة
    }
  };

  return (
    <div className="relative sm:w-40 w-20">
      <div className="relative">
        <label htmlFor="language-select" className="sr-only">Language</label>
        <select
          id="language-select"
          value={currentLang}
          onChange={(e) => handleChange(e.target.value)}
          className="appearance-none w-full bg-transparent border text-lg font-medium rounded-md py-2 pl-3 pr-10 shadow-sm cursor-pointer focus:ring-2 focus:outline-none focus:ring-black focus:border-white border-black text-black"
        >
          {languages.map((language) => (
            <option key={language.code} value={language.code}>
              {language.flag} {language.name}
            </option>
          ))}
        </select>
        <HiChevronDown className="absolute top-1/2 right-3 w-5 h-5 transform -translate-y-1/2 pointer-events-none text-black" />
      </div>
    </div>
  );
}
