import React from "react";
import { ThemeProvider } from "./providers/ThemeProvider";
import { UserProvider } from "./providers/UserProvider";
import { NotificationProvider } from "./providers/NotificationProvider";
import Layout from "./components/Layout";
import { ComplexForm } from "./components/ComplexForm";
import { Header } from "./components/Header";
import { ItemList } from "./components/ItemList";
import { NotificationSystem } from "./components/NotificationSystem";

// 메인 App 컴포넌트
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <UserProvider>
          <Layout>
            <Header />
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 md:pr-4">
                  <ItemList />
                </div>
                <div className="w-full md:w-1/2 md:pl-4">
                  <ComplexForm />
                </div>
              </div>
            </div>
            <NotificationSystem />
          </Layout>
        </UserProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default App;
