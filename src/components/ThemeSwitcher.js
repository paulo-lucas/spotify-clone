import React, { useState, useEffect } from "react";
import styled from "styled-components";
import _ from 'lodash';
import { useTheme } from 'hooks/useTheme';
import { getFromLS } from 'utils/storage';


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
    ALTERAR TEMA
  </Switch>
}

const Switch = styled.button`
    position: fixed;
    top: 0;
    left: 50vw;
    transform: translateX(-50%);
    cursor: pointer;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.dark};
`;

export default ThemeSwitcher