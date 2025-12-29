import { createBrowserRouter } from 'react-router';
import { HomePage } from '../Post/pages/Home/HomePage';
import { PostPage } from '../Post/pages/Post/PostPage';

export const RouterApp = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        
    },
    {
        path: 'post/:id',
        element: <PostPage />
    }
]);