
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus } from 'lucide-react';

const SignUp = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Authentication logic will be added after Supabase integration
  };

  return (
    <div className="min-h-screen neon-background backdrop-blur-xl flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border-white/20 shadow-xl">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl mb-2">Create an account</CardTitle>
          <CardDescription>Enter your details to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Enter your username" className="bg-white/50 dark:bg-gray-800/50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" className="bg-white/50 dark:bg-gray-800/50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Create a password" className="bg-white/50 dark:bg-gray-800/50" />
            </div>
            <Button type="submit" className="w-full bg-treddict-blue hover:bg-treddict-blue/90">
              <UserPlus className="mr-2" size={16} />
              Sign Up
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-muted-foreground text-center">
            Already have an account?{' '}
            <Link to="/login" className="text-treddict-blue hover:text-treddict-blue/90 hover:underline">
              Login here
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
