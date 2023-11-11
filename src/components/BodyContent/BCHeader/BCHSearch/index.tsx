import React from "react";
import SearchIcon from "assets/icons/common/searchIcon.svg";
import { styles } from "components/BodyContent/BCHeader/BCHSearch/BCHSearch.styles.ts";
import { BDInputPlaceholders } from "lib/mock/BodyContent/BDInputPlaceholders.ts";

const BCHSearch = () => (
  <ContainerSC>
    <SearchIcon />
    <InputSC placeholder={BDInputPlaceholders.listen} />
  </ContainerSC>
);

const { ContainerSC, InputSC } = styles;

export default React.memo(BCHSearch);
