import { hash, compare } from "bcryptjs";
async function hashPassword(password: string) {
  const hashPassword = await hash(password, 12);
  return hashPassword;
}

async function verifyPassword(password: string, hashedPassword: string) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}

export { hashPassword, verifyPassword };
