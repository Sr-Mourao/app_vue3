import { useAuth } from "@/store/auth";

export const redirectIfAuthenticated = (to, from, next) => {
  const authStore = useAuth();
  if (authStore.isLoggendIn) {
    next({ name: "dashboard" });
  } else {
    next();
  }
};

export const auth = (to, from, next) => {
  const authStore = useAuth();
  if (!authStore.isLoggendIn) {
    next({ name: "login" });
  } else {
    next();
  }
};
