import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import User from "@/models/User";
// import connectDB from "@/utils/connectDB";
import connectDB from "../../../../utils/connectDB";
import { verifyPassword } from "@/utils/auth";

const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connectDB();
          // Assuming you'll do something with email and password here
        } catch (error) {
          throw new Error("مشکلی در سرور رخ داده است.");
        }

        if (!email || !password) {
          throw new Error("مشکلی در سرور رخ داده است.");
        }

        const user = await User.findOne({ email });
        if (!user) throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید");
        const isValid = await verifyPassword(password, user.password);
        if (!isValid) throw new Error("ایمیل یا رمز عبور اشتباه است");
        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

// export default NextAuth(authOptions);

