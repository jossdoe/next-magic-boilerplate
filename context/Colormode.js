import { useState, useContext, createContext } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '@style/theme';

const ColormodeSetContext = createContext();

export const ColormodeProvider = ({ children }) => {
  const [isDarkmode, setIsDarkmode] = useState(false);

  const toggleTheme = () => setIsDarkmode(!isDarkmode);

  return (
    <ColormodeSetContext.Provider value={toggleTheme}>
      <ThemeProvider theme={isDarkmode ? theme.dark : theme.light}>
        {children}
      </ThemeProvider>
    </ColormodeSetContext.Provider>
  );
};

export const useSetColormode = () => useContext(ColormodeSetContext);
