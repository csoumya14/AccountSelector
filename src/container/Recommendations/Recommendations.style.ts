import styled from "styled-components";
import { Banner } from "../../components/Banner/Banner";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  flex: 1;
`;

export const StyledBanner = styled(Banner)`
  color: ${(props) => props.theme.palette.primary.strongCyan};
  font-size: 28px;
  font-weight: 700;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  span {
    font-weight: 400;
    color: ${(props) => props.theme.palette.primary.lightRed};
    font-size: 16px;
  }
`;

export const ListContainer = styled.ul`
  display: grid;
  list-style-type: none;
  max-width: 60vw;
  grid-gap: 2rem;
  grid-template-columns: repeat(1, 1fr);
  overflow-y: scroll;
  padding: 1rem;
`;

export const StyledListItem = styled.li`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: grab;
  padding: 2rem;
  justify-content: space-around;
  border-radius: 4px;
  background-color: white;
  box-shadow: 5px 9px 18px hsl(180, 29%, 50%, 0.3);
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledDescriptionList = styled.dl`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
`;

export const StyledDescriptionTerm = styled.dt`
  text-transform: uppercase;
  font-size: 14px;
  color: ${(props) => props.theme.palette.primary.lightRed};
`;

export const StyledDescriptionDetail = styled.dd`
  text-transform: uppercase;
  font-size: 18px;
  padding: 0.5rem 0rem;
  margin-inline-start: none;
  color: ${(props) => props.theme.palette.neutral.darkDesaturatedBlue};
`;

export const StyledTitle = styled(Banner)`
  align-self: center;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.palette.neutral.darkDesaturatedBlue};
  span {
    font-size: 13px;
  }
`;

export const StyledRecommendationNumber = styled(Banner)`
  align-self: flex-end;
  color: ${(props) => props.theme.palette.neutral.darkDesaturatedBlue};
`;
