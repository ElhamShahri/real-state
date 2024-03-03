"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
import { signIn } from "next-auth/react";

function SigninPage() {
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signinHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

   
    setLoading(false);
    if (res?.error)
    {
      toast.error(res.error);
    
    } else {
      router.push("/");
    }

  };

  return (
    <div className="content ">
      <p className="title_blue">فرم ورود</p>
      <form className="auth_form">
        <p className="text-blue-700">ایمیل</p>
        <input
          type="text"
          className="textField__input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="w-64 text-blue-700 mt-3">رمز عبور</p>
        <input
          type="password"
          className="w-64 textField__input"
          onChange={(e) => setPassword(e.target.value)}
        />
        {loading ? (
          <ThreeDots
            color="#304ffe"
            height={45}
            ariaLabel="three-dots-loading"
            visible={true}
            wrapperStyle={{ margin: "auto" }}
          />
        ) : (
          <button className="btn mt-4" onClick={signinHandler} type="submit">
            ورود
          </button>
        )}
      </form>
      <div className="p-2 text-neutral-600">
        حساب کاربری ندارید؟
        <Link
          href="/signup"
          className="ms-2 text-blue-700 underline underline-offset-8"
        >
          ثبت نام
        </Link>
        <Toaster />
      </div>
    </div>
  );
}

export default SigninPage;
