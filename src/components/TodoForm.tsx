import React, { ChangeEvent, FormEventHandler } from "react";
import { HarborReactWrapperComponents } from "./common/HarborReactWrapperComponents";

const TodoForm = (
   {
      onSubmit,
      onInputChange,
      inputValue
   }
      :
      {
         onSubmit: FormEventHandler<HTMLFormElement>;
         onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
         inputValue: string;
      }
) => {

   const [HbrButton] = HarborReactWrapperComponents(['hbr-button'])

   return (
      <form onSubmit={onSubmit}>
         <HbrButton variant="outline">Fake HBR Button (does nothing)</HbrButton>
         <div style={{display:"flex", marginTop: "2rem"}}>
         <input
            placeholder="What would you like to get done?"
            onChange={onInputChange}
            value={inputValue}
         />
         <button>Create</button>
         </div>
      </form>
   );
};

export default TodoForm;