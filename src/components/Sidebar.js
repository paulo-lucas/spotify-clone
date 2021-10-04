import React from "react"
import styled from "styled-components"
import { RiHome5Fill } from "react-icons/ri"
import { FiSearch } from "react-icons/fi"
import { ImBooks } from "react-icons/im"
import { AiFillPlusSquare } from "react-icons/ai"
import { BsFillBookmarkHeartFill } from "react-icons/bs"

import SidebarIconButton from "components/SidebarIconButton"

const Sidebar = () => {
  return <Bar>
    <MainButtonsWrapper>
      <SidebarIconButton icon={RiHome5Fill} label="Home" className="selected" />
      <SidebarIconButton icon={FiSearch} label="Search" />
      <SidebarIconButton icon={ImBooks} label="Your Library" />
    </MainButtonsWrapper>

    <SidebarIconButton icon={AiFillPlusSquare} label="Create Playlist" />
    <SidebarIconButton icon={BsFillBookmarkHeartFill} label="Liked Songs" />
  </Bar>
}

const Bar = styled.nav`
  background-color: ${({ theme }) => theme.colors.dark};
  width: 240px;
  height: 100%;
  padding: 24px 8px;
`

const MainButtonsWrapper = styled.div`
  padding: 24px 0;
`

export default Sidebar