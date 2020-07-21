import { createContext } from 'react';

const AuthContext = createContext({ token: '', saveToken: '', user: '', saveUser: '' });

export default AuthContext;
