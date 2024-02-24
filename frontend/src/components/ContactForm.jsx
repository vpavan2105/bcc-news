import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [disabled, setDisabled] = useState(false);

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      setDisabled(true);
      toast.success("Form Submitted. We will get back to you soon.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Bounce,
      });
    } catch (e) {
      console.error(e);
    } finally {
      setDisabled(false);
      reset();
    }
  };

  return (
    <>
      {/* Your form HTML */}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Name Input */}
        <input
          type="text"
          {...register("name", {
            required: "Please enter your name",
            maxLength: { value: 30, message: "Please use 30 characters or less" },
          })}
          placeholder="Name"
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
        
        {/* Email Input */}
        <input
          type="email"
          {...register("email", {
            required: "Please enter your email",
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/,
              message: "Please enter a valid email address",
            },
          })}
          placeholder="Email address"
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
        
        {/* Subject Input */}
        <input
          type="text"
          {...register("subject", {
            required: "Please enter a subject",
            maxLength: { value: 75, message: "Subject cannot exceed 75 characters" },
          })}
          placeholder="Subject"
        />
        {errors.subject && <p className="error">{errors.subject.message}</p>}
        
        {/* Message Input */}
        <textarea
          rows={3}
          {...register("message", { required: "Please enter a message" })}
          placeholder="Message"
        />
        {errors.message && <p className="error">{errors.message.message}</p>}
        
        {/* Submit Button */}
        <button type="submit" disabled={disabled}>
          Submit
        </button>
      </form>
      <ToastContainer />
    </>
  );
};