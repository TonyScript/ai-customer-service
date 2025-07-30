import '../styles/globals.css';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [language, setLanguage] = useState('zh');
  
  useEffect(() => {
    // 检查本地存储的语言设置
    const savedLanguage = localStorage.getItem('language') || 'zh';
    setLanguage(savedLanguage);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'zh' ? 'en' : 'zh';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return <Component {...pageProps} language={language} />;
}

export default MyApp;
