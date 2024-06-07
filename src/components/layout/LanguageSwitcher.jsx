import React, { useEffect, useState } from 'react';
import { Box, Select, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    // Ensuring direction is set correctly on component mount
    const rtlSupport = i18n.language === 'ar' ? 'rtl' : 'ltr';
    if (typeof document !== 'undefined') {
      document.body.dir = rtlSupport;
      document.body.className = rtlSupport;
    }
  }, [i18n.language]);

  const onChangeLanguage = (event) => {
    console.log("🚀 ~ onChangeLanguage ~ event:", event)
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage).then(() => {
      setLanguage(selectedLanguage);
      const rtlSupport = selectedLanguage === 'ar' ? 'rtl' : 'ltr';
      if (typeof document !== 'undefined') {
        document.body.dir = rtlSupport;
        document.body.className = rtlSupport;
      }
    });
  };

  return (
    <Box>
      <Select
        value={language}
        onChange={onChangeLanguage}
      >
        <MenuItem value="ar">العربية</MenuItem> 
        <MenuItem value="en">English</MenuItem>
        {/* Add more languages as needed */}
      </Select>
    </Box>
  );
};

export default LanguageSwitcher;
