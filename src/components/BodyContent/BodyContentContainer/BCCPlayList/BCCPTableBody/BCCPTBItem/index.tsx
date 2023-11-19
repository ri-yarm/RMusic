import React from "react";
import PlayIcon from "assets/icons/player/playIcon.svg";
import { styles } from "components/BodyContent/BodyContentContainer/BCCPlayList/BCCPTableBody/BCCPTBItem/index.styles.ts";
import { BDPlaylistData } from "lib/mock/BodyContent/BDPlaylistMock.ts";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";
import ButtonImgUI from "UI/ButtonUI/ButtonImgUI";
import T500 from "UI/TypographyUI/TitleUI/500";

const BCCPTBItem = ({
  title,
  time,
  listeners,
  img,
  author,
  playlist,
}: BDPlaylistData) => {
  return (
    <ContainerSC>
      <td>
        <ButtonImgUI borderRadius={100} padding={9}>
          <PlayIcon />
        </ButtonImgUI>
      </td>
      <td>
        <TitleContainerSC>
          <ImgSC src={img} alt={title} />
          <TextContainerSC>
            <T500>{title}</T500>
            <T500 fontSize={14} color={ColorsScheme.GRAY}>
              {author}
            </T500>
          </TextContainerSC>
        </TitleContainerSC>
      </td>

      <td>
        <T500 fontSize={14} color={ColorsScheme.GRAY}>
          {playlist}
        </T500>
      </td>
      <td>
        <T500 fontSize={14} color={ColorsScheme.GRAY}>
          {listeners}
        </T500>
      </td>
      <td>
        <T500 fontSize={14} color={ColorsScheme.GRAY}>
          {time}
        </T500>
      </td>
    </ContainerSC>
  );
};

const { ContainerSC, TitleContainerSC, TextContainerSC, ImgSC } = styles;

export default React.memo(BCCPTBItem);
