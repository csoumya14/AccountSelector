import { FC, useEffect, useState } from "react";
import { Container } from "./Home.style";
import { DataType } from "../../types/dataType";
import xml2js from "xml2js";
import { YourInformationSection } from "../AboutYou/YourInformationSection";
import { Recommendations } from "../Recommendations/Recommendations";

interface HomeTypes {}

export const Home: FC<HomeTypes> = () => {
  const [filteredData, setFilteredData] = useState<DataType[]>([]);
  const [jsonData, setJsonData] = useState<DataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("banksparing.xml");
        const rawXml = await response.text();

        // Parse XML to JSON
        xml2js.parseString(rawXml, (error: any, result: any) => {
          if (error) {
            console.error("Error converting XML to JSON:", error);
          } else {
            setJsonData(result.feed.entry);
          }
        });
      } catch (error) {
        console.error("Error fetching XML data:", error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
