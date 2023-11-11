import React from "react";
import styled from "styled-components";
import ListMusicIcon from "assets/icons/common/listMusicIcon.svg";
import SearchIcon from "assets/icons/common/searchIcon.svg";
import PlucIcon from "assets/icons/common/plusIcon.svg";
import T600 from "UI/TypographyUI/600";

const TopContainer = () => (
  <ContainerSC>
    <ListSC gap={16}>
      <ListMusicIcon />
      <T600>Your playlist (9)</T600>
    </ListSC>
    <ListSC gap={14}>
      <SearchIcon />
      <PlucIcon />
    </ListSC>
  </ContainerSC>
);

const ContainerSC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListSC = styled.ul<{ gap: number }>`
  display: flex;
  gap: ${({ gap }) => `${gap}px`};
`;

export default React.memo(TopContainer);
