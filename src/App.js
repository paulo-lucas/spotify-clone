import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components"
import WebFont from "webfontloader"
import { GlobalStyles } from "theme/GlobalStyles"
import { useTheme } from "hooks/useTheme"

import Sidebar from "components/Sidebar"
import Content from "components/Content"
import Friends from "components/Friends"
import Player from "components/Player"
import ThemeSwitcher from "components/ThemeSwitcher"

function App() {
  const { theme, themeLoaded, getFonts } = useTheme()
  const [selectedTheme, setSelectedTheme] = useState(theme)

  useEffect(() => {
    setSelectedTheme(theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeLoaded])

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    });
  });

  return <>
    {themeLoaded && <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />

      <SiteWrapper className="App">
        <MainWrapper>
          <Sidebar />
          <Content />
          <Friends />
        </MainWrapper>

        <Player />
        <ThemeSwitcher setter={setSelectedTheme} />
      </SiteWrapper>
    </ThemeProvider>}
  </>
}

const SiteWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100vw;
  height: 100vh;
`

const MainWrapper = styled.main`
  flex-grow: 1;
  display: flex;
  flex-flow: row nowrap;
  width: 100vw;
  overflow: hidden;
`

export default App;
