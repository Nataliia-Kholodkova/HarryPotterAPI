import { createContext, useContext } from 'react';

export const FormContext = createContext({});
export const useFormContext = () => useContext(FormContext);

export const AppContext = createContext({});
export const useAppContext = () => useContext(AppContext);
