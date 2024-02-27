"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

function SignupPage() {
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [rePassword, setRePassword] = useState<String>("");

  const signupHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (password !== rePassword) {
      toast.error("رمز و تکرار آن برابر نیست");

      return;
    }

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers:{"Content-Type":"application/json"},
    });

    const data = await res.json()
    console.log(res.status)
  };

  return (
    <div className="content ">
      <p className="title_blue">فرم ثبت نام</p>
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
        <p className="text-blue-700 mt-3">تکرار رمز عبور</p>
        <input
          type="password"
          className="w-64 textField__input"
          onChange={(e) => setRePassword(e.target.value)}
        />
        <button className="btn mt-4" onClick={signupHandler} type="submit">
          ثبت نام
        </button>
      </form>
      <div className="p-2 text-neutral-600">
        حساب کاربری دارید؟
        <Link
          href="/signin"
          className="ms-2 text-blue-700 underline underline-offset-8">
          ورود
        </Link>
        <Toaster />
      </div>
    </div>
  );
}

export default SignupPage;
