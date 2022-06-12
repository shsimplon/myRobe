export type user = {
  id: string;
  email: string;
  password: string;
  access_token?: string;
};

export type userComplete = {
  name?: string;
  address?: string;
  phone?: string;
  email?: string;
  password?: string;
  role?: string;
};

export type userStore = {
  user: user | null;
  isLogged: boolean;
};
