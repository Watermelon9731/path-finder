import React, { ChangeEvent } from "react";

interface Props {
  value: string | number;
  label: string;
  onChange: (value: ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string | number; name: string }[];
  isDisabled?: boolean;
}

export default function Select({
  value,
  label,
  onChange,
  options,
  isDisabled,
}: Props) {
  return (
    <div className="flex flex-col items-start gap-1">
      <label className="text-xs text-gray-400 ml-1" htmlFor={label}>
        {label}
      </label>
      <select
        disabled={isDisabled}
        className="bg-gray-200 disabled:pointer-events-none rounded-md cursor-pointer hover:bg-gray-300 transition ease-in active:ring-0 active:border-0 p-2 min-w-[150px] sm:min-w-full"
        id={label}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
