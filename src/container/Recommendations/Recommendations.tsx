import { FC } from "react";
import {
  ListContainer,
  Section,
  StyledBanner,
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
  console.log({ filteredData });
  return (
    <Section>
      <ListContainer totallistitems={filteredData.length}>
        {filteredData.map((item) => (
          <StyledListItem>
            <StyledBanner textLevel="p">
              {item["f:navn"]}
              <span>{item["f:leverandor_tekst"]}</span>
            </StyledBanner>
            <StyledDescriptionList>
              <div>
                <StyledDescriptionTerm>
                  Markedsomraade Boliglan
                </StyledDescriptionTerm>
                <StyledDescriptionDetail>
                  {item["f:markedsomraadeBoliglan"]}
                </StyledDescriptionDetail>
              </div>
              <div>
                <StyledDescriptionTerm>Publiser Fra</StyledDescriptionTerm>
                <StyledDescriptionDetail>
                  {item["f:publiserFra"]}
                </StyledDescriptionDetail>
              </div>
              <div>
                <StyledDescriptionTerm>Markedsomraade</StyledDescriptionTerm>
                <StyledDescriptionDetail>
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
