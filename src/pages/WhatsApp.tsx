
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import WhatsAppAccount from '@/components/whatsapp/WhatsAppAccount';
import WhatsAppMessages from '@/components/whatsapp/WhatsAppMessages';
import WhatsAppCompose from '@/components/whatsapp/WhatsAppCompose';
import { User, MessageSquare, PenTool } from 'lucide-react';

const WhatsApp = () => {
  const [activeTab, setActiveTab] = useState('account');

  const tabs = [
    { id: 'account', label: 'Account', icon: User, component: WhatsAppAccount },
    { id: 'messages', label: 'Messages', icon: MessageSquare, component: WhatsAppMessages },
    { id: 'compose', label: 'Compose', icon: PenTool, component: WhatsAppCompose },
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || WhatsAppAccount;

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">WhatsApp</h1>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div>
          <ActiveComponent />
        </div>
      </div>
    </Layout>
  );
};

export default WhatsApp;
