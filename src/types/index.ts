interface MenuProps {
  toggleMenu: () => void;
  isOpen: boolean;
}

interface User {
  firstname: string;
  lastname: string;
  email: string;
  avatar: string;
  token: string;
}

interface UserData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

interface AuthContextValues {
  authenticated: boolean;
  user: User | null;
  authenticate: (userDetails: User) => void;
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
