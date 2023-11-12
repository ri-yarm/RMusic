import BannerImg from "assets/images/BodyContent/BCBanner/Banner.jpg";
import styled from "styled-components";
import { Sizes } from "styles/Namespace/Sizes.ts";

const ContainerSC = styled.section`
  width: 100%;
  height: 280px;

  margin-bottom: 20px;
  padding: 0 30px 30px 30px;

  display: flex;
  align-items: end;
  justify-content: space-between;

  background: url("${BannerImg}");
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: calc(${Sizes.DEFAULT}px + 4px);

  cursor: pointer;

  box-sizing: border-box;
`;

const FollowSC = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TextContainerSC = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TitleContainerSC = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

const AuthorSC = styled.div`
  display: flex;
  gap: ${Sizes.DEFAULT}px;
`;

export const styles = {
  ContainerSC,
  FollowSC,
  TextContainerSC,
  TitleContainerSC,
  AuthorSC,
};
