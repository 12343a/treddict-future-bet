import React from 'react';
import NavigationBar from '@/components/NavigationBar';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, ChartLine } from 'lucide-react';

const mockActiveBets = [
  { id: 1, event: 'IND vs AUS', amount: 200, potential: 400, type: 'Cricket' },
  { id: 2, event: 'MI vs CSK', amount: 300, potential: 600, type: 'Cricket' },
];

const mockClosedBets = [
  { id: 3, event: 'RCB vs KKR', amount: 150, result: 'Won', profit: 300, type: 'Cricket' },
  { id: 4, event: 'DC vs SRH', amount: 200, result: 'Lost', profit: -200, type: 'Cricket' },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      <div className="container mx-auto p-4 pt-6">
        <h1 className="text-2xl font-bold mb-6">Portfolio</h1>
        
        <Tabs defaultValue="active">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="active" className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Active
            </TabsTrigger>
            <TabsTrigger value="closed" className="flex items-center gap-2">
              <ChartLine className="h-4 w-4" />
              Closed
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="active">
            <Card>
              <CardHeader>
                <CardTitle>Active Positions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockActiveBets.map((bet) => (
                    <div key={bet.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{bet.event}</h3>
                        <p className="text-sm text-muted-foreground">{bet.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">₹{bet.amount}</p>
                        <p className="text-sm text-green-500">Potential: ₹{bet.potential}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="closed">
            <Card>
              <CardHeader>
                <CardTitle>Closed Positions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockClosedBets.map((bet) => (
                    <div key={bet.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{bet.event}</h3>
                        <p className="text-sm text-muted-foreground">{bet.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">₹{bet.amount}</p>
                        <p className={`text-sm ${bet.result === 'Won' ? 'text-green-500' : 'text-red-500'}`}>
                          {bet.result}: ₹{Math.abs(bet.profit)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Portfolio;
