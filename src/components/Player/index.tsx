import React from "react";
import CreateBusinessImg from "assets/images/BodyContent/BCAside/CreateBusiness.jpg";
import { styles } from "components/Player/index.styles.ts";
import PlayAuthor from "components/Player/PlayerAuthor";
import PlayerControl from "components/Player/PlayerControl";
import PlayerRange from "components/Player/PlayerRange";

const Player = () => (
  <ContainerSC>
    <ImgSC src={CreateBusinessImg} />
    <InfoContainerSC>
      <PlayAuthor />
      <PlayerControl />
      <PlayerRange />
    </InfoContainerSC>
  </ContainerSC>
);

const { ContainerSC, ImgSC, InfoContainerSC } = styles;

export default React.memo(Player);
