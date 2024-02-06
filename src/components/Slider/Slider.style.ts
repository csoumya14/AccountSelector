import ReactSlider from "react-slider";
import styled from "styled-components";
import { FieldSet } from "../FieldSet/FieldSet";
import { Banner } from "../Banner/Banner";

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

export const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 1.5rem;
`;

export const StyledThumb = styled.div`
  height: 1.5rem;
  line-height: 1.5rem;
  width: 25px;
  text-align: center;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  cursor: grab;
`;

export const StyledTrack = styled.div<{ index: number }>`
  ${(props) =>
    props.index &&
    `
      top: 0;
    bottom: 0;
    background: ${props.index === 1 ? "#71797E" : "#D3D3D3"};
    border-radius: 999px;
  `}
`;

export const StyledAgeValue = styled(Banner)`
  padding: 1rem;
  border: 1px solid #000000;
  align-self: flex-end;
  background-color: ${(props) => props.theme.palette.neutral.white};
`;
