import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BandInput from "./BandInput";
import { bandAdded } from "./bandsSlice";

function BandsContainer() {

  const bands = useSelector((state) => state.bands.entities);
  const dispatch = useDispatch();
  const bandList = bands.map((band, index) => (
    <li key={index}>{band}</li>
  ))

  function addBand(name){
    dispatch(bandAdded(name))
  }

  return (
  <div>
    <BandInput onBandSubmit={addBand}/>
    {bandList}
  </div>
  );
}

export default BandsContainer;
