import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeLayout from './components/HomeLayout';
import { Container } from '@mui/material';
import WealthScapePage from './pages/WealthScapePage';
import HomePage from './pages/HomePage';

export default function App() {

  return (
    <Container disableGutters component="div" maxWidth={false}>
      <BrowserRouter basename="/finsights-docs">
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path="" element={<HomePage />} />
            <Route path="/wealth-scape" element={<WealthScapePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}
