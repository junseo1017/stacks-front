"use client";

import React from "react";
import { InfoArea } from "../../component/company/InfoArea";
import { PrimaryButton } from "../../component/common/PrimaryButton";
import { Divider } from "../../component/common/Divider";
import { StackSelectArea } from "../../component/company/StackSelectArea";
import { ADD_CATEGORY } from "../../constants/company/AddCategory";
import { addCompany } from "../../actions/company/companyApis";
import { useFormInputStore } from "../../store/useFormInputStore";
import { useSelectedStackStore } from "../../store/useSelectedStackStore";

export default function Add() {
  const { inputForm } = useFormInputStore();
  const { selected } = useSelectedStackStore();
  function submitHandler() {
    addCompany(inputForm, selected);
  }
  return (
    <form className="border border-gray-400 rounded-2xl shadow p-6 w-2/3 mx-auto">
      <InfoArea />
      <Divider />
      {ADD_CATEGORY.map((e, i) => {
        return (
          <React.Fragment key={i}>
            <StackSelectArea text={e.name} id={e.id} />
            <Divider />
          </React.Fragment>
        );
      })}
      <PrimaryButton text="Submit" submitHandler={submitHandler} />
    </form>
  );
}
