import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeLayout from './components/HomeLayout';
import CodaPage from './pages/coda/CodaPage';
import { Container } from '@mui/material';
import DimeDivePage from './pages/coda/DimeDivePage';
import HomePage from './pages/HomePage';

export default function App() {

  return (
    <Container disableGutters component="div" maxWidth={false}>
      <BrowserRouter basename="/finsights-docs">
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path="" element={<HomePage />} />
            <Route path="/wealth-track">
              <Route path="" element={<CodaPage />} />
              <Route path="dime-dive" element={<DimeDivePage />} />
            </Route>
            <Route path="/lending">
              <Route path="" element={<HomePage />} />
            </Route>
            <Route path="/aa-connect">
              <Route path="finsense" element={<HomePage />} />
              <Route path="connect-hub" element={<HomePage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}
