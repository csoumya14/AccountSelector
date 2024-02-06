import React, { useEffect, useState } from "react";
import "./App.css";
import xml2js from "xml2js";
import { myTheme } from "./themes/ThemeVariables";
import { Home } from "./container/Home/Home";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./themes/GlobalStyles";
import Header from "./container/Header/Header";
import { DataType } from "./types/dataType";

export const App = () => {
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
            console.log(jsonData)
          }
        });
      } catch (error) {
        console.error("Error fetching XML data:", error);
      }
    };
    fetchData();
  },[]);

  // console.log(jsonData.feed.entry);

  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <Header />
      <main>
        <Home jsonData={jsonData} setJsonData={setJsonData}/>
      </main>
    </ThemeProvider>
  );
};

export default App;


