"use client";

import useCountries from "@/app/hooks/useCountries";
import Select from "react-select";

export type CountrySelectValue = {
  flaf: string;
  label: string;
  latlag: number[];
  region: string;
  value: string;
};

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  const { getAll, getByValue } = useCountries();
  return (
    <div className="relative z-[999]">
      <Select
        options={getAll()}
        isClearable
        placeholder="Anywhere"
        formatOptionLabel={(option: any) => {
          return (
            <div className="flex flex-row gap-3 items-center">
              <div>{option.flag}</div>
              <div>
                {option.label},{" "}
                <span className="text-neutral-500 ml-1">{option.region}</span>
              </div>
            </div>
          );
        }}
        classNames={{
          control: () => "p-3 border-2",
          input: () => "text-lg",
          option: () => "text-lg",
        }}
        value={value}
        onChange={(value) => onChange(value)}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "black",
            primary25: "#ffe4e6",
          },
        })}
      />
    </div>
  );
};

export default CountrySelect;
