"use client";

import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import Button from "../Button";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import useLoginModal from "@/app/hooks/useLoginModal";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback): void => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Logged In");
        router.refresh();
        loginModal.onClose();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome back" subTitle="Login to your account!" center />
      <Input
        disabled={isLoading}
        register={register}
        required
        type="email"
        label="Email"
        id="email"
        errors={errors}
      />
      <Input
        disabled={isLoading}
        register={register}
        required
        type="password"
        label="Password"
        id="password"
        errors={errors}
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-3 mt-3">
      <hr />
      <Button
        outline
        Icon={FcGoogle}
        label="Continue with Google"
        onClick={() => {}}
      />
      <Button
        outline
        Icon={AiFillGithub}
        label="Continue with Github"
        onClick={() => {}}
      />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="flex flex-row items-center justify-center gap-2">
          <div>Already have an account?</div>
          <div
            className="text-neutral-800 cursor-pointer hover:underline"
            onClick={loginModal.onClose}
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      title="Login"
      body={bodyContent}
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel="continue"
      footer={footerContent}
    />
  );
};

export default LoginModal;
