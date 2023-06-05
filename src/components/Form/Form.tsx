import { ChangeEvent, useState } from "react";
import {
  FormControl,
  FormBlock,
  FormField,
  FormLabel,
  FormWrapper,
} from "./Form.styled";

import plusIcon from "../../assets/images/plus.png";

export const Form = (props: {
  createNewToDo: Function;
  notifyAdd: Function;
}) => {
  const [text, setText] = useState<string>("");

  const formSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (text) {
      props.notifyAdd(text);
      props.createNewToDo(text);
      setText("");
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
            value={text}
            type="text"
            onChange={(e) => setText(e.target.value)}
          />
          <FormControl icon={plusIcon} />
        </FormLabel>
      </FormBlock>
    </FormWrapper>
  );
};
