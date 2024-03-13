import { useState } from "react";

import {
  IoMapOutline,
  IoEllipsisHorizontalCircle,
  IoDuplicateOutline,
  IoGitMergeOutline,
} from "react-icons/io5";

interface props {
  data: string[];
}
const IndividualBlueprint = ({ data }: props) => {
  const [hidden, setHidden] = useState("hidden");

  const handleEllipsisClick = () => {
    if (hidden === "") {
      setHidden("hidden");
    } else {
      setHidden("");
    }
  };

  const slicedData = data.slice(1);
  return (
    <div className="mt-12 ml-4">
      <div className="flex relative">
        <div className=" flex gap-5">
          <IoMapOutline className="text-3xl" />
          <p className="text-lg">{data[0]}</p>
        </div>
        <div className="absolute right-6">
          <button onClick={handleEllipsisClick} className="mr-4">
            <IoEllipsisHorizontalCircle className="text-3xl" />
          </button>

          <button>
            <IoDuplicateOutline className="text-3xl" />
          </button>
        </div>
      </div>

      <div className={`ml-12 ${hidden}`}>
        {slicedData.map((value, key) => (
          <div key={key} className="flex gap-3 mt-2">
            <IoGitMergeOutline className="text-3xl" />
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndividualBlueprint;
