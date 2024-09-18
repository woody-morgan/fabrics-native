import { instance } from "@/api/instance";
import { userSchema } from "@/api/users/user";

export default async (id: number) => {
  const response = await instance.get(`users/${id}`).json();
  return userSchema.parse(response);
};
