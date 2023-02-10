import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  }

  const closeSidebar = () => {
    setSidebarOpen(false);
  }

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }



  return <AppContext.Provider value={{
    isModalOpen,
    isSidebarOpen,
    openModal,
    openSidebar,
    closeModal,
    closeSidebar
   }}>{children}</AppContext.Provider>
}

// custom hook

export const useGlobalContext = () => {
  return useContext(AppContext);
}


export {AppProvider}