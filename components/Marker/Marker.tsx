import { useState } from "react";
import { OutdoorCrag } from "client";
import { MouseEvent } from "react";
import styles from "./Marker.module.css";

export interface MarkerProps {
  outdoorCrag: OutdoorCrag;
  lat: number;
  lng: number;
  onClick: (MouseEvent) => void;
}

function Marker({ outdoorCrag, onClick }: MarkerProps) {
  return (
    <div onClick={(e) => onClick(e)} className={styles.marker}>
      <span className={styles.hovertext} data-hover="Click here for crag info">
        🧗🏾‍♂️
      </span>
    </div>
  );
}

export default Marker;
