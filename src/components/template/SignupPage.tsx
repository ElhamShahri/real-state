"use client";

import Link from "next/link";
import React, { useState } from "react";

function SignupPage() {
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [rePassword, setRePassword] = useState<String>("");
  return (
    <div className="content ">
      <div className="title_blue">فرم ثبت نام</div>
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="text-blue-700 mt-3">تکرار رمز عبور</p>
        <input
          type="password"
          className="w-64 textField__input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn mt-4" type="submit">
          ثبت نام
        </button>
      </form>
      <p className="p-2 text-neutral-600">
         حساب کاربری دارید؟
        <Link href="/signin" className="ms-2 text-blue-700 underline underline-offset-8">ورود</Link>
      </p>
    </div>
  );
}

export default SignupPage;
