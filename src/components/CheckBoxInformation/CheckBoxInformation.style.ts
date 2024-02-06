import styled from "styled-components";
import { FieldSet } from "../FieldSet/FieldSet";

export const StyledFieldSet = styled(FieldSet)`
  border: 0;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  color: ${(props) => props.theme.palette.neutral.darkDesaturatedBlue};
  legend {
    font-size: 23px;
  }
`;

export const StyledCheckBoxContainer = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 23px;
  padding: 0.5rem;
`;
