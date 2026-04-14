"use client";

import React, { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

export type AuthContextType = {
  isLoggedIn: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  isLoginModalOpen: boolean;
  login: () => void;
  logout: () => void;
};

const AUTH_STORAGE_KEY = "hugmeid:isLoggedIn";
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    try {
      setIsLoggedIn(window.localStorage.getItem(AUTH_STORAGE_KEY) === "true");
    } catch {
      setIsLoggedIn(false);
    }
  }, []);

  const openLoginModal = useCallback(() => setIsLoginModalOpen(true), []);
  const closeLoginModal = useCallback(() => setIsLoginModalOpen(false), []);

  const login = useCallback(() => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);

    try {
      window.localStorage.setItem(AUTH_STORAGE_KEY, "true");
    } catch {
      // ignore storage errors
    }
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);

    try {
      window.localStorage.removeItem(AUTH_STORAGE_KEY);
    } catch {
      // ignore storage errors
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, openLoginModal, closeLoginModal, isLoginModalOpen, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
