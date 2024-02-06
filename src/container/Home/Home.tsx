import { FC, useState } from "react";
import { Container } from "./Home.style";
import { DataType } from "../../types/dataType";
import { YourInformationSection } from "../AboutYou/YourInformationSection";
import { Recommendations } from "../Recommendations/Recommendations";

interface HomeTypes {
  jsonData: DataType[];
  setJsonData: React.Dispatch<React.SetStateAction<DataType[]>>;
}

export const Home: FC<HomeTypes> = ({ jsonData, setJsonData }) => {
  const [filteredData, setFilteredData] = useState<DataType[]>([]);
  console.log(filteredData);
  return (
    <Container>
      <YourInformationSection
        jsonData={jsonData}
        setFilteredData={setFilteredData}
      />
      <Recommendations filteredData={filteredData} />
    </Container>
  );
};
