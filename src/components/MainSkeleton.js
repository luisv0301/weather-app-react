import React from "react";
import CardSkeleton from "./skeleton parts/CardSkeleton";
import HeaderSkeleton from "./skeleton parts/HeaderSkeleton";

export default function MainSkeleton() {
  return (
    <>
      <HeaderSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}
