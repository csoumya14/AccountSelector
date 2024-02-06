import styled from "styled-components";
import { Banner } from "../../components/Banner/Banner";

export const Section = styled.section`
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

export const ListContainer = styled.ul<{ totallistitems: number }>`
  ${(props) =>
    props.totallistitems &&
    `
  display: grid;
  list-style-type: none;
  max-width:60vw;
  grid-gap: 2rem;
  grid-template-rows:  repeat(${props.totallistitems} 1fr);   
  grid-template-columns: repeat(1, 1fr);
  overflow-y:scroll;
  padding: 1rem ; 
  `}
`;

export const StyledListItem = styled.li`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  cursor: grab;
  padding: 2rem;
  justify-content: space-around;
  border-radius: 4px;
  background-color: white;
  box-shadow: 5px 9px 18px hsl(180, 29%, 50%, 0.3);
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
  color: ${(props) => props.theme.palette.neutral.darkDesaturatedBlue};
`;

export const StyledButton = styled.button`
  padding: 1rem;
  width: 50%;
  justify-self: center;
  border: none;
  background: #ffffff;
  border-radius: 10px;
  &:hover {
    background: ${(props) => props.theme.palette.neutral.darkDesaturatedBlue};
    color: #ffffff;
  }
`;
