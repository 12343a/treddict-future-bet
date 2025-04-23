
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
    <div className="min-h-screen bg-treddict-darker flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-treddict-dark border-treddict-purple/20">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl mb-2">Create an account</CardTitle>
          <CardDescription>Enter your details to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Enter your username" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Create a password" />
            </div>
            <Button type="submit" className="w-full">
              <UserPlus className="mr-2" size={16} />
              Sign Up
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-muted-foreground text-center">
            Already have an account?{' '}
            <Link to="/login" className="text-treddict-purple hover:underline">
              Login here
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
