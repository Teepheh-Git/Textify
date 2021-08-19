import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import RegisterComponent from "../../components/signUp";
import envs from "../../config/env";
import axios from "../../helpers/axiosInterceptor";
import register from "../../context/actions/auth/register";
import { GlobalContext } from "../../context/Provider";

const Register = () => {

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const { authDispatch, authState: { error, loading, data, }, } = useContext(GlobalContext);
  // console.log(form);

  // useEffect(() => {
  //   axiosInstance.get("/contacts").catch((err) => {
  //     console.log("err ", err.response);
  //   });
  // }, []);


  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });

    if (value !== "") {
      if (name === "password") {
        if (value.length < 8) {
          setErrors((prev) => {
            return { ...prev, [name]: " This field requires 8 min characters" };
          });
        } else {
          setErrors((prev) => {
            return { ...prev, [name]: null };
          });
        }
      } else {
        setErrors((prev) => {
          return { ...prev, [name]: null };
        });
      }
    } else {
      setErrors((prev) => {
        return { ...prev, [name]: " This field is required" };
      });
    }


  };
  const onSubmit = () => {

    if (!form.userName) {
      setErrors((prev) => {
        return { ...prev, userName: " please add a username" };
      });
    }

    if (!form.firstName) {
      setErrors((prev) => {
        return { ...prev, firstName: " please add First Name" };
      });
    }
    if (!form.lastName) {
      setErrors((prev) => {
        return { ...prev, lastName: " please add Last Name" };
      });
    }
    if (!form.Email) {
      setErrors((prev) => {
        return { ...prev, Email: " please add an Email" };
      });
    }
    if (!form.password) {
      setErrors((prev) => {
        return { ...prev, password: " please add a Password" };
      });
    }
    if (Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)) {


      register(form)(authDispatch);
    }


  };


  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );

};

export default Register;
