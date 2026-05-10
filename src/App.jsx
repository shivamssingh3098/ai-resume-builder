import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ResumeProvider } from './context/ResumeContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import BuilderPage from './pages/BuilderPage';
import PreviewPage from './pages/PreviewPage';

export default function App() {
  return (
    <ResumeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="builder" element={<BuilderPage />} />
            <Route path="preview" element={<PreviewPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ResumeProvider>
  );
}
