
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const ChangePlan = () => {
  const { currentPalette } = useTheme();
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const plans = [
    {
      id: 'yearly',
      name: 'YEARLY',
      subtitle: 'Best for Enterprise use',
      price: '₹583.33',
      period: '/month',
      badge: 'Billed Yearly',
      badgeColor: 'bg-green-100 text-green-800',
      features: [
        'Responsive Website Builder',
        'Free Hosting with SSL',
        'Unlimited Bandwidth',
        '50GB File storage',
        'Customer & Sales Reports'
      ]
    },
    {
      id: 'basic',
      name: 'BASIC',
      subtitle: 'Best for business use',
      price: '₹590.00',
      period: '/month',
      badge: 'Billed Half-Yearly',
      badgeColor: 'bg-blue-100 text-blue-800',
      features: [
        'Responsive Website Builder',
        'Free Hosting with SSL',
        'Unlimited Bandwidth',
        '50GB File storage',
        'Customer & Sales Reports'
      ]
    },
    {
      id: 'gg',
      name: 'GG',
      subtitle: 'or',
      price: '₹0.17',
      period: '/month',
      badge: 'Billed Half-Yearly',
      badgeColor: 'bg-green-100 text-green-800',
      features: [
        'Unlimited Bandwidth',
        '50GB File storage',
        'Customer & Sales Reports',
        'Payments & Shipping Integrations',
        'Basic Coupons'
      ]
    }
  ];

  return (
    <div className={`min-h-screen ${currentPalette.background}`}>
      <div className="flex">
        <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />
        
        <div className="flex-1">
          <Header onToggleSidebar={toggleSidebar} />
          
          <main className="p-6">
            <div className="mb-6">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/plans')}
                className="mb-4 p-0 h-auto font-normal text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Select subscription plan
              </Button>
              
              <p className="text-gray-600">
                Select a plan for your business starting as low as ₹27/day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <Card key={plan.id} className={`${currentPalette.cardBg} border relative`}>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Badge className={`${plan.badgeColor} hover:${plan.badgeColor} mb-3`}>
                        {plan.badge}
                      </Badge>
                      <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                      <p className="text-sm text-gray-600">{plan.subtitle}</p>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-baseline">
                        <span className="text-2xl font-bold">{plan.price}</span>
                        <span className="text-sm text-gray-600 ml-1">{plan.period}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Features</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <Check className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      className={`w-full ${currentPalette.primary} text-white hover:opacity-90`}
                      onClick={() => {
                        // Handle plan selection
                        console.log(`Selected plan: ${plan.name}`);
                        navigate('/plans');
                      }}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ChangePlan;
