import { createContext } from 'react';

const AuthContext = createContext({ token: '', saveToken: '' });

export default AuthContext;
