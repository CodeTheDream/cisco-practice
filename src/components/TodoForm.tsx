import React, { ChangeEvent, FormEventHandler } from "react";

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

   return (
      <form onSubmit={onSubmit}>
         <input
            placeholder="What would you like to get done?"
            onChange={onInputChange}
            value={inputValue}
         />
         <button>Create</button>
      </form>
   );
};

export default TodoForm;