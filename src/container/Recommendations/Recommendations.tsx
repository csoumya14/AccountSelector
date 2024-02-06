import { FC, useState } from "react";
import {
  ListContainer,
  Section,
  StyledBanner,
  StyledButton,
  StyledDescriptionDetail,
  StyledDescriptionList,
  StyledDescriptionTerm,
  StyledListItem,
} from "./Recommendations.style";
import { DataType } from "../../types/dataType";

interface RecommendationsTypes {
  filteredData: DataType[];
}

export const Recommendations: FC<RecommendationsTypes> = ({ filteredData }) => {
  // const [itemsToShow, setItemsToShow] = useState(3);
  /* const loadMoreItems = () => {
    setItemsToShow((prevItems) => prevItems + 3); // Increase the number of items to show
  }; */
  // const dataToShow = filteredData.slice(0, 10);

  return (
    <Section>
      <ListContainer totalListItems={filteredData.length}>
        {filteredData.map((item) => (
          <StyledListItem>
            <StyledBanner textLevel="p">
              {item["f:navn"]}
              <span>{item["f:leverandor_tekst"]}</span>
            </StyledBanner>
            <StyledDescriptionList>
              <div>
                <StyledDescriptionTerm className="fontBarlowCondensed">
                  Markedsomraade Boliglan
                </StyledDescriptionTerm>
                <StyledDescriptionDetail className="fontBellefair">
                  {item["f:markedsomraadeBoliglan"]}
                </StyledDescriptionDetail>
              </div>
              <div>
                <StyledDescriptionTerm className="fontBarlowCondensed">
                  Publiser Fra
                </StyledDescriptionTerm>
                <StyledDescriptionDetail className="fontBellefair">
                  {item["f:publiserFra"]}
                </StyledDescriptionDetail>
              </div>
              <div>
                <StyledDescriptionTerm className="fontBarlowCondensed">
                  Markedsomraade
                </StyledDescriptionTerm>
                <StyledDescriptionDetail className="fontBellefair">
                  {item["f:markedsomraade"]}
                </StyledDescriptionDetail>
              </div>
            </StyledDescriptionList>
          </StyledListItem>
        ))}
      </ListContainer>
    </Section>
  );
};
