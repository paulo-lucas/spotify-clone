import React from "react"
import styled from "styled-components"
import { RiHome5Fill } from "react-icons/ri"
import { FiSearch } from "react-icons/fi"
import { ImBooks } from "react-icons/im"
import { AiFillPlusSquare } from "react-icons/ai"
import { BsFillBookmarkHeartFill, BsVolumeUp, BsPause } from "react-icons/bs"

import SidebarButton from "components/Sidebar/SidebarButton"

const Sidebar = () => {
  return <Bar>
    <MainButtonsWrapper>
      <SidebarButton icon={RiHome5Fill} label="Home" bold className="selected" />
      <SidebarButton icon={FiSearch} label="Search" bold />
      <SidebarButton icon={ImBooks} label="Your Library" bold />
    </MainButtonsWrapper>

    <PlaylistButtonsWraper>
      <SidebarButton icon={AiFillPlusSquare} label="Create Playlist" bold />
      <SidebarButton icon={BsFillBookmarkHeartFill} label="Liked Songs" bold />

      <Hr />

      <ScrollableWraper>
      <SidebarButton label="Travel" />
        <SidebarButton label="Enjoy Summer" />
        <SidebarButton label="Party songs" />
        <SidebarButton label="Gaming" flag={BsVolumeUp} onHoverFlag={BsPause} />
        <SidebarButton label="Fresh start" />
        <SidebarButton label="After midnight" />
        <SidebarButton label="Calm Days" />
        <SidebarButton label="Back to 90s" />
        <SidebarButton label="Country Summer Nights" />
        <SidebarButton label="Coffee Alone" />
        <SidebarButton label="Feel Good Songs" />
        <SidebarButton label="Heart Waves" />
        <SidebarButton label="Handmade Glory" />
        <SidebarButton label="Acid Days" />
        <SidebarButton label="Today’s feeling" />
        <SidebarButton label="At Home" />
        <SidebarButton label="I’m tired of Love" />
        <SidebarButton label="Satanic Music" />
        <SidebarButton label="Comfort zone" />
        <SidebarButton label="Bonjour, Future" />
        <SidebarButton label="Feeling Alive" />
        <SidebarButton label="Musical Odyssey" />
        <SidebarButton label="Chilled Soul" />
      </ScrollableWraper>
    </PlaylistButtonsWraper>
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

const PlaylistButtonsWraper = styled.div`
  padding: 24px 0;
`

const ScrollableWraper = styled.div`
  padding-top: 16px;
  height: 50vh;
  overflow-y: auto;
`

const Hr = styled.hr`
  box-shadow: -20px 0 10px 20px ${({ theme }) => theme.colors.dark};
  margin: 16px 16px 0px 16px;
  color: ${({ theme }) => theme.colors.item.default};
  opacity: 0.5;
  border-bottom: none;
`

export default Sidebar