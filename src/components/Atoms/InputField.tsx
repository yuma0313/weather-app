interface InputFieldProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  onChange,
  onKeyDown,
  className,
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={className}
    />
  );
};

export default InputField;
export type { InputFieldProps };
