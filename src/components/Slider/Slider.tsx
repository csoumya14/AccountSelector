import { FC, useState } from "react";
import {
  StyledAgeValue,
  StyledFieldSet,
  StyledSlider,
  StyledThumb,
  StyledTrack,
} from "./Slider.style";
import { DataType } from "../../types/dataType";

interface SliderTypes {
  jsonData: DataType[];
  setFilteredData: React.Dispatch<React.SetStateAction<DataType[]>>;
}

interface StateTypes {
  index: number;
  value: number | readonly number[];
  valueNow?: number;
}

export const Slider: FC<SliderTypes> = ({ jsonData, setFilteredData }) => {
  const [val, setValue] = useState<number | readonly number[]>(0);
  const handleChange = (newValue: number | readonly number[]) => {
    setValue(newValue);
    const filteredDataValues = jsonData.filter(
      (item) => item["f:min_alder"][0] >= `${val}`
    );
    setFilteredData(filteredDataValues);
  };
  const Track = (props: any, state: StateTypes) => <StyledTrack {...props} />;
  const Thumb = (props: any, state: StateTypes) => (
    <StyledThumb {...props}>{state.valueNow}</StyledThumb>
  );
  return (
    <StyledFieldSet title="Hvor gammel er du?">
      <StyledAgeValue textLevel="p">{val}</StyledAgeValue>
      <StyledSlider
        renderTrack={Track}
        renderThumb={Thumb}
        onChange={(value, index) => handleChange(value)}
      />
    </StyledFieldSet>
  );
};
