export const InputForm = ({ inputProp }) => {
  return (
    <input
      className="bg-white border w-full rounded-md outline-none py-2 px-3"
      {...inputProp}
    />
  );
};

export const SelectForm = ({ selectProp, defaultValue, options }) => {
  return (
    <select
      className="bg-white border w-full rounded-md outline-none py-2 px-3"
      {...selectProp}
    >
      <option value="">{defaultValue}</option>
      {options?.map((option, index) => (
        <option key={index} value={option?.tipo}>
          {option?.tipo}
        </option>
      ))}
    </select>
  );
};

export const TextareaForm = ({ textareaProp }) => {
  return (
    <textarea
      className="bg-white border h-36 outline-none py-1 px-3 rounded-md w-full"
      {...textareaProp}
    ></textarea>
  );
};
