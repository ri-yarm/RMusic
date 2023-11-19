import React from "react";
import BCCPTBItem from "components/BodyContent/BodyContentContainer/BCCPlayList/BCCPTableBody/BCCPTBItem";
import { BDPlaylistDataArr } from "lib/mock/BodyContent/BDPlaylistMock.ts";

interface BCCPTableBodyProps {
  content: BDPlaylistDataArr;
}

const BCCPTableBody = ({ content }: BCCPTableBodyProps) => (
  <tbody>
    {content.map((item, index) => (
      <BCCPTBItem {...item} key={index} />
    ))}
  </tbody>
);

export default React.memo(BCCPTableBody);
