import React from "react";
import { styles } from "components/BodyContent/BodyContentContainer/BCCPlayList/BCCPTableHead/index.styles.ts";
import { BDPTableHeadItemArr } from "lib/mock/BodyContent/BDPTableHead.ts";

interface BCCPTableHeadProps {
  content: BDPTableHeadItemArr;
}

const BCCPTableHead = ({ content }: BCCPTableHeadProps) => (
  <ContainerSC>
    <tr>
      {content.map((item, index) => (
        <th key={index}>
          {item.title && <>{item.title}</>}
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-expect-error*/}
          {item.svg && <>{<item.svg />}</>}
        </th>
      ))}
    </tr>
  </ContainerSC>
);

const { ContainerSC } = styles;

export default React.memo(BCCPTableHead);
