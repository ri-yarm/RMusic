import { ReactNode } from "react";
import ClockIconImg from "assets/icons/common/clockIcon.svg";
import HeadPhonesImg from "assets/icons/common/headHeadphonesIcon.svg";

export interface BDPTableHeadItem {
  title?: string;
  svg?: ReactNode;
}

export type BDPTableHeadItemArr = BDPTableHeadItem[];

export const BDPTableHeadMock: BDPTableHeadItemArr = [
  {
    title: "#",
  },
  { title: "Title" },
  { title: "Playlist" },
  { svg: HeadPhonesImg },
  { svg: ClockIconImg },
];
