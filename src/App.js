import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root';
import Search from '../src/components/Pages/Search';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Main from './components/Pages/Main';
import { theme } from './styles/base/theme';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`

${reset}


*{
 box-sizing : border-box;
 font-family: 'Pretendard', sans-serif !important;
}

a{
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
  button{
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  .swiper-slide {
  height: auto !important;
}


`;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,

    children: [
      { index: true, path: '/', element: <Main /> },
      { path: '/search/:keyword', element: <Search /> },
    ],
  },
]);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
