/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import React from "react";
import { useForm } from "react-hook-form";

function NyobaUpload() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input ref={register} type="file" name="file" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NyobaUpload;
