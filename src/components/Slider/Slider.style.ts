import ReactSlider from "react-slider";
import styled from "styled-components";

export const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 25px;
`;

export const StyledThumb = styled.div`
  height: 25px;
  line-height: 25px;
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
    background: ${props.index === 2 ? "#f00" : props.index === 1 ? "#0f0" : "#ddd"};
    border-radius: 999px;
  `}
`;
