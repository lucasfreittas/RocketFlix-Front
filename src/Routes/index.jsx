import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './app.routes';
import { LoginRoutes } from './login.routes';

export function Routes(){
    return(
        <BrowserRouter>
            <LoginRoutes />
        </BrowserRouter>
    )
}