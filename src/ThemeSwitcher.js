import React, { useEffect } from 'react'
import chroma from 'chroma-js';
import { Box } from 'rebass';
import { Theme, Color, BackgroundColor } from '@adobe/leonardo-contrast-colors';

import useLocalStorage from './hooks/useLocalStorage';

function getValue(key, colors) {
  const value = colors[key];
  // is alias
  if (value.indexOf('$') === 0) {
    return getValue(value.replace('$', ''), colors);
  } else if (value.indexOf('alpha') === 0){
    const [_, colorKey, amount] = value.split(' ');
    const alphaColor = chroma(getValue(colorKey.replace('$', ''), colors)).alpha(parseFloat(amount)).css();
    return alphaColor;
  } else if (value.indexOf('darken') === 0) {
    const [_, colorKey, amount] = value.split(' ');
    return chroma(getValue(colorKey.replace('$', ''), colors)).darken(parseFloat(amount)).css();
  } else {
    return value;
  }
};

const createThemeColors = (lightness, contrast) => {
  const ratios = [1.1,1.55,2.14,3.05,4.34,6.08,8.34,11.2,16.09];

  let Gray = new BackgroundColor({"name":"Gray","colorKeys":["#31333D"],"ratios": ratios,"colorspace":"CAM02"});
  // let Gray = new BackgroundColor({"name":"Gray","colorKeys":["#D5CFFF", "#27243B", "#0F0717"],"ratios": ratios,"colorspace":"CAM02"});
  let Blue = new Color({"name":"Blue","colorKeys":["#0a93ff"],"ratios": ratios,"colorspace":"LAB"});
  let Teal = new Color({"name":"Teal","colorKeys":["#34eade", "#005e56"],"ratios": ratios,"colorspace":"CAM02"});
  let Green = new Color({"name":"Green","colorKeys":["#16e967"],"ratios": ratios,"colorspace":"LAB"});
  let Lime = new Color({"name":"Lime","colorKeys":["#b5e616"],"ratios": ratios,"colorspace":"LAB"});
  let Yellow = new Color({"name":"Yellow","colorKeys":["#ffd60a","#ba6e17"],"ratios": ratios,"colorspace":"LAB"});
  let Orange = new Color({"name":"Orange","colorKeys":["#ff7300","#bd3900"],"ratios": ratios,"colorspace":"LAB"});
  let Red = new Color({"name":"Red","colorKeys":["#f55", "#ff1f1f","#8f0000"],"ratios": ratios,"colorspace":"HSL"});
  let Purple = new Color({"name":"Purple","colorKeys":["#8b2dd7"],"ratios": ratios,"colorspace":"LAB"});
  let MyTheme = new Theme({
    colors: [Gray,Green,Red,Blue,Yellow,Lime, Orange,Purple,Teal],
    backgroundColor: Gray,
    lightness,
    contrast
  });

  const colors = {
    background: MyTheme._contrastColors[0].background,
  };
  MyTheme._contrastColors.forEach((color) => {
    if (!color.name) return;
    color.values.forEach(value => {
      colors[value.name.toLowerCase()] = value.value;
    });
  });
  return {
    colors,
    scales: MyTheme._contrastColors.filter(scale => scale.name).map(scale => scale.name.toLowerCase())
  }
}

const ThemeSwitcher = ({ handleSetTheme }) => {
  const [theme, setTheme] = useLocalStorage('theme', '');

  const lightColorScale = createThemeColors(100, 1);
  const darkColorScale = createThemeColors(5, 1);

  const themes = {
    light: {
      ...lightColorScale.colors,

      white: '#fff',
      'background-surface': '#fff',
      border: 'alpha $gray800 0.15',
      'border-white': 'alpha $white 0.15',
      focus: '$blue400',
      focusBorder: '$blue400',
      focusInputBackground: 'alpha $blue600 0.1',
      'text-primary': '$gray900',
      'text-secondary': '$gray700',

      ...lightColorScale.scales.reduce((current, scale) => ({
        ...current,
        [`background-${scale}`]: `$${scale}600`,
        [`background-${scale}-hover`]: `darken $background-${scale} 0.2`,
        [`background-${scale}-active`]: `darken $background-${scale} 0.3`,
        [`background-${scale}-muted`]: `$${scale}100`,
        [`background-${scale}-muted-alpha`]: `alpha $${scale}200 0.2`,
        [`text-${scale}`]: `$${scale}700`,
        [`icon-${scale}`]: `$${scale}500`,
        [`text-${scale}-muted`]: `$${scale}900`,
        [`text-on-background-${scale}`]: `white`,
        [`border-on-background-${scale}`]: `alpha $text-on-background-${scale} 0.2`,
      }), {}),

      [`background-white`]: `white`,
      [`background-white-hover`]: `darken $background-white 0.4`,
      [`background-white-active`]: `darken $background-white 0.8`,
      [`text-on-background-white`]: `$text-primary`,

      [`background-lime`]: `$lime300`,
      [`background-lime-hover`]: `darken $background-lime 0.2`,
      [`background-lime-active`]: `darken $background-lime 0.3`,
      [`text-on-background-lime`]: `$lime900`,

      [`background-yellow`]: `$yellow200`,
      [`background-yellow-hover`]: `darken $background-yellow 0.2`,
      [`background-yellow-active`]: `darken $background-yellow 0.3`,
      [`background-yellow-muted-alpha`]: `alpha $yellow200 0.2`,
      [`text-on-background-yellow`]: `$yellow900`,

      [`background-orange`]: `$orange300`,
      [`background-orange-hover`]: `darken $background-orange 0.2`,
      [`background-orange-active`]: `darken $background-orange 0.3`,
      [`text-on-background-orange`]: `$orange900`,

      'hover': 'alpha $gray800 0.05',
      'active': 'alpha $gray800 0.1',
    },
    dark: {
      ...darkColorScale.colors,

      white: '#fff',
      'background-surface': '$gray100',
      border: 'alpha $gray800 0.15',
      'border-white': 'alpha $white 0.15',
      focus: '$blue400',
      focusBorder: '$blue400',
      focusInputBackground: 'alpha $blue600 0.1',
      'text-primary': '$gray900',
      'text-secondary': '$gray600',

      ...darkColorScale.scales.reduce((current, scale) => ({
        ...current,
        [`background-${scale}`]: `$${scale}300`,
        [`background-${scale}-hover`]: `darken $background-${scale} 0.2`,
        [`background-${scale}-active`]: `darken $background-${scale} 0.4`,
        [`background-${scale}-muted`]: `$${scale}100`,
        [`background-${scale}-muted-alpha`]: `alpha $${scale}200 0.2`,
        [`text-${scale}`]: `$${scale}800`,
        [`icon-${scale}`]: `$${scale}700`,
        [`text-${scale}-muted`]: `$${scale}900`,
        [`text-on-background-${scale}`]: `white`,
        [`border-on-background-${scale}`]: `alpha $text-on-background-${scale} 0.2`,
      }), {}),

      [`background-white`]: `white`,
      [`background-white-hover`]: `darken $background-white 0.4`,
      [`background-white-active`]: `darken $background-white 0.8`,
      [`text-on-background-white`]: `$text-primary`,

      // [`background-lime`]: `$lime300`,
      // [`background-lime-hover`]: `darken $background-lime 0.2`,
      // [`background-lime-active`]: `darken $background-lime 0.3`,
      // [`text-on-background-lime`]: `white`,

      // [`background-yellow`]: `$yellow700`,
      // [`background-yellow-hover`]: `darken $background-yellow 0.2`,
      // [`background-yellow-active`]: `darken $background-yellow 0.4`,
      // [`background-yellow-muted-alpha`]: `alpha $yellow800 0.2`,
      // [`text-on-background-yellow`]: `$yellow100`,

      // [`background-orange`]: `$orange600`,
      // [`background-orange-hover`]: `darken $background-orange 0.2`,
      // [`background-orange-active`]: `darken $background-orange 0.4`,
      // [`text-on-background-orange`]: `$orange100`,

      'hover': 'alpha $gray800 0.05',
      'active': 'alpha $gray800 0.1',
    },
  };

  useEffect(() => {
    document.body.dataset.theme = theme;

    let _theme = theme;
    if (!_theme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      _theme = 'dark';
    } else {
      _theme = 'light';
    }

    handleSetTheme({
      theme: _theme,
      themes,
    });
  }, [theme]);

  useEffect(() =>  {
    // create themed style tag with color variables
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = Object.keys(themes).reduce((prev, themeKey) => {
      let result = prev;
      result += `
        body[data-theme="${themeKey}"] {
          ${Object.keys(themes[themeKey]).map(key => `--${key}: ${getValue(key, themes[themeKey])};`).join('\n')}
        }
      `;
      return result;
    }, '');
    style.innerHTML += `
      @media (prefers-color-scheme: dark) {
        body {
          ${Object.keys(themes.dark).map(key => `--${key}: ${getValue(key, themes.dark)};`).join('\n')}
        }
      }
      @media (prefers-color-scheme: light) {
        body {
          ${Object.keys(themes.light).map(key => `--${key}: ${getValue(key, themes.light)};`).join('\n')}
        }
      }
    `;
    document.head.appendChild(style);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      const newColorScheme = event.matches ? 'dark' : 'light';
      handleSetTheme({
        theme: newColorScheme,
        themes,
      });
    });
  }, []);

  return (
    <Box
      as="select"
      id="theme-selector"
      onChange={e => setTheme(e.target.value)}
      value={theme}
      mr="10px"
    >
      {Object.keys(themes).map(theme => <option key={theme} value={theme}>{theme}</option>)}
      <option value="">Use system preference</option>
    </Box>
  )
}

export default ThemeSwitcher