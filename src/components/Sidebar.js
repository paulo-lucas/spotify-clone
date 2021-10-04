import React from "react"
import styled from "styled-components"
import {
  MdHome,
  MdPerson,
  MdPlaylistPlay,
  MdMusicNote,
  MdAlbum,
} from 'react-icons/md'
import { ImBooks } from "react-icons/im"
import { FiSearch, FiClock } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'
import { RiHomeFill, RiHome5Fill, RiHome2Fill } from "react-icons/ri"

import SidebarIconButton from "components/SidebarIconButton"

const Sidebar = () => {
  return <Bar>
    <SidebarIconButton icon={RiHome5Fill} label="Home" className="selected" />
    <SidebarIconButton icon={FiSearch} label="Search" />
    <SidebarIconButton icon={ImBooks} label="Your Library" />
  </Bar>
}

const Bar = styled.nav`
  background-color: ${({ theme }) => theme.colors.dark};
  width: 240px;
  height: 100%;
  padding: 48px 8px;
`

export default Sidebar