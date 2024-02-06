import { FC } from "react";
import ReactSlider from "react-slider";
import { StyledSlider, StyledThumb, StyledTrack } from "./Slider.style";

interface SliderTypes {}



interface StateTypes {
  index: number;
  value: number | readonly number[];
  valueNow?: number;
}

export const Slider: FC<SliderTypes> = () => {
  const Track = (props: any, state: StateTypes) => (
    <StyledTrack {...props} index={state.index} />
  );
  const Thumb = (props:any, state:StateTypes) => (
    <StyledThumb {...props}>{state.valueNow}</StyledThumb>
  );
  return (
    <StyledSlider
      defaultValue={[50, 75]}
      renderTrack={Track}
      renderThumb={Thumb}
      onBeforeChange={(value, index) =>
        console.log(`onBeforeChange: ${JSON.stringify({ value, index })}`)
      }
      onChange={(value, index) =>
        console.log(`onChange: ${JSON.stringify({ value, index })}`)
      }
      onAfterChange={(value, index) =>
        console.log(`onAfterChange: ${JSON.stringify({ value, index })}`)
      }
      
    />
  );
};
