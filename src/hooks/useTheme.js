import { useEffect, useState } from 'react';
import { setToLS, getFromLS, clearFieldFromLS } from 'utils/storage';
import _ from 'lodash';

export const useTheme = () => {
  const themes = getFromLS('all-themes');
  const [theme, setTheme] = useState(themes.data.dark);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = mode => {
    setToLS('theme', mode)
    setTheme(mode);
  };

  const getFonts = () => {
    const allFonts = _.values(_.mapValues(themes.data, 'font'));
    const allFontsAndWeights = allFonts.map(font => {
      return `${font}:300,400,500,600,700,800,900`
    })
    return allFontsAndWeights;
  }

  useEffect(() =>{
    let localTheme

    try {
      localTheme = getFromLS('theme');
    } catch (err) {
      localTheme = null
      clearFieldFromLS('theme')
    }
    
    console.log(localTheme ? true : false)
    localTheme ? setTheme(localTheme) : setTheme(themes.data.dark);
    setThemeLoaded(true);
  }, []);

  return { theme, themes, themeLoaded, setMode, getFonts };
};