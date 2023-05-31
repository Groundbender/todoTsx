import { ChangeEvent, useState } from "react";
import "./Form.scss";

export const Form = (props: { createNewToDo: Function }) => {
  const [text, setText] = useState<string>("");

  const formSubmit = (event: any) => {
    event.preventDefault();
    if (text) {
      props.createNewToDo(text);
      setText("");
    }
  };

  // const changeText = (event: ChangeEvent<HTMLInputElement>) => {
  //   // console.log(event.target.value);
  //   createText = event.target.value;
  // };

  return (
    <div className="form-wrapper">
      <form action="#" onSubmit={formSubmit}>
        <label>
          <input
            value={text}
            type="text"
            onChange={(e) => setText(e.target.value)}
          />
          <button></button>
        </label>
      </form>
    </div>
  );
};
