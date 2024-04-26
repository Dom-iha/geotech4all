import { ReactElement } from "react";

export interface NavbarLink {
  route: string;
  label: string;
}
export interface SidebarLink {
  route: string;
  label: string;
  icon: ReactElement | null;
}
interface MenuProps {
  toggleMenu: () => void;
  isOpen: boolean;
}
interface ArticeType {
  title: string;
  excerpt: string;
  image: string | File;
}
interface ArticleProps {
  id:string;
  title: string;
  excerpt: string;
  content: string;
  cover: string;
  createdAt: string;
  author: string;
}
interface User {
  name: string;
  email: string;
  avatar?: string;
  role: string;
}

interface UserData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

interface AuthContextValues {
  token: string | null;
  authenticated: boolean;
  user: User | null;
  authenticate: (userDetails: User) => void;
  logout: () => void;
}

// Type definitions for reducer function
type State = {
  authenticated: boolean;
  user: User | null;
};

type Action = {
  type: string;
  payload?: any;
};
