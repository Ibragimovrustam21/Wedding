import React, { useState } from 'react'
import { AuthModal } from '../components/Auth/AuthModal'
import { Footer } from '../components/Footer/Footer'
import { Navbar } from '../components/Navbar/Navbar'

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <>
      <AuthModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
      <header>
        <Navbar setIsModalVisible={setIsModalVisible} />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
