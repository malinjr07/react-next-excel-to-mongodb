'use client';

import React, { FC, createContext, useState } from 'react';

export const MongoDbUrl = createContext<MongoDbUrlContextProps>({
  setMongoUrl: () => null,
  mongoUrl: '',
});

const ContextComponent: FC<childrenProps> = ({ children }) => {
  const [mongoUrl, setMongoUrl] = useState('');
  return (
    <MongoDbUrl.Provider value={{ mongoUrl, setMongoUrl }}>
      {children}
    </MongoDbUrl.Provider>
  );
};

export default ContextComponent;

