import { FC } from "react";
import { CheckBoxInformation } from "../../components/CheckBoxInformation/CheckBoxInformation";
import {
  Container,
  StyledBanner,
} from "./YourInformationSection.style";
import { DataType } from "../../types/dataType";
import { Slider } from "../../components/Slider/Slider";

interface YourInformationSectionTypes {
  jsonData: DataType[];
  setFilteredData: React.Dispatch<React.SetStateAction<DataType[]>>;
}

export const YourInformationSection: FC<YourInformationSectionTypes> = ({
  jsonData,
  setFilteredData,
}) => {
  return (
    <Container>
      <StyledBanner textLevel={"h2"}>Fortell oss om deg selv</StyledBanner>
      <CheckBoxInformation
        jsonData={jsonData}
        setFilteredData={setFilteredData}
      />
      <Slider setFilteredData={setFilteredData} jsonData={jsonData}/>
    </Container>
  );
};
