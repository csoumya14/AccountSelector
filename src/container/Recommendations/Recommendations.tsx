import { FC } from "react";
import {
  ListContainer,
  Section,
  StyledBanner,
  StyledDescriptionDetail,
  StyledDescriptionList,
  StyledDescriptionTerm,
  StyledListItem,
  StyledTitle,
  Wrapper,
} from "./Recommendations.style";
import { DataType } from "../../types/dataType";

interface RecommendationsTypes {
  filteredData: DataType[];
}

export const Recommendations: FC<RecommendationsTypes> = ({ filteredData }) => {
  return (
    <Section>
      <StyledTitle textLevel={"h2"}>
        Din anbefalinger
        <span>{filteredData.length} anbefalinger</span>
      </StyledTitle>
      <ListContainer>
        {filteredData.map((item) => (
          <StyledListItem key={item["id"][0]}>
            <div>
              <StyledBanner textLevel="p">
                {item["f:navn"]}
                <span>{item["f:leverandor_tekst"]}</span>
              </StyledBanner>
              <StyledDescriptionList>
                <Wrapper>
                  <StyledDescriptionTerm>
                    Markedsomraade Boliglan
                  </StyledDescriptionTerm>
                  <StyledDescriptionDetail>
                    {item["f:markedsomraadeBoliglan"]}
                  </StyledDescriptionDetail>
                </Wrapper>
                <Wrapper>
                  <StyledDescriptionTerm>Publiser Fra</StyledDescriptionTerm>
                  <StyledDescriptionDetail>
                    {item["f:publiserFra"]}
                  </StyledDescriptionDetail>
                </Wrapper>
                <Wrapper>
                  <StyledDescriptionTerm>Markedsomraade</StyledDescriptionTerm>
                  <StyledDescriptionDetail>
                    {item["f:markedsomraade"]}
                  </StyledDescriptionDetail>
                </Wrapper>
                <Wrapper>
                  <StyledDescriptionTerm>Minimum alder</StyledDescriptionTerm>
                  <StyledDescriptionDetail>
                    {item["f:min_alder"]}
                  </StyledDescriptionDetail>
                </Wrapper>
                <Wrapper>
                  <StyledDescriptionTerm>Maximum alder</StyledDescriptionTerm>
                  <StyledDescriptionDetail>
                    {item["f:maks_alder"]}
                  </StyledDescriptionDetail>
                </Wrapper>
                {item["f:produktpakke_tekst"][0] !== "" && (
                  <Wrapper>
                    <StyledDescriptionTerm>Produkt Pakke</StyledDescriptionTerm>
                    <StyledDescriptionDetail>
                      {item["f:produktpakke_tekst"]}
                    </StyledDescriptionDetail>
                  </Wrapper>
                )}
                <Wrapper>
                  <StyledDescriptionTerm>Maksimum Belop</StyledDescriptionTerm>
                  <StyledDescriptionDetail>
                    {item["f:maks_belop"]}
                  </StyledDescriptionDetail>
                </Wrapper>
              </StyledDescriptionList>
            </div>
          </StyledListItem>
        ))}
      </ListContainer>
    </Section>
  );
};
