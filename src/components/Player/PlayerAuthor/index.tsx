import React from "react";
import { styles } from "components/Player/PlayerAuthor/index.styles.ts";
import { InfoSong } from "store/index.ts";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";
import T500 from "UI/TypographyUI/TitleUI/500";

interface PlayAuthorProps {
  info: InfoSong;
}

const PlayAuthor = ({ info }: PlayAuthorProps) => (
  <ContainerSC>
    <T500>{info?.title}</T500>
    <T500 color={ColorsScheme.GRAY}>{info?.author}</T500>
  </ContainerSC>
);

const { ContainerSC } = styles;

export default React.memo(PlayAuthor);
