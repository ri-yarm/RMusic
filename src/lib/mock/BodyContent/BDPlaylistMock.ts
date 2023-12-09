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
  music: string;
}

export type BDPlaylistDataArr = BDPlaylistData[];

export const BDPlaylistMock = [
  {
    img: FindTopicImg,
    title: "Частушка",
    author: "karna.val",
    playlist: "How to Start Podcast",
    listeners: "2,412",
    music: "Karnaval - частушка.mp3",
  },
  {
    img: InviteFriendsImg,
    title: "У России три пути",
    author: "GSPD",
    playlist: "How to Start Podcast",
    listeners: "2,341",
    music: "GSPD - У России три пути.mp3",
  },
  {
    img: HowMakeImg,
    title: "Радиопомехи",
    author: "ZxC",
    playlist: "How to Start Podcast",
    listeners: "1,212",
    music: "ZxC - Радиопомехи.mp3",
  },
  {
    img: InvestPodcastImg,
    title: "Ахегао",
    author: "Мейби Бэйби",
    playlist: "How to Start Podcast",
    listeners: "3,123",
    music: "Мейби Бэйби - ахегао.mp3",
  },
  {
    img: InvestPodcastImg,
    title: "От винта!",
    author: "kochneva, Смешарики",
    playlist: "How to Start Podcast",
    listeners: "3,123",
    music: "kochneva - от винта!.mp3",
  },
  {
    img: InvestPodcastImg,
    title: "Черный бумер",
    author: "Серёга",
    playlist: "How to Start Podcast",
    listeners: "3,123",
    music: "Серёга - Черный бумер.mp3",
  },
];
