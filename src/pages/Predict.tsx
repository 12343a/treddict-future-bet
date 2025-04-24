
import React from 'react';
import NavigationBar from '@/components/NavigationBar';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line } from 'recharts';

const runsData = [
  { over: '1-6', predicted: 45, actual: 48 },
  { over: '7-12', predicted: 42, actual: 38 },
  { over: '13-18', predicted: 55, actual: 52 },
  { over: '19-20', predicted: 25, actual: 28 },
];

const wicketsData = [
  { over: '1-5', probability: 65 },
  { over: '6-10', probability: 40 },
  { over: '11-15', probability: 55 },
  { over: '16-20', probability: 75 },
];

const config = {
  runs: {
    predicted: { theme: { light: '#9b87f5', dark: '#7E69AB' } },
    actual: { theme: { light: '#6E59A5', dark: '#D6BCFA' } },
  },
  wickets: {
    probability: { theme: { light: '#9b87f5', dark: '#7E69AB' } },
  },
};

const Predict = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      <div className="container mx-auto p-4 pt-6">
        <h1 className="text-2xl font-bold mb-6">Match Predictions</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Predicted Runs per Phase</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={config}>
                <BarChart data={runsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="over" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="predicted" name="Predicted Runs" fill="#9b87f5" />
                  <Bar dataKey="actual" name="Actual Runs" fill="#6E59A5" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Wicket Probability</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={config}>
                <LineChart data={wicketsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="over" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="probability" 
                    name="Wicket Probability (%)" 
                    stroke="#9b87f5" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Predict;
