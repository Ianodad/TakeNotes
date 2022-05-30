import React from "react";
import { iconProps } from "../constants/models";

export const AddIcon = ({ className }: iconProps) => {
  return (
    <svg className={className} viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M37.5 5.35714C55.1786 5.35714 69.6429 19.8214 69.6429 37.5C69.6429 55.1786 55.1786 69.6429 37.5 69.6429C19.8214 69.6429 5.35714 55.1786 5.35714 37.5C5.35714 19.8214 19.8214 5.35714 37.5 5.35714ZM37.5 0C16.875 0 0 16.875 0 37.5C0 58.125 16.875 75 37.5 75C58.125 75 75 58.125 75 37.5C75 16.875 58.125 0 37.5 0Z"
        fill="#AEAEAE"
      />
      <path
        d="M59 34.8125H40.1875V16H34.8125V34.8125H16V40.1875H34.8125V59H40.1875V40.1875H59V34.8125Z"
        fill="#AEAEAE"
      />
    </svg>
  );
};
