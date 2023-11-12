import React from "react";
import { styles } from "UI/AvatarUI/AvatarUI.styles.ts";
import { AvatarUIProps } from "UI/AvatarUI/types.ts";

const AvatarUI = (props: AvatarUIProps) => (
  <AvatarSC {...props} style={props.styles} src={props.image} />
);

const { AvatarSC } = styles;

export default React.memo(AvatarUI);
