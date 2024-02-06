import styled from "styled-components";
import { Banner } from "../../components/Banner/Banner";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: transparent;
`;

export const Wrapper = styled.div`
  width: 70%;
`;

export const Heading = styled(Banner)`
  font-size: 40px;
  text-align: center;
  color: ${(props) => props.theme.palette.neutral.darkDesaturatedBlue};
`;

export const InformationText = styled(Banner)`
  font-size: 30px;
  text-align: center;
  color: ${(props) => props.theme.palette.neutral.darkDesaturatedBlue};
`;
