import React from "react";
import styled from "styled-components";
import { useTheme } from 'hooks/useTheme';


const ThemeSwitcher = ({ setter }) => {
  const { themes, theme, setMode } = useTheme();

  const switchTo = selectedTheme => {
    setMode(selectedTheme)
    setter(selectedTheme)
  };

  const getNextTheme = () => {
    const nextId = theme.id < Object.keys(themes.data).length - 1
      ? theme.id + 1
      : 0

    const nextThemeName = Object.keys(themes.data).find(key => {
      return themes.data[key].id === nextId
    })

    return themes.data[nextThemeName]
  }

  return <Switch onClick={() => switchTo(getNextTheme())}>
    <p>Change theme</p>
    <p>Current: {theme.name}</p>
  </Switch>
}

const Switch = styled.button`
    position: fixed;
    top: 0;
    left: 50vw;
    transform: translateX(-50%);
    cursor: pointer;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.light};
    border: none;
    border-radius: 5px;

    p:first-child {
      margin-bottom: 4px;
    }
`;

export default ThemeSwitcher