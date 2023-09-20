"use client";

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";

import { Color, Size } from "@/types";

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
  categories?:boolean;
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey,categories }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="mb-8 pl-10 md:pl-2">
      <h3 className="py-5 text-3xl text-white italic sm:text-xl sm:pb-2">{name}</h3>

      <div className={`flex flex-col gap-2 sm:flex-row `}>
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <button
              className={`text-sm bg-black rounded-xl transition-all  text-white px-5 py-2 sm:text-[0.8rem] sm:px-1 sm:py-1 sm:w-12 ${
                selectedValue === filter.id && "bg-white !text-black"
              }
              `}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
