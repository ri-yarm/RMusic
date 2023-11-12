import React from "react";
import { styles } from "UI/ButtonUI/ButtonImgUI/ButtonImgUI.styles.ts";
import { ButtonImgUIProps } from "UI/ButtonUI/ButtonImgUI/types.ts";

const ButtonImgUI = (props: ButtonImgUIProps) => (
  <ButtonSC {...props} style={props.styles}>
    {props.children}
  </ButtonSC>
);

const { ButtonSC } = styles;

export default React.memo(ButtonImgUI);
