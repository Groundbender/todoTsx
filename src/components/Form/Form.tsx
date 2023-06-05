import { ChangeEvent, useState } from "react";
import {
  FormControl,
  FormBlock,
  FormField,
  FormLabel,
  FormWrapper,
} from "./Form.styled";

import plusIcon from "../../assets/images/plus.png";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { setInputValue } from "../../feature/form";
export const Form = (props: {
  createNewToDo: Function;
  notifyAdd: Function;
}) => {
  // const [text, setText] = useState<string>("");
  const formValue = useSelector((state: RootState) => state.formValue.value);
  const dispatch = useDispatch();

  const formSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (formValue) {
      props.notifyAdd(formValue);
      props.createNewToDo(formValue);
      // setText("");
      dispatch(setInputValue(""));
    }
  };

  // const changeText = (event: ChangeEvent<HTMLInputElement>) => {
  //   // console.log(event.target.value);
  //   createText = event.target.value;
  // };

  return (
    <FormWrapper>
      <FormBlock action="#" onSubmit={formSubmit}>
        <FormLabel>
          <FormField
            value={formValue}
            type="text"
            onChange={(e) => dispatch(setInputValue(e.target.value))}
          />
          <FormControl icon={plusIcon} />
        </FormLabel>
      </FormBlock>
    </FormWrapper>
  );
};
