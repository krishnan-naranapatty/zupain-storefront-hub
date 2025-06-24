import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Upload, User, Globe, Building2, ShoppingCart, MapPin, Weight, Plus, Trash2, Info, Clock } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('Profile');
  const { currentPalette } = useTheme();

  const tabs = [
    'Profile',
    'Delivery Charges',
    'Delivery Slots',
    'Pages',
    'Store Feature',
    'Footer Management',
    'Integration'
  ];

  const ImageUploadBox = ({ title, dimensions, maxSize }: { title: string; dimensions: string; maxSize: string }) => (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
      <Upload className="h-8 w-8 mx-auto mb-4 text-gray-400" />
      <div className="text-sm text-gray-600 mb-2">Drag & drop files or Browse</div>
      <div className="text-xs text-gray-500 mb-1">{dimensions}</div>
      <div className="text-xs text-gray-400 mb-2">image aspect ratio for better fit</div>
      <div className="text-xs text-red-500">Max file size: image {maxSize}</div>
    </div>
  );

  const ProfileContent = () => (
    <div className="space-y-6">
      {/* Brand Information Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <User className="w-5 h-5" />
            <span>Brand Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Image Upload Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Brand Logo</Label>
              <ImageUploadBox title="Brand Logo" dimensions="1400 x 700px" maxSize="2MB" />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Admin logo</Label>
              <ImageUploadBox title="Admin Logo" dimensions="1400 x 700px" maxSize="2MB" />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Login Image</Label>
              <ImageUploadBox title="Login Image" dimensions="1920 x 1080px" maxSize="2MB" />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">OTP Image</Label>
              <div className="border border-gray-300 rounded-lg p-4">
                <img 
                  src="/lovable-uploads/4ff3d28b-2200-4f99-9ed2-66de37a21137.png" 
                  alt="OTP illustration" 
                  className="w-full h-24 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Additional Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Admin login Image</Label>
              <ImageUploadBox title="Admin Login Image" dimensions="1920 x 1080px" maxSize="2MB" />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Favicon Image</Label>
              <ImageUploadBox title="Favicon Image" dimensions="34 x 34px" maxSize="2MB" />
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-medium text-gray-900 mb-4">Business Details</h3>
                <div>
                  <Label htmlFor="owner-name" className="text-sm font-medium text-gray-700">
                    Owner Name <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="owner-name" 
                    defaultValue="Lokhal" 
                    className="mt-1" 
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    defaultValue="krishnan@lokhal.com" 
                    className="mt-1" 
                  />
                </div>
                <div>
                  <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                    Address <span className="text-red-500">*</span>
                  </Label>
                  <Textarea 
                    id="address" 
                    className="mt-1" 
                    rows={3} 
                  />
                </div>
                <div>
                  <Label htmlFor="country" className="text-sm font-medium text-gray-700">
                    Country <span className="text-red-500">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="India" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="india">India</SelectItem>
                      <SelectItem value="usa">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="city" className="text-sm font-medium text-gray-700">City</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Please select the city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mumbai">Mumbai</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-medium text-gray-900 mb-4">Contact Information</h3>
                <div>
                  <Label htmlFor="business-name" className="text-sm font-medium text-gray-700">
                    Business Name <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="business-name" 
                    defaultValue="Lokhal" 
                    className="mt-1" 
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex space-x-2 mt-1">
                    <Select>
                      <SelectTrigger className="w-24">
                        <SelectValue placeholder="+91" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="+91">+91</SelectItem>
                        <SelectItem value="+1">+1</SelectItem>
                        <SelectItem value="+44">+44</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input 
                      placeholder="Mobile Number" 
                      className="flex-1" 
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="state" className="text-sm font-medium text-gray-700">
                    State <span className="text-red-500">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Please select the state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="pincode" className="text-sm font-medium text-gray-700">
                    Pincode <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="pincode" 
                    placeholder="Pincode" 
                    className="mt-1" 
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const DeliveryChargesContent = () => {
    const [selectedMethod, setSelectedMethod] = useState('cart-price');
    const [cartPriceRules, setCartPriceRules] = useState([
      { minPrice: '', maxPrice: '', deliveryCharge: '' }
    ]);
    const [locationRules, setLocationRules] = useState([
      { country: '', state: '', district: '', deliveryCharge: '' }
    ]);
    const [weightRules, setWeightRules] = useState([
      { minWeight: '', maxWeight: '', deliveryCharge: '', details: '' }
    ]);

    const addCartPriceRule = () => {
      setCartPriceRules([...cartPriceRules, { minPrice: '', maxPrice: '', deliveryCharge: '' }]);
    };

    const addLocationRule = () => {
      setLocationRules([...locationRules, { country: '', state: '', district: '', deliveryCharge: '' }]);
    };

    const addWeightRule = () => {
      setWeightRules([...weightRules, { minWeight: '', maxWeight: '', deliveryCharge: '', details: '' }]);
    };

    const removeCartPriceRule = (index: number) => {
      setCartPriceRules(cartPriceRules.filter((_, i) => i !== index));
    };

    const removeLocationRule = (index: number) => {
      setLocationRules(locationRules.filter((_, i) => i !== index));
    };

    const removeWeightRule = (index: number) => {
      setWeightRules(weightRules.filter((_, i) => i !== index));
    };

    const deliveryMethods = [
      {
        id: 'cart-price',
        title: 'By Cart Price',
        description: 'Set delivery charges based on cart total amount',
        icon: ShoppingCart
      },
      {
        id: 'location',
        title: 'By Location',
        description: 'Set delivery charges based on customer location',
        icon: MapPin
      },
      {
        id: 'weight',
        title: 'By Weight (in Kg)',
        description: 'Set delivery charges based on total weight',
        icon: Weight
      }
    ];

    return (
      <div className="space-y-6">
        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start space-x-3">
          <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-blue-800 font-medium">Delivery Charges Configuration</p>
            <p className="text-xs text-blue-600 mt-1">
              Delivery charges will be set to default currency selected in Store feature
            </p>
          </div>
        </div>

        {/* Method Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Choose Delivery Charge Method</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedMethod} onValueChange={setSelectedMethod} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {deliveryMethods.map((method) => (
                <div key={method.id} className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <RadioGroupItem value={method.id} id={method.id} className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor={method.id} className="flex items-center space-x-3 cursor-pointer">
                      <method.icon className="w-5 h-5 text-gray-600" />
                      <div>
                        <div className="font-medium text-gray-900">{method.title}</div>
                        <div className="text-sm text-gray-500">{method.description}</div>
                      </div>
                    </Label>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Configuration Forms */}
        {selectedMethod === 'cart-price' && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-medium flex items-center space-x-2">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Cart Price Rules</span>
                </CardTitle>
                <Button onClick={addCartPriceRule} size="sm" className="flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Add Rule</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {cartPriceRules.map((rule, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500">
                  <CardContent className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                      <div>
                        <Label className="text-sm font-medium text-gray-700">
                          Minimum Price
                        </Label>
                        <Input
                          placeholder="1"
                          value={rule.minPrice}
                          onChange={(e) => {
                            const newRules = [...cartPriceRules];
                            newRules[index].minPrice = e.target.value;
                            setCartPriceRules(newRules);
                          }}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-700">
                          Maximum Price <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          placeholder="Enter max price"
                          value={rule.maxPrice}
                          onChange={(e) => {
                            const newRules = [...cartPriceRules];
                            newRules[index].maxPrice = e.target.value;
                            setCartPriceRules(newRules);
                          }}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-700">
                          Delivery Charge <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          placeholder="0"
                          value={rule.deliveryCharge}
                          onChange={(e) => {
                            const newRules = [...cartPriceRules];
                            newRules[index].deliveryCharge = e.target.value;
                            setCartPriceRules(newRules);
                          }}
                          className="mt-1"
                        />
                      </div>
                      <div className="flex justify-end">
                        {cartPriceRules.length > 1 && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeCartPriceRule(index)}
                            className="text-red-600 border-red-200 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        )}

        {selectedMethod === 'location' && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-medium flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Location-based Rules</span>
                </CardTitle>
                <Button onClick={addLocationRule} size="sm" className="flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Add Location</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {locationRules.map((rule, index) => (
                <Card key={index} className="border-l-4 border-l-green-500">
                  <CardContent className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                      <div>
                        <Label className="text-sm font-medium text-gray-700">Country</Label>
                        <Select value={rule.country} onValueChange={(value) => {
                          const newRules = [...locationRules];
                          newRules[index].country = value;
                          setLocationRules(newRules);
                        }}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="india">India</SelectItem>
                            <SelectItem value="usa">United States</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-700">
                          State <span className="text-red-500">*</span>
                        </Label>
                        <Select value={rule.state} onValueChange={(value) => {
                          const newRules = [...locationRules];
                          newRules[index].state = value;
                          setLocationRules(newRules);
                        }}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="maharashtra">Maharashtra</SelectItem>
                            <SelectItem value="delhi">Delhi</SelectItem>
                            <SelectItem value="karnataka">Karnataka</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-700">District</Label>
                        <Input
                          placeholder="Enter district"
                          value={rule.district}
                          onChange={(e) => {
                            const newRules = [...locationRules];
                            newRules[index].district = e.target.value;
                            setLocationRules(newRules);
                          }}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-700">
                          Delivery Charge (in ₹) <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          placeholder="Enter charge"
                          value={rule.deliveryCharge}
                          onChange={(e) => {
                            const newRules = [...locationRules];
                            newRules[index].deliveryCharge = e.target.value;
                            setLocationRules(newRules);
                          }}
                          className="mt-1"
                        />
                      </div>
                      <div className="flex justify-end">
                        {locationRules.length > 1 && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeLocationRule(index)}
                            className="text-red-600 border-red-200 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        )}

        {selectedMethod === 'weight' && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-medium flex items-center space-x-2">
                  <Weight className="w-5 h-5" />
                  <span>Weight-based Rules</span>
                </CardTitle>
                <Button onClick={addWeightRule} size="sm" className="flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Add Weight Rule</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {weightRules.map((rule, index) => (
                <Card key={index} className="border-l-4 border-l-purple-500">
                  <CardContent className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                      <div>
                        <Label className="text-sm font-medium text-gray-700">Details</Label>
                        <Input
                          placeholder="Example: 10kg"
                          value={rule.details}
                          onChange={(e) => {
                            const newRules = [...weightRules];
                            newRules[index].details = e.target.value;
                            setWeightRules(newRules);
                          }}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-700">Minimum Weight</Label>
                        <Input
                          placeholder="0.01"
                          value={rule.minWeight}
                          onChange={(e) => {
                            const newRules = [...weightRules];
                            newRules[index].minWeight = e.target.value;
                            setWeightRules(newRules);
                          }}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-700">
                          Maximum Weight <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          placeholder="Enter max weight"
                          value={rule.maxWeight}
                          onChange={(e) => {
                            const newRules = [...weightRules];
                            newRules[index].maxWeight = e.target.value;
                            setWeightRules(newRules);
                          }}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-700">
                          Delivery Charge <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          placeholder="Enter charge"
                          value={rule.deliveryCharge}
                          onChange={(e) => {
                            const newRules = [...weightRules];
                            newRules[index].deliveryCharge = e.target.value;
                            setWeightRules(newRules);
                          }}
                          className="mt-1"
                        />
                      </div>
                      <div className="flex justify-end">
                        {weightRules.length > 1 && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeWeightRule(index)}
                            className="text-red-600 border-red-200 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Save Button */}
        <div className="flex justify-end">
          <Button className={`${currentPalette.primary} text-white px-8`}>
            Save Configuration
          </Button>
        </div>
      </div>
    );
  };

  const DeliverySlotsContent = () => {
    const [deliverySlotEnabled, setDeliverySlotEnabled] = useState(true);
    const [showDeliveryDates, setShowDeliveryDates] = useState(true);
    const [deliveryDays, setDeliveryDays] = useState(7);
    const [orderProcessingTime, setOrderProcessingTime] = useState(true);
    const [processingTime, setProcessingTime] = useState('');
    const [maxOrdersPerSlot, setMaxOrdersPerSlot] = useState(true);
    const [maxOrders, setMaxOrders] = useState('');

    const daysOfWeek = [
      'Sunday',
      'Monday', 
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];

    const [daySlots, setDaySlots] = useState(
      daysOfWeek.reduce((acc, day) => ({
        ...acc,
        [day]: { enabled: true, slots: [] }
      }), {})
    );

    const addSlot = (day) => {
      setDaySlots(prev => ({
        ...prev,
        [day]: {
          ...prev[day],
          slots: [...prev[day].slots, { startTime: '', endTime: '', maxOrders: '' }]
        }
      }));
    };

    return (
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Clock className="w-6 h-6 text-gray-600" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Delivery Slot Management</h2>
              <p className="text-sm text-gray-500">Configure delivery time slots for your customers</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Label htmlFor="delivery-slot-toggle" className="text-sm font-medium">
              Enable Delivery Slots
            </Label>
            <Switch 
              id="delivery-slot-toggle"
              checked={deliverySlotEnabled}
              onCheckedChange={setDeliverySlotEnabled}
            />
          </div>
        </div>

        {deliverySlotEnabled && (
          <>
            {/* Configuration Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Show Delivery Dates */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-medium text-gray-900">Show my delivery dates upto</h3>
                      <p className="text-sm text-gray-500">Set how many days ahead customers can book</p>
                    </div>
                    <Switch 
                      checked={showDeliveryDates}
                      onCheckedChange={setShowDeliveryDates}
                    />
                  </div>
                  {showDeliveryDates && (
                    <div className="flex items-center space-x-2">
                      <Input
                        type="number"
                        value={deliveryDays}
                        onChange={(e) => setDeliveryDays(parseInt(e.target.value))}
                        className="w-20"
                        min="1"
                        max="30"
                      />
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">Days</span>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Order Processing Time */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-medium text-gray-900">Our order processing time</h3>
                      <p className="text-sm text-gray-500">Time needed to prepare orders</p>
                    </div>
                    <Switch 
                      checked={orderProcessingTime}
                      onCheckedChange={setOrderProcessingTime}
                    />
                  </div>
                  {orderProcessingTime && (
                    <Select value={processingTime} onValueChange={setProcessingTime}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30min">30 minutes</SelectItem>
                        <SelectItem value="1hour">1 hour</SelectItem>
                        <SelectItem value="2hours">2 hours</SelectItem>
                        <SelectItem value="4hours">4 hours</SelectItem>
                        <SelectItem value="6hours">6 hours</SelectItem>
                        <SelectItem value="12hours">12 hours</SelectItem>
                        <SelectItem value="24hours">24 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                </CardContent>
              </Card>

              {/* Maximum Orders Per Slot */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-medium text-gray-900">Maximum orders per slot</h3>
                      <p className="text-sm text-gray-500">Limit orders per time slot</p>
                    </div>
                    <Switch 
                      checked={maxOrdersPerSlot}
                      onCheckedChange={setMaxOrdersPerSlot}
                    />
                  </div>
                  {maxOrdersPerSlot && (
                    <div className="flex items-center space-x-2">
                      <Input
                        type="number"
                        value={maxOrders}
                        onChange={(e) => setMaxOrders(e.target.value)}
                        placeholder="Enter limit"
                        className="w-24"
                        min="1"
                      />
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">Orders</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Weekly Schedule */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold">Weekly Delivery Schedule</CardTitle>
                  <Button 
                    onClick={() => {
                      const firstDay = daysOfWeek.find(day => daySlots[day].enabled);
                      if (firstDay) addSlot(firstDay);
                    }}
                    size="sm" 
                    className="flex items-center space-x-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add New Slots</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {daysOfWeek.map((day) => (
                    <div key={day} className="border rounded-lg p-3">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <h3 className="font-medium text-gray-900 text-sm">{day}</h3>
                          <Switch 
                            checked={daySlots[day]?.enabled || false}
                            onCheckedChange={(checked) => {
                              setDaySlots(prev => ({
                                ...prev,
                                [day]: {
                                  ...prev[day],
                                  enabled: checked
                                }
                              }));
                            }}
                          />
                        </div>
                        {daySlots[day]?.enabled && (
                          <Button
                            onClick={() => addSlot(day)}
                            size="sm"
                            variant="outline"
                            className="flex items-center space-x-1 h-7 px-2 text-xs"
                          >
                            <Plus className="w-3 h-3" />
                            <span>Add Slot</span>
                          </Button>
                        )}
                      </div>

                      {daySlots[day]?.enabled && daySlots[day].slots.length === 0 && (
                        <div className="text-center py-4 text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-200">
                          <Clock className="w-5 h-5 mx-auto mb-1 text-gray-400" />
                          <p className="text-xs">No delivery slots configured for {day}</p>
                          <Button
                            onClick={() => addSlot(day)}
                            size="sm"
                            variant="outline"
                            className="mt-1 h-6 px-2 text-xs"
                          >
                            Add First Slot
                          </Button>
                        </div>
                      )}

                      {daySlots[day]?.enabled && daySlots[day].slots.length > 0 && (
                        <div className="space-y-2">
                          {daySlots[day].slots.map((slot, index) => (
                            <div key={index} className="space-y-2 p-2 bg-gray-50 rounded-lg">
                              <div className="grid grid-cols-2 gap-2">
                                <div>
                                  <Label className="text-xs text-gray-600">Start Time</Label>
                                  <Input
                                    type="time"
                                    value={slot.startTime}
                                    onChange={(e) => {
                                      const newSlots = [...daySlots[day].slots];
                                      newSlots[index].startTime = e.target.value;
                                      setDaySlots(prev => ({
                                        ...prev,
                                        [day]: {
                                          ...prev[day],
                                          slots: newSlots
                                        }
                                      }));
                                    }}
                                    className="mt-1 h-8 text-xs"
                                  />
                                </div>
                                <div>
                                  <Label className="text-xs text-gray-600">End Time</Label>
                                  <Input
                                    type="time"
                                    value={slot.endTime}
                                    onChange={(e) => {
                                      const newSlots = [...daySlots[day].slots];
                                      newSlots[index].endTime = e.target.value;
                                      setDaySlots(prev => ({
                                        ...prev,
                                        [day]: {
                                          ...prev[day],
                                          slots: newSlots
                                        }
                                      }));
                                    }}
                                    className="mt-1 h-8 text-xs"
                                  />
                                </div>
                              </div>
                              <div className="flex items-end space-x-2">
                                <div className="flex-1">
                                  <Label className="text-xs text-gray-600">Max Orders</Label>
                                  <Input
                                    type="number"
                                    placeholder="Unlimited"
                                    value={slot.maxOrders}
                                    onChange={(e) => {
                                      const newSlots = [...daySlots[day].slots];
                                      newSlots[index].maxOrders = e.target.value;
                                      setDaySlots(prev => ({
                                        ...prev,
                                        [day]: {
                                          ...prev[day],
                                          slots: newSlots
                                        }
                                      }));
                                    }}
                                    className="mt-1 h-8 text-xs"
                                    min="1"
                                  />
                                </div>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => {
                                    const newSlots = daySlots[day].slots.filter((_, i) => i !== index);
                                    setDaySlots(prev => ({
                                      ...prev,
                                      [day]: {
                                        ...prev[day],
                                        slots: newSlots
                                      }
                                    }));
                                  }}
                                  className="text-red-600 border-red-200 hover:bg-red-50 h-7 w-7 p-0"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Save Button */}
            <div className="flex justify-end">
              <Button className={`${currentPalette.primary} text-white px-8`}>
                Save Delivery Slots
              </Button>
            </div>
          </>
        )}
      </div>
    );
  };

  const TabContent = () => {
    switch (activeTab) {
      case 'Profile':
        return <ProfileContent />;
      case 'Delivery Charges':
        return <DeliveryChargesContent />;
      case 'Delivery Slots':
        return <DeliverySlotsContent />;
      case 'Pages':
        return <div className="text-center py-12 text-gray-500">Pages settings coming soon...</div>;
      case 'Store Feature':
        return <div className="text-center py-12 text-gray-500">Store Feature settings coming soon...</div>;
      case 'Footer Management':
        return <div className="text-center py-12 text-gray-500">Footer Management settings coming soon...</div>;
      case 'Integration':
        return <div className="text-center py-12 text-gray-500">Integration settings coming soon...</div>;
      default:
        return <ProfileContent />;
    }
  };

  return (
    <Layout>
      <div className={`min-h-screen ${currentPalette.background}`}>
        {/* Header */}
        <div className="border-b bg-white px-3 md:px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-xl md:text-2xl font-semibold text-gray-900 flex items-center">
              <span className="mr-2">⚙️</span>
              Settings
            </h1>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" size="sm">
                Cancel
              </Button>
              <Button size="sm" className={currentPalette.primary}>
                Save
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white border-b overflow-x-auto">
          <div className="flex space-x-1 px-3 md:px-6 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 md:px-4 py-3 text-xs md:text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  tab === activeTab
                    ? `border-blue-500 text-blue-600 bg-blue-50`
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-3 md:p-6">
          <TabContent />
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
