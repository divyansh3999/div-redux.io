import React from "react";
import DashComp from "./DashComp";
import DashHeader from "./DashHeader";
import DashSidebar from "./DashSidebar";
import "../style.css"

export default function Dashboard() {
  return (
    <>
      <DashHeader></DashHeader>
      <div className="container-fluid">
        <div className="row">
          <DashSidebar></DashSidebar>
          <DashComp></DashComp>
        </div>
      </div>
    </>
  );
}
