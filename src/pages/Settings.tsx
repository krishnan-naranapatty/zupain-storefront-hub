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
import { Upload, User, Globe, Building2, ShoppingCart, MapPin, Weight, Plus, Trash2, Info, Clock, FileText, Edit, AlertTriangle, Eye, EyeOff, Calendar, CreditCard, Banknote, QrCode, Smartphone, HelpCircle } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import EditPageDialog from '@/components/EditPageDialog';
import StoreFeatureContent from '@/components/StoreFeatureContent';
import FooterManagement from '@/components/FooterManagement';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('Profile');
  const { currentPalette } = useTheme();
  
  // Pages state
  const [editPageDialog, setEditPageDialog] = useState({ open: false, page: null });
  const [pages, setPages] = useState([
    { id: '1', name: 'Help', path: 'help', enabled: true, content: '', hasWarning: false, type: 'support', lastUpdated: '2024-01-15', wordCount: 245 },
    { id: '2', name: 'About Us', path: 'about-us', enabled: true, content: '', hasWarning: false, type: 'company', lastUpdated: '2024-01-10', wordCount: 180 },
    { id: '3', name: 'Legals', path: 'legals', enabled: true, content: '', hasWarning: false, type: 'legal', lastUpdated: '2024-01-08', wordCount: 320 },
    { id: '4', name: 'Terms & Conditions', path: 'terms-conditions', enabled: true, content: '', hasWarning: true, type: 'legal', lastUpdated: '2023-12-20', wordCount: 0 },
    { id: '5', name: 'Explore', path: 'explore', enabled: true, content: '', hasWarning: false, type: 'content', lastUpdated: '2024-01-12', wordCount: 156 },
    { id: '6', name: 'Returns and Refunds', path: 'returns-refunds', enabled: true, content: '', hasWarning: false, type: 'policy', lastUpdated: '2024-01-05', wordCount: 280 },
    { id: '7', name: 'Privacy Policy', path: 'privacy-policy', enabled: true, content: '', hasWarning: false, type: 'legal', lastUpdated: '2024-01-14', wordCount: 420 },
    { id: '8', name: 'Contact us', path: 'contact-us', enabled: true, content: '', hasWarning: false, type: 'support', lastUpdated: '2024-01-16', wordCount: 95 },
    { id: '9', name: 'Contact Form', path: 'contact-form', enabled: true, content: '', hasWarning: false, type: 'support', lastUpdated: '2024-01-11', wordCount: 120 }
  ]);

  // Integration state
  const [activeRegion, setActiveRegion] = useState('India');
  const [integrations, setIntegrations] = useState({
    razorpay: { enabled: false, connected: false },
    cod: { enabled: true, connected: true },
    upi: { enabled: true, connected: true },
    phonepe: { enabled: false, connected: false },
    cashfree: { enabled: false, connected: false },
    payu: { enabled: false, connected: false }
  });

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

  const handleEditPage = (page) => {
    setEditPageDialog({ open: true, page });
  };

  const handleAddNewPage = () => {
    setEditPageDialog({ open: true, page: null });
  };

  const handleSavePage = (pageData) => {
    if (editPageDialog.page) {
      // Edit existing page
      setPages(pages.map(p => 
        p.id === editPageDialog.page.id 
          ? { ...p, ...pageData }
          : p
      ));
    } else {
      // Add new page
      const newPage = {
        id: Date.now().toString(),
        ...pageData,
        enabled: true,
        hasWarning: false,
        type: 'content',
        lastUpdated: new Date().toISOString().split('T')[0],
        wordCount: 0
      };
      setPages([...pages, newPage]);
    }
  };

  const handleTogglePage = (pageId, enabled) => {
    setPages(pages.map(p => 
      p.id === pageId 
        ? { ...p, enabled }
        : p
    ));
  };

  const getPageTypeIcon = (type) => {
    switch (type) {
      case 'legal': return <FileText className="w-4 h-4 text-blue-600" />;
      case 'support': return <Info className="w-4 h-4 text-green-600" />;
      case 'company': return <Building2 className="w-4 h-4 text-purple-600" />;
      case 'policy': return <Globe className="w-4 h-4 text-orange-600" />;
      default: return <FileText className="w-4 h-4 text-gray-600" />;
    }
  };

  const getPageTypeLabel = (type) => {
    switch (type) {
      case 'legal': return 'Legal';
      case 'support': return 'Support';
      case 'company': return 'Company';
      case 'policy': return 'Policy';
      default: return 'Content';
    }
  };

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

  const PagesContent = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <FileText className="w-6 h-6 text-gray-600" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Documentation Pages</h2>
            <p className="text-sm text-gray-500">Manage your store's information and policy pages</p>
          </div>
        </div>
        <Button 
          onClick={handleAddNewPage}
          className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Page</span>
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{pages.length}</div>
            <div className="text-sm text-gray-500">Total Pages</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{pages.filter(p => p.enabled).length}</div>
            <div className="text-sm text-gray-500">Active Pages</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">{pages.filter(p => p.hasWarning).length}</div>
            <div className="text-sm text-gray-500">Needs Attention</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-gray-600">{pages.filter(p => p.wordCount === 0).length}</div>
            <div className="text-sm text-gray-500">Empty Pages</div>
          </CardContent>
        </Card>
      </div>

      {/* Pages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pages.map((page) => (
          <Card key={page.id} className={`relative transition-all duration-200 hover:shadow-lg border-l-4 ${
            page.hasWarning ? 'border-l-orange-400 bg-orange-50/30' : 
            page.enabled ? 'border-l-green-400' : 'border-l-gray-300'
          }`}>
            <CardContent className="p-5">
              {/* Header with icon and status */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  {getPageTypeIcon(page.type)}
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight">{page.name}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        page.type === 'legal' ? 'bg-blue-100 text-blue-700' :
                        page.type === 'support' ? 'bg-green-100 text-green-700' :
                        page.type === 'company' ? 'bg-purple-100 text-purple-700' :
                        page.type === 'policy' ? 'bg-orange-100 text-orange-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {getPageTypeLabel(page.type)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {page.enabled ? (
                    <Eye className="w-4 h-4 text-green-600" />
                  ) : (
                    <EyeOff className="w-4 h-4 text-gray-400" />
                  )}
                  <Switch 
                    checked={page.enabled}
                    onCheckedChange={(enabled) => handleTogglePage(page.id, enabled)}
                    className="data-[state=checked]:bg-green-500"
                  />
                </div>
              </div>

              {/* URL Preview */}
              <div className="mb-3">
                <div className="text-xs text-gray-500 mb-1">Page URL</div>
                <div className="text-sm font-mono bg-gray-100 px-2 py-1 rounded text-gray-700 truncate">
                  /{page.path}
                </div>
              </div>

              {/* Content Stats */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center p-2 bg-gray-50 rounded">
                  <div className={`text-lg font-semibold ${page.wordCount > 0 ? 'text-blue-600' : 'text-gray-400'}`}>
                    {page.wordCount}
                  </div>
                  <div className="text-xs text-gray-500">Words</div>
                </div>
                <div className="text-center p-2 bg-gray-50 rounded">
                  <div className="flex items-center justify-center space-x-1">
                    <Calendar className="w-3 h-3 text-gray-500" />
                    <span className="text-xs text-gray-600">{page.lastUpdated}</span>
                  </div>
                  <div className="text-xs text-gray-500">Last Updated</div>
                </div>
              </div>

              {/* Warning Banner */}
              {page.hasWarning && (
                <div className="mb-4 p-2 bg-orange-100 border border-orange-200 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-orange-600" />
                    <span className="text-xs text-orange-700 font-medium">
                      Will be available on the Sign Up page
                    </span>
                  </div>
                </div>
              )}

              {/* Empty Content Warning */}
              {page.wordCount === 0 && (
                <div className="mb-4 p-2 bg-yellow-100 border border-yellow-200 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Info className="w-4 h-4 text-yellow-600" />
                    <span className="text-xs text-yellow-700">Page content is empty</span>
                  </div>
                </div>
              )}
              
              {/* Action Button */}
              <Button 
                onClick={() => handleEditPage(page)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center space-x-2 transition-colors"
                size="sm"
              >
                <Edit className="w-4 h-4" />
                <span>Edit Page</span>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Edit Page Dialog */}
      <EditPageDialog
        open={editPageDialog.open}
        onOpenChange={(open) => setEditPageDialog({ ...editPageDialog, open })}
        page={editPageDialog.page}
        onSave={handleSavePage}
      />
    </div>
  );

  const IntegrationContent = () => {
    const paymentGateways = [
      {
        id: 'razorpay',
        name: 'Razorpay',
        description: 'Integrate Razorpay with your account and take online payments seamlessly into your bank account.',
        icon: CreditCard,
        color: 'bg-blue-600',
        enabled: integrations.razorpay.enabled,
        connected: integrations.razorpay.connected
      },
      {
        id: 'cod',
        name: 'Cash on delivery',
        description: 'Take payments in cash upon delivery.',
        icon: Banknote,
        color: 'bg-green-600',
        enabled: integrations.cod.enabled,
        connected: integrations.cod.connected,
        badge: 'CASH ON DELIVERY'
      },
      {
        id: 'upi',
        name: 'UPI Pay',
        description: 'Orders will be accepted from customers. A Pop Up screen showing UPI QR code & Bank details will be shown. Payment made with this method has to confirmed by sellers manually.',
        icon: QrCode,
        color: 'bg-orange-600',
        enabled: integrations.upi.enabled,
        connected: integrations.upi.connected
      },
      {
        id: 'phonepe',
        name: 'PhonePe',
        description: 'Integrate PhonePe with your account and take online payments seamlessly into your bank account.',
        icon: Smartphone,
        color: 'bg-purple-600',
        enabled: integrations.phonepe.enabled,
        connected: integrations.phonepe.connected
      },
      {
        id: 'cashfree',
        name: 'Cashfree',
        description: 'Cashfree: Indian payment gateway for online transactions, ensuring seamless and secure payments.',
        icon: CreditCard,
        color: 'bg-teal-600',
        enabled: integrations.cashfree.enabled,
        connected: integrations.cashfree.connected
      },
      {
        id: 'payu',
        name: 'PayU',
        description: 'PayU enables businesses in India to accept digital payments from credit cards, debit cards, net banking, BNPL, QR, UPI, Wallets and more.',
        icon: CreditCard,
        color: 'bg-indigo-600',
        enabled: integrations.payu.enabled,
        connected: integrations.payu.connected
      }
    ];

    const toggleIntegration = (gatewayId: string, field: string) => {
      setIntegrations(prev => ({
        ...prev,
        [gatewayId]: {
          ...prev[gatewayId],
          [field]: !prev[gatewayId][field]
        }
      }));
    };

    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-3">
          <CreditCard className="w-6 h-6 text-gray-600" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Integration</h2>
            <p className="text-sm text-gray-500">Connect payment gateways and manage integrations</p>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Payments</h3>
            <div className="flex space-x-2">
              <Button
                variant={activeRegion === 'India' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveRegion('India')}
                className={activeRegion === 'India' ? 'bg-blue-600 text-white' : ''}
              >
                India
              </Button>
              <Button
                variant={activeRegion === 'International' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveRegion('International')}
                className={activeRegion === 'International' ? 'bg-blue-600 text-white' : ''}
              >
                International
              </Button>
            </div>
          </div>

          {/* Payment Gateways Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {paymentGateways.map((gateway) => {
              const Icon = gateway.icon;
              return (
                <Card key={gateway.id} className="relative overflow-hidden">
                  <CardContent className="p-6">
                    {/* Header with icon and title */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${gateway.color}`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-gray-900">{gateway.name}</h3>
                            {gateway.badge && (
                              <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full">
                                {gateway.badge}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <HelpCircle className="w-4 h-4 text-gray-400" />
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {gateway.description}
                    </p>

                    {/* Footer with connect button and toggle */}
                    <div className="flex items-center justify-between">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center space-x-2"
                        disabled={gateway.connected && !gateway.enabled}
                      >
                        <span>Connect</span>
                      </Button>
                      <Switch
                        checked={gateway.enabled}
                        onCheckedChange={() => toggleIntegration(gateway.id, 'enabled')}
                        disabled={!gateway.connected && gateway.id !== 'cod' && gateway.id !== 'upi'}
                      />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Additional Integration Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Shipment Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Shipment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4">Configure shipping integrations and logistics partners</p>
              <Button variant="outline" size="sm" className="w-full">
                Configure Shipment
              </Button>
            </CardContent>
          </Card>

          {/* Analytics Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4">Connect analytics tools to track your store performance</p>
              <Button variant="outline" size="sm" className="w-full">
                Setup Analytics
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button className={`${currentPalette.primary} text-white px-8`}>
            Save Integration Settings
          </Button>
        </div>
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
        return <PagesContent />;
      case 'Store Feature':
        return <StoreFeatureContent />;
      case 'Footer Management':
        return <FooterManagement />;
      case 'Integration':
        return <IntegrationContent />;
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
