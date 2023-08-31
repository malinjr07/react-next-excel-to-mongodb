type childrenProps = {
  children: React.ReactNode;
};
interface MongoDbUrlContextProps {
  readonly mongoUrl: string;
  readonly setMongoUrl: (userData: string) => void;
  /*   readonly loadUserData: () => Promise<void>; */
}

