import { FC, useEffect, useState } from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import { FieldSet } from "../FieldSet/FieldSet";
import { DataType } from "../../types/dataType";
import {
  StyledCheckBoxContainer,
  StyledFieldSet,
} from "./CheckBoxInformation.style";

interface CheckBoxInformationTypes {
  jsonData: DataType[];
  setFilteredData: React.Dispatch<React.SetStateAction<DataType[]>>;
}

const initialState = [
  { id: 1, labelText: "Jeg er en pensjonist", name: "f:pensjonist" },
  { id: 2, labelText: "Jeg er en student", name: "f:student" },
  {
    id: 3,
    labelText: "Jeg trenger månedlig sparing",
    name: "f:manedlig_sparing",
  },
  { id: 4, labelText: "Jeg trenger ikke pakke", name: "f:trenger_ikke_pakke" },
];

export const CheckBoxInformation: FC<CheckBoxInformationTypes> = ({
  jsonData,
  setFilteredData,
}) => {
  const [isSelected, setIsSelected] = useState(() => Array(4).fill(false));
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

  const handleCheckboxChange = (position: number) => {
    const updatedIsSelected = [...isSelected];
    updatedIsSelected[position] = !updatedIsSelected[position];
    setIsSelected(updatedIsSelected);

    // Filter the data based on selected checkboxes0
    const selectedCheckboxes = initialState
      .filter((item, i) => updatedIsSelected[i])
      .map((item) => item.name);

    setSelectedCheckboxes(selectedCheckboxes);

    const filteredDataValues = jsonData.filter((item) => {
      return selectedCheckboxes.every((checkbox) => {
        return item[checkbox as keyof DataType][0] === "true";
      });
    });

    setFilteredData(filteredDataValues);
  };

  return (
    <StyledFieldSet title="Velg alle som gjelder for deg:">
      {initialState.map((item, i) => (
        <StyledCheckBoxContainer>
          <Checkbox
            type="checkbox"
            name={item.name}
            value={""}
            id={item.name}
            checked={isSelected[i]}
            onChange={() => handleCheckboxChange(item.id - 1)}
            labelText={item.labelText}
          />
        </StyledCheckBoxContainer>
      ))}
    </StyledFieldSet>
  );
};
