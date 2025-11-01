import React from "react";

interface DescriptionItem {
  label?: string;
  text: string;
}

interface CommodityDescriptionProps {
  intro?: string;
  items: (string | DescriptionItem)[];
}

export const CommodityDescription: React.FC<CommodityDescriptionProps> = ({
  intro,
  items,
}) => {
  // List format for items with labels
  return (
    <>
      {intro && <p>{intro}</p>}
      <ul className="list-disc pl-5 mt-2 space-y-1">
        {items.map((item, index) => {
          if (typeof item === "string") {
            return <li key={index}>{item}</li>;
          }
          return (
            <li key={index}>
              {item.label && <span className="font-bold">{item.label}:</span>}{" "}
              {item.text}
            </li>
          );
        })}
      </ul>
    </>
  );
};

// Helper function to create description items
export const createDescriptionItem = (
  label?: string,
  text?: string
): DescriptionItem => ({
  label,
  text,
});
