import { createContext } from './framework/context';
import { useContext } from './framework/hooks';

export const AppContext = createContext({});
export const useAppContext = () => useContext(AppContext);
