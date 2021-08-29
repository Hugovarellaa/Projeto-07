import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransacionsProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleModalOpen() {
    setIsNewTransactionModalOpen(true);
  }
  function handleModalClose() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransacionsProvider>
      <Header onOpenNewTransactionModal={handleModalOpen} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleModalClose}
      />
      <GlobalStyle />
    </TransacionsProvider>
  );
}
