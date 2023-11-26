import FindTopicImg from "assets/images/BodyContent/BCPlaylist/FindTopic.jpg";
import HowMakeImg from "assets/images/BodyContent/BCPlaylist/HowMake.jpg";
import InvestPodcastImg from "assets/images/BodyContent/BCPlaylist/InvestPodcast.jpg";
import InviteFriendsImg from "assets/images/BodyContent/BCPlaylist/InviteFriends.jpg";

export interface BDPlaylistData {
  img: string;
  title: string;
  author: string;
  playlist: string;
  listeners: string;
  time: string;
  music: string;
}

export type BDPlaylistDataArr = BDPlaylistData[];

export const BDPlaylistMock = [
  {
    img: FindTopicImg,
    title: "Find topic that tou love",
    author: "Ken Adams",
    playlist: "How to Start Podcast",
    listeners: "2,412",
    time: "08:12",
    music: "Dabro - На часах ноль-ноль.mp3",
  },
  {
    img: InviteFriendsImg,
    title: "Invite your friends instead",
    author: "Ken Adams",
    playlist: "How to Start Podcast",
    listeners: "2,341",
    time: "18:11",
    music: "GSPD - У России три пути.mp3",
  },
  {
    img: HowMakeImg,
    title: "How to make your partner talk more",
    author: "Ken Adams",
    playlist: "How to Start Podcast",
    listeners: "1,212",
    time: "12:11",
    music: "Моя Мишель - Зима в сердце.mp3",
  },
  {
    img: InvestPodcastImg,
    title: "Invest in podcast tools",
    author: "Ken Adams",
    playlist: "How to Start Podcast",
    listeners: "3,123",
    time: "18:31",
    music: "/Серёга - Черный бумер.mp3",
  },
];
