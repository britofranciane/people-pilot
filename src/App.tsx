import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Home, User } from './pages/index';
import AppProviders from './context/AppProviders';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AppProviders>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user/new" element={<User />} />
              <Route path="/user/edit/:id" element={<User />} />
            </Routes>
            <Footer />
          </Router>
        </AppProviders>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
