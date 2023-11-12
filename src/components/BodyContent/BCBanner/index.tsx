import React from "react";
import VerifyIcon from "assets/icons/common/verifyIcon.svg";
import { styles } from "components/BodyContent/BCBanner/BCBanner.styles.ts";
import { BDBannerMock } from "lib/mock/BodyContent/BDBannerMock.ts";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";
import { Sizes } from "styles/Namespace/Sizes.ts";
import AvatarUI from "UI/AvatarUI";
import ButtonImgUI from "UI/ButtonUI/ButtonImgUI";
import T500 from "UI/TypographyUI/TitleUI/500";
import T700 from "UI/TypographyUI/TitleUI/700";

const BCBanner = () => (
  <ContainerSC>
    <FollowSC>
      <TextContainerSC>
        <TitleContainerSC>
          <T700>{BDBannerMock.title}</T700>
          <VerifyIcon />
        </TitleContainerSC>

        <T500 fontSize={20}>{BDBannerMock.subtitle}</T500>
      </TextContainerSC>

      <ButtonImgUI
        padding={[10, 45]}
        background={ColorsScheme.VIOLET}
        styles={{ maxWidth: "140px" }}
        borderRadius={5}>
        {BDBannerMock.button}
      </ButtonImgUI>
    </FollowSC>

    <AuthorSC>
      <AvatarUI
        image={BDBannerMock.author.avatar}
        borderRadius={Sizes.DEFAULT}
        bigSize
      />
      <TextContainerSC>
        <T500 fontSize={16}>{BDBannerMock.author.name}</T500>
        <T500 fontSize={14}>{BDBannerMock.author.followers}</T500>
      </TextContainerSC>
    </AuthorSC>
  </ContainerSC>
);

const { ContainerSC, FollowSC, TextContainerSC, TitleContainerSC, AuthorSC } =
  styles;
export default React.memo(BCBanner);
