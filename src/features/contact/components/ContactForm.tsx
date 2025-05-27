"use client";

import { Form, Formik } from "formik";
import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { FormValues } from "../interface/contact.interfaces";
import { ContactService } from "../service/contact.service";
import { ContactInput } from "./ContactInput";
import { ContactTextArea } from "./ContactTextArea";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ContactForm = () => {
  const refContactForm = useScrollAnimation<HTMLFormElement>("efectoReveal");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const initialValue: FormValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(50, "Debe tener máximo 50 caracteres")
      .required("Requerido"),
    email: Yup.string().required("Requerido").email("Email inválido"),
    phone: Yup.string()
      .max(50, "Debe tener máximo 50 caracteres")
      .required("Requerido"),
    message: Yup.string()
      .max(500, "Debe tener máximo 500 caracteres")
      .required("Requerido"),
  });

  const onSubmit = async (
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    if (isLoading) return;
    setIsLoading(true);

    const consultInfo = {
      name: values.name,
      message: values.message,
      email: values.email,
      phone: values.phone,
    };

    try {
      const sendMessage = await ContactService.sendMessage(consultInfo);

      if (!sendMessage.ok) {
        throw new Error("No se pudo enviar el mensaje");
      }

      toast.success("Mensaje enviado", {
        style: { backgroundColor: "#693f91", color: "#ffff" },
        hideProgressBar: true,
        autoClose: 4000,
      });

      // 🔄 Limpiar formulario
      resetForm();
    } catch (error) {
      console.error(error);
      toast.error("Error al enviar mensaje", {
        style: { backgroundColor: "#ff4d4f", color: "#fff" },
        hideProgressBar: true,
        autoClose: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form
          ref={refContactForm!}
          onSubmit={formik.handleSubmit}
          className=" xs:w-[80%] lg:w-[65%] bg-gradient-soft flex flex-col gap-y-[1vh] items-center rounded-xl py-[5%] custom-shadow"
        >
          <ContactInput label="Nombre" name="name" type="text" />
          <ContactInput label="Email" name="email" type="text" />
          <ContactInput label="Teléfono" name="phone" type="text" />
          <ContactTextArea label="Mensaje" name="message" />

          <button
            type="submit"
            disabled={isLoading}
            className="mt-[2vh] xs:w-[80%] lg:w-[70%] h-[6vh] bg-primary rounded-xl text-[#ffff] font-semibold"
          >
            {isLoading ? (
              <BeatLoader color={"white"} speedMultiplier={0.4} />
            ) : (
              "Enviar"
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
};
function useScrollReveal<T>(arg0: string) {
  throw new Error("Function not implemented.");
}
