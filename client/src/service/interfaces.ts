export interface AppContextType {
  authToken: string | null;
  user: any;
  setUser: (user: any) => void;
  logout: () => void;
  setAuthToken: (token: string | null) => void;
}
