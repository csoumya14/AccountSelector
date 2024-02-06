import styled from "styled-components";
import { Banner } from "../../components/Banner/Banner";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
  background-color: transparent;
`;

export const Wrapper = styled.div`
  width: 60%;
`;

export const Heading = styled(Banner)`
  font-size: 40px;
  text-align: center;
  color: ${(props) => props.theme.palette.neutral.darkDesaturatedBlue};
`;
