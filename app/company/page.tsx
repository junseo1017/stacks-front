import React from "react";
import Card from "../component/company/Card";
import Header from "../component/company/Header";
import Search from "../component/company/Search";
import Category from "../component/company/Category";
import CardList from "../component/company/CardList";
import Navigation from "../component/common/Navigation";

export default function Company() {
  return (
    <div>
      <Navigation />
      <Header />
      <Search />
      <Category />
      <CardList />
    </div>
  );
}
