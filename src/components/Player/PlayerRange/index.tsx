import React from "react";
import PRDuration from "components/Player/PlayerRange/PRDuration";
import PRVolume from "components/Player/PlayerRange/PRVolume";

const PlayerRange = () => (
  <>
    <PRDuration />
    <PRVolume />
  </>
);

export default React.memo(PlayerRange);
