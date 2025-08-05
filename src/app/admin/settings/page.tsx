'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState, useEffect } from 'react';

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    orangeMoneyApiKey: '',
    mtnMoMoApiKey: '',
    stripeSecretKey: '',
    zoomApiKey: '',
  });

  useEffect(() => {
    const fetchSettings = async () => {
      const response = await fetch('/api/admin/settings');
      if (response.ok) {
        const data = await response.json();
        if (data) {
          setSettings(data);
        }
      }
    };
    fetchSettings();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSettings(prev => ({ ...prev, [id]: value }));
  };

  const handleSave = async () => {
    const response = await fetch('/api/admin/settings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(settings),
    });

    if (response.ok) {
      alert('Settings saved successfully!');
    } else {
      alert('Failed to save settings.');
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <Card>
            <CardHeader>
                <CardTitle>Payment Gateway Settings</CardTitle>
                <CardDescription>Manage API keys for payment integrations.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div className="space-y-2">
                    <Label htmlFor="orangeMoneyApiKey">Orange Money API Key</Label>
                    <Input id="orangeMoneyApiKey" type="password" placeholder="••••••••••••••••" value={settings.orangeMoneyApiKey} onChange={handleInputChange} />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="mtnMoMoApiKey">MTN MoMo API Key</Label>
                    <Input id="mtnMoMoApiKey" type="password" placeholder="••••••••••••••••" value={settings.mtnMoMoApiKey} onChange={handleInputChange} />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="stripeSecretKey">Stripe Secret Key</Label>
                    <Input id="stripeSecretKey" type="password" placeholder="sk_test_••••••••••••" value={settings.stripeSecretKey} onChange={handleInputChange} />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleSave}>Save Payment Settings</Button>
            </CardFooter>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Live Session Settings</CardTitle>
                <CardDescription>Manage video conferencing integrations.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div className="space-y-2">
                    <Label htmlFor="zoomApiKey">Zoom API Key</Label>
                    <Input id="zoomApiKey" type="password" placeholder="••••••••••••••••" value={settings.zoomApiKey} onChange={handleInputChange} />
                </div>
                 <div className="space-y-2">
                    <p className="text-sm font-medium">Jitsi Meet</p>
                    <p className="text-sm text-muted-foreground">Jitsi is self-hosted and does not require an API key.</p>
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleSave}>Save Video Settings</Button>
            </CardFooter>
        </Card>
    </div>
  );
}
