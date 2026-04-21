export const getUser = () => {
  if (typeof window === "undefined") return null;
  return JSON.parse(localStorage.getItem("user") || "null");
};

export const hasPermission = (permission: string) => {
  const user = getUser();
  if (!user) return false;

  return user.permissions?.includes(permission);
};