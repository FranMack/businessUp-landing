import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  placeHolder?: string;
  [x: string]: unknown;
}

export const ContactTextArea = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="xs:w-[80%] lg:w-[70%] flex flex-col">
        <label className="text-[0.8rem] text-primary" htmlFor={props.name}>
          {label}
        </label>
        <textarea
          className="w-[100%] xs:h-[12vh] phoneLandscape:h-[20vh] lg:h-[12vh] pl-[2%] border-[1px]"
          style={{ borderColor: `${meta.touched && meta.error ? "red" : ""}` }}
          {...field}
          {...props}
        />
        <ErrorMessage
          name={props.name}
          component="span"
          className="text-red-600 text-[0.7rem]"
        />
      </div>
    </>
  );
};
