
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
    { id: 'upi', name: 'UPI', icon: Smartphone, color: 'from-green-500 to-emerald-600' },
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, color: 'from-blue-500 to-indigo-600' },
    { id: 'netbanking', name: 'Net Banking', icon: Building2, color: 'from-purple-500 to-violet-600' },
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
      <DialogContent className="max-w-md p-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 border-0 shadow-2xl">
        <div className="relative">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white p-6 rounded-t-lg">
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
                  <div className="flex items-center bg-white rounded-xl border-2 border-gray-200 focus-within:border-blue-500 transition-colors">
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
                        className="h-8 w-8 p-0 hover:bg-gray-100"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={incrementAmount}
                        className="h-8 w-8 p-0 hover:bg-gray-100"
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
                <div className="grid grid-cols-3 gap-2">
                  {presetAmounts.map((preset) => (
                    <Button
                      key={preset}
                      variant={selectedPreset === preset ? "default" : "outline"}
                      onClick={() => handlePresetClick(preset)}
                      className={`h-12 font-semibold transition-all duration-200 ${
                        selectedPreset === preset
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                          : 'hover:bg-blue-50 hover:border-blue-300'
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
                Payment Method
              </label>
              <div className="space-y-2">
                {paymentMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={method.id}
                      className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                        paymentMethod === method.id
                          ? 'ring-2 ring-blue-500 bg-blue-50'
                          : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setPaymentMethod(method.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${method.color} text-white`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="font-medium text-gray-800">{method.name}</span>
                          <div className="ml-auto">
                            <div className={`w-4 h-4 rounded-full border-2 ${
                              paymentMethod === method.id
                                ? 'bg-blue-500 border-blue-500'
                                : 'border-gray-300'
                            }`}>
                              {paymentMethod === method.id && (
                                <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
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
              <Card className="bg-gradient-to-r from-gray-50 to-slate-100 border border-gray-200">
                <CardContent className="p-4">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Payment Summary
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Recharge Amount</span>
                      <span className="font-semibold">₹{numericAmount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">GST (18%)</span>
                      <span className="font-semibold">₹{taxAmount}</span>
                    </div>
                    <div className="border-t border-gray-300 pt-2 mt-2">
                      <div className="flex justify-between">
                        <span className="font-bold text-gray-800">Total Amount</span>
                        <span className="font-bold text-lg text-blue-600">₹{totalAmount}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Action Button */}
            <Button
              disabled={!amount || numericAmount <= 0}
              className="w-full h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {numericAmount > 0 ? `Pay ₹${totalAmount}` : 'Enter Amount'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WalletRechargeDialog;
