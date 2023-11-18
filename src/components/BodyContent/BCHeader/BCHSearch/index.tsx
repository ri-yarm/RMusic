import React from "react";
import SearchIcon from "assets/icons/common/searchIcon.svg";
import { styles } from "components/BodyContent/BCHeader/BCHSearch/BCHSearch.styles.ts";
import { BDInputPlaceholdersMock } from "lib/mock/BodyContent/BDInputPlaceholdersMock.ts";

const BCHSearch = () => (
  <ContainerSC>
    <SearchIcon />
    <InputSC placeholder={BDInputPlaceholdersMock.listen} />
  </ContainerSC>
);

const { ContainerSC, InputSC } = styles;

export default React.memo(BCHSearch);
