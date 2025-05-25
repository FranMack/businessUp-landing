import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  type: "text" | "email" | "password";
  placeHolder?: string;
  [x: string]: any;
}

export const ContactInput = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="w-[70%] flex flex-col">
        <label className="text-[0.8rem] text-primary" htmlFor={props.name}>
          {label}
        </label>
        <input
          className="w-[100%] h-[4.5vh] pl-[2%] border-[1px]"
          style={{ borderColor: `${meta.touched && meta.error ? "red" : ""}` }}
          {...field}
          {...props}
        />
        <ErrorMessage
          name={props.name}
          component="span"
          className='text-red-600 text-[0.7rem]'
        />
      </div>
    </>
  );
};
