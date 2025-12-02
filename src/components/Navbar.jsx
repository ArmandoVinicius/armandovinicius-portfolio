import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { t, i18n: {changeLanguage, language}} = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage == "pt" ? "en" : "pt";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  }

  useEffect(() => {
    console.log('open');
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            vinicius<span className="text-blue-500">.</span>armand0
          </a>

          <div>
            <button onClick={handleChangeLanguage} className="cursor-pointer focus:outline-none"><span className={`hover:text-blue-500 transition colors ${language == "pt" ? "text-blue-400" : ""}`}>pt</span> / <span className={`hover:text-blue-500 transition colors ${language == "en" ? "text-blue-400" : ""}`}>en</span></button>
          </div>
          
          <div
            className={`w-7 h-5 relative cursor-pointer z-40 md:hidden ${
              menuOpen ? 'hidden' : ''
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </div>


          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              {t('navHome')}
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              {t('navAbout')}
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              {t('navProjects')}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              {t('navContact')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
