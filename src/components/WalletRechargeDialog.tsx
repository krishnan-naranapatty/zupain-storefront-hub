
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Wallet, CreditCard, Smartphone, Building2, X, Plus, Minus } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface WalletRechargeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WalletRechargeDialog = ({ open, onOpenChange }: WalletRechargeDialogProps) => {
  const { currentPalette } = useTheme();
  const [amount, setAmount] = useState('');
  const [selectedPreset, setSelectedPreset] = useState<number | null>(null);
  const [paymentMethod, setPaymentMethod] = useState('upi');

  const presetAmounts = [100, 500, 1000, 2000, 5000, 10000];
  
  const paymentMethods = [
    { id: 'upi', name: 'UPI', icon: Smartphone },
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard },
    { id: 'netbanking', name: 'Net Banking', icon: Building2 },
  ];

  const handlePresetClick = (presetAmount: number) => {
    setAmount(presetAmount.toString());
    setSelectedPreset(presetAmount);
  };

  const handleAmountChange = (value: string) => {
    setAmount(value);
    setSelectedPreset(null);
  };

  const incrementAmount = () => {
    const currentAmount = parseInt(amount) || 0;
    setAmount((currentAmount + 100).toString());
    setSelectedPreset(null);
  };

  const decrementAmount = () => {
    const currentAmount = parseInt(amount) || 0;
    if (currentAmount >= 100) {
      setAmount((currentAmount - 100).toString());
      setSelectedPreset(null);
    }
  };

  const calculateTax = (amount: number) => {
    return Math.round(amount * 0.18); // 18% GST
  };

  const numericAmount = parseInt(amount) || 0;
  const taxAmount = calculateTax(numericAmount);
  const totalAmount = numericAmount + taxAmount;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-0 bg-white border-2 border-gray-200 shadow-2xl">
        <div className="relative">
          {/* Header with theme color */}
          <div className={`${currentPalette.primary} text-white p-6 rounded-t-lg`}>
            <DialogHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/20 rounded-full">
                    <Wallet className="w-5 h-5" />
                  </div>
                  <DialogTitle className="text-xl font-bold">Add Money to Wallet</DialogTitle>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onOpenChange(false)}
                  className="text-white hover:bg-white/20 h-8 w-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </DialogHeader>
          </div>

          <div className="p-6 space-y-6">
            {/* Amount Input Section */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Enter Recharge Amount
                </label>
                <div className="relative">
                  <div className={`flex items-center bg-white rounded-xl border-2 border-gray-300 focus-within:border-blue-500 transition-colors shadow-sm`}>
                    <span className="pl-4 text-gray-500 font-medium">₹</span>
                    <Input
                      type="number"
                      value={amount}
                      onChange={(e) => handleAmountChange(e.target.value)}
                      placeholder="0"
                      className="border-0 text-xl font-bold focus-visible:ring-0 bg-transparent"
                    />
                    <div className="flex items-center pr-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={decrementAmount}
                        className="h-8 w-8 p-0 hover:bg-gray-100 rounded-full"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={incrementAmount}
                        className="h-8 w-8 p-0 hover:bg-gray-100 rounded-full"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Preset Amount Buttons */}
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-3 block">
                  Quick Select
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {presetAmounts.map((preset) => (
                    <Button
                      key={preset}
                      variant={selectedPreset === preset ? "default" : "outline"}
                      onClick={() => handlePresetClick(preset)}
                      className={`h-12 font-semibold transition-all duration-300 transform hover:scale-105 ${
                        selectedPreset === preset
                          ? `${currentPalette.primary} text-white shadow-lg hover:opacity-90`
                          : 'border-gray-300 hover:bg-gray-50 hover:border-gray-400 bg-white'
                      }`}
                    >
                      ₹{preset}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-gray-700 block">
                Choose Payment Method
              </label>
              <div className="space-y-3">
                {paymentMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={method.id}
                      className={`cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] ${
                        paymentMethod === method.id
                          ? `ring-2 ring-blue-500 ${currentPalette.secondary} shadow-md`
                          : 'hover:bg-gray-50 border-gray-200 bg-white'
                      }`}
                      onClick={() => setPaymentMethod(method.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-3 rounded-xl ${currentPalette.primary} text-white shadow-sm`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="font-medium text-gray-800 flex-1">{method.name}</span>
                          <div className="ml-auto">
                            <div className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                              paymentMethod === method.id
                                ? `${currentPalette.primary.replace('bg-', 'bg-')} border-blue-500`
                                : 'border-gray-300 bg-white'
                            }`}>
                              {paymentMethod === method.id && (
                                <div className="w-3 h-3 bg-white rounded-full m-0.5"></div>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Payment Summary */}
            {numericAmount > 0 && (
              <Card className={`${currentPalette.secondary} border border-gray-200 shadow-sm`}>
                <CardContent className="p-5">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center text-lg">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Payment Summary
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Recharge Amount</span>
                      <span className="font-semibold text-gray-800">₹{numericAmount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">GST (18%)</span>
                      <span className="font-semibold text-gray-800">₹{taxAmount}</span>
                    </div>
                    <div className="border-t border-gray-300 pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-800 text-base">Total Amount</span>
                        <span className={`font-bold text-xl ${currentPalette.primary.replace('bg-', 'text-')}`}>₹{totalAmount}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Action Button */}
            <Button
              disabled={!amount || numericAmount <= 0}
              className={`w-full h-14 ${currentPalette.primary} hover:opacity-90 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none rounded-xl`}
            >
              {numericAmount > 0 ? `Pay ₹${totalAmount} 💳` : 'Enter Amount'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WalletRechargeDialog;
