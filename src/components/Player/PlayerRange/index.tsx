import React from "react";
import PRDuration from "components/Player/PlayerRange/PRDuration";
import PRVolume from "components/Player/PlayerRange/PRVolume";
import { PlayerRangeProps } from "components/Player/PlayerRange/types.ts";

const PlayerRange = ({ progress, volume }: PlayerRangeProps) => (
  <>
    <PRDuration {...progress} />
    <PRVolume {...volume} />
  </>
);

export default React.memo(PlayerRange);
