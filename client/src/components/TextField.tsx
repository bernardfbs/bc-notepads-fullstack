type TextFieldProps = {
  placeholder: string;
  value: string;
};

export function TextField({ placeholder, value }: TextFieldProps) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      type="text"
      className="border rounded-lg outline-none focus:border-green-500 py-1 px-2"
    />
  );
}
