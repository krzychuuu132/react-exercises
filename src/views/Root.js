import React from 'react';
import { Wrapper } from './Root.styles';
import { Route } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from 'views/Dashboard';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import { Routes, Navigate } from 'react-router-dom';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Navigate to="/group" replace />} />
          <Route path="/group" element={<Dashboard />}>
            <Route path=":id" element={<Dashboard />} />
          </Route>
        </Routes>
      </Wrapper>
    </MainTemplate>
  );
};

const UnauthenticatedApp = () => {
  const { register, handleSubmit } = useForm();
  const auth = useAuth();

  return (
    <form
      style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
      onSubmit={handleSubmit(auth.signIn)}
    >
      <FormField label="login" name="login" id="login" {...register('login')} />
      <FormField label="password" name="password" id="password" {...register('password')} />
      <Button type="submit">Sign In</Button>
    </form>
  );
};

const Root = () => {
  const auth = useAuth();

  return auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default Root;
