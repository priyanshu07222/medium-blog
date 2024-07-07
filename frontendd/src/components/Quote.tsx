import React from "react";

export const Quote = () => {
  return (
    <div className="bg-slate-200 h-screen flex justify-center">
      <div className="flex flex-col gap-2 justify-center">
        <div className="max-w-lg  text-2xl font-bold ">
          "The customer support I received was exceptional, The support team
          went above and beyound to address my concerns"
        </div>
        <div>
          <div className="max-w-md  text-lg  font-semibold">
            Julies Windield
          </div>
          <div className="max-w-md  text-md font-light text-gray-500 ">
            CEO | Acne corp
          </div>
        </div>
      </div>
    </div>
  );
};
