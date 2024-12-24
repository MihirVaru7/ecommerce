
"use client";

import React from "react";
import { BiChevronDown, BiChevronRight, BiChevronUp } from "react-icons/bi";

const DetailCard = ({ title, content }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section className="relative flex flex-col gap-y-2.5">
      <div
        className="flex flex-row justify-between items-center bg-slate-100/80 hover:bg-slate-200/60 rounded-primary px-4 py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="">{title}</h2>
        {isOpen ? (
          <BiChevronUp className="h-5 w-5" />
        ) : (
          <BiChevronDown className="h-5 w-5" />
        )}
      </div>
      {isOpen && (
        <div className="flex flex-col gap-y-2">
          {content?.map((content, index) => (
            <p
              key={index}
              className="text-sm flex flex-row items-start gap-x-1.5 line-clamp-1"
            >
              <span className="">
                <BiChevronRight className="h-4 w-4" />
              </span>{" "}
              {content}
            </p>
          ))}
        </div>
      )}
    </section>
  );
};

export default DetailCard;
