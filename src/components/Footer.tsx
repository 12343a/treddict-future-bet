
import React from 'react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-lg border-t border-border mt-auto">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Treddict</h3>
            <p className="text-sm text-muted-foreground">
              Predict market trends and trade with confidence using our advanced prediction platform.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Button variant="link">Home</Button></li>
              <li><Button variant="link">Markets</Button></li>
              <li><Button variant="link">Learn</Button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Button variant="link">Privacy Policy</Button></li>
              <li><Button variant="link">Terms of Service</Button></li>
              <li><Button variant="link">Contact Us</Button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><Button variant="link">Twitter</Button></li>
              <li><Button variant="link">Discord</Button></li>
              <li><Button variant="link">Telegram</Button></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Treddict. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
