import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  type: "text" | "email" | "password";
  placeHolder?: string;
  [x: string]: unknown;
}

export const ContactInput = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="xs:w-[80%] lg:w-[70%] flex flex-col">
        <label className="text-[0.8rem] text-primary" htmlFor={props.name}>
          {label}
        </label>
        <input
          className="w-[100%] xs:h-[5vh] phoneLandscape:h-[8vh]  lg:h-[5vh] pl-[2%] border-[1px]"
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
