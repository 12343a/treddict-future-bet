
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { CreditCard, Check, X, Wallet as WalletIcon } from 'lucide-react';
import NavigationBar from '@/components/NavigationBar';
import { toast } from '@/components/ui/sonner';

interface KycForm {
  fullName: string;
  panNumber: string;
  phoneNumber: string;
  address: string;
  termsAccepted: boolean;
}

const Wallet = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'balance' | 'kyc' | 'add'>('balance');
  const [kycVerified, setKycVerified] = useState(false);
  const [addAmount, setAddAmount] = useState('');

  const form = useForm<KycForm>({
    defaultValues: {
      fullName: '',
      panNumber: '',
      phoneNumber: '',
      address: '',
      termsAccepted: false,
    }
  });

  const onKycSubmit = (data: KycForm) => {
    console.log("KYC data submitted:", data);
    // In a real app, this would send the data to a backend
    toast.success("KYC verification request submitted successfully");
    setKycVerified(true);
  };

  const handleAddMoney = (method: string) => {
    if (!addAmount || isNaN(Number(addAmount)) || Number(addAmount) <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }
    
    toast.success(`Processing payment of ₹${addAmount} via ${method}`);
    // In a real app, this would integrate with the payment gateway
    console.log(`Adding ₹${addAmount} via ${method}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      
      <div className="container mx-auto p-4 pt-6">
        <h1 className="text-2xl font-bold mb-6">Your Wallet</h1>
        
        <div className="flex space-x-2 mb-6">
          <Button 
            variant={activeTab === 'balance' ? 'default' : 'outline'}
            onClick={() => setActiveTab('balance')}
          >
            Balance
          </Button>
          <Button 
            variant={activeTab === 'add' ? 'default' : 'outline'}
            onClick={() => setActiveTab('add')}
          >
            Add Money
          </Button>
          <Button 
            variant={activeTab === 'kyc' ? 'default' : 'outline'}
            onClick={() => setActiveTab('kyc')}
          >
            KYC Verification {kycVerified && <Check className="ml-1 h-4 w-4 text-green-500" />}
          </Button>
        </div>
        
        {activeTab === 'balance' && (
          <Card>
            <CardHeader>
              <CardTitle>Available Balance</CardTitle>
              <CardDescription>Your current wallet balance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-6">₹500</div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-card/50 rounded-lg border">
                  <span>Total Earnings</span>
                  <span className="font-semibold text-primary">₹750</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-card/50 rounded-lg border">
                  <span>Current Bets</span>
                  <span className="font-semibold text-primary">₹250</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => setActiveTab('add')}>
                Add Money
              </Button>
            </CardFooter>
          </Card>
        )}
        
        {activeTab === 'kyc' && (
          <Card>
            <CardHeader>
              <CardTitle>KYC Verification</CardTitle>
              <CardDescription>Verify your identity to unlock full features</CardDescription>
            </CardHeader>
            <CardContent>
              {kycVerified ? (
                <div className="text-center py-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 mb-4">
                    <Check className="h-8 w-8 text-green-600 dark:text-green-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">KYC Verified</h3>
                  <p className="text-muted-foreground">Your account has been successfully verified</p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onKycSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name as per ID" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="panNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>PAN Number</FormLabel>
                          <FormControl>
                            <Input placeholder="ABCDE1234F" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 9999999999" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Residential Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="termsAccepted"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Accept terms and conditions</FormLabel>
                            <FormDescription>
                              I confirm that all the information provided is correct.
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full">Submit KYC</Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        )}
        
        {activeTab === 'add' && (
          <Card>
            <CardHeader>
              <CardTitle>Add Money</CardTitle>
              <CardDescription>Choose your preferred payment method</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <FormLabel>Amount</FormLabel>
                <div className="flex mt-1.5">
                  <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-muted">₹</div>
                  <Input 
                    value={addAmount}
                    onChange={(e) => setAddAmount(e.target.value)}
                    type="number" 
                    placeholder="Enter amount" 
                    className="rounded-l-none"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium mb-1">Select Payment Method</h3>
                
                <button 
                  onClick={() => handleAddMoney('Razorpay')}
                  className="flex items-center justify-between w-full p-3 border rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                      <CreditCard className="h-5 w-5 text-blue-700 dark:text-blue-400" />
                    </div>
                    <span>Razorpay</span>
                  </div>
                  <Check className="h-4 w-4" />
                </button>
                
                <button 
                  onClick={() => handleAddMoney('PhonePe')}
                  className="flex items-center justify-between w-full p-3 border rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3">
                      <WalletIcon className="h-5 w-5 text-purple-700 dark:text-purple-400" />
                    </div>
                    <span>PhonePe</span>
                  </div>
                  <Check className="h-4 w-4" />
                </button>
                
                <button 
                  onClick={() => handleAddMoney('Google Pay')}
                  className="flex items-center justify-between w-full p-3 border rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
                      <WalletIcon className="h-5 w-5 text-green-700 dark:text-green-400" />
                    </div>
                    <span>Google Pay</span>
                  </div>
                  <Check className="h-4 w-4" />
                </button>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <p className="text-xs text-muted-foreground mb-2 text-center w-full">
                Your payment information is secure and encrypted
              </p>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Wallet;
