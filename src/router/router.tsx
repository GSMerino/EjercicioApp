import { createHashRouter } from 'react-router';
import { HomePage } from '../Post/pages/Home/HomePage';

export const RouterApp = createHashRouter([
    {
        path: '/',
        element: <HomePage />,
        
    },
    {
        path: 'post/:id',
        element: ''
    }
]);