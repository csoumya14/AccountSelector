import styled from "styled-components";
import { Banner } from "../../components/Banner/Banner";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  flex: 1;
`;

export const StyledLine = styled.div`
  border-top: 1px solid;
  border-color: ${(props) => props.theme.palette.neutral.lightGrayishBlue};
`;

export const StyledBanner = styled(Banner)`
  color: ${(props) => props.theme.palette.neutral.darkDesaturatedBlue};
`;
