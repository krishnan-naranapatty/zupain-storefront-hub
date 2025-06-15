
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { useTheme } from '@/contexts/ThemeContext';
import WhatsAppAccount from '@/components/whatsapp/WhatsAppAccount';
import WhatsAppMessages from '@/components/whatsapp/WhatsAppMessages';
import WhatsAppCompose from '@/components/whatsapp/WhatsAppCompose';

const WhatsApp: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { currentPalette } = useTheme();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />
      
      <div className="flex-1 flex flex-col">
        <Header onToggleSidebar={toggleSidebar} />
        
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">WhatsApp</h1>
            </div>

            <Card className="bg-white shadow-sm">
              <CardContent className="p-0">
                <Tabs defaultValue="account" className="w-full">
                  <div className="border-b border-gray-200">
                    <TabsList className="grid w-full grid-cols-3 bg-transparent h-auto p-0 rounded-none">
                      <TabsTrigger 
                        value="account" 
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-transparent px-6 py-3"
                      >
                        Account
                      </TabsTrigger>
                      <TabsTrigger 
                        value="messages" 
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-transparent px-6 py-3"
                      >
                        Messages
                      </TabsTrigger>
                      <TabsTrigger 
                        value="compose" 
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-transparent px-6 py-3"
                      >
                        Compose
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="account" className="mt-0 p-6">
                    <WhatsAppAccount />
                  </TabsContent>

                  <TabsContent value="messages" className="mt-0 p-6">
                    <WhatsAppMessages />
                  </TabsContent>

                  <TabsContent value="compose" className="mt-0 p-6">
                    <WhatsAppCompose />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WhatsApp;
