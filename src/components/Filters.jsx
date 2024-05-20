import React, { useState } from "react";
import FormInput from "./FormInput";
import { Form, Link } from "react-router-dom";
import FormRange from "./FormRange";
import FormSelect from "./FormSelect";

const Filters = () => {
  const [selectCategoryList, setSelectCategoryList] = useState([
    "all",
    "shoes",
    "t-shirt",
    "jacket",
  ]);

  return (
    <Form className="bg-base-200 flex flex-col p-4 gap-4 h-fit">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue=""
      />
      {/* CATEGORIES */}
      <FormSelect
        label="select category"
        name="category"
        list={selectCategoryList}
        size="select-sm"
        defaultValue="all"
      />

      {/* BUTTONS */}

      <button
        type="submit"
        className="btn rounded-none bg-blue-600 hover:bg-blue-500 text-white btn-sm"
      >
        search
      </button>
      <Link to="/shop" className="btn rounded-none btn-primary btn-sm">
        reset
      </Link>
    </Form>
  );
};

export default Filters;
