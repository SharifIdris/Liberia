'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function AdminSettingsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <Card>
            <CardHeader>
                <CardTitle>Payment Gateway Settings</CardTitle>
                <CardDescription>Manage API keys for payment integrations.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div className="space-y-2">
                    <Label htmlFor="orange-money-key">Orange Money API Key</Label>
                    <Input id="orange-money-key" type="password" placeholder="••••••••••••••••" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="mtn-momo-key">MTN MoMo API Key</Label>
                    <Input id="mtn-momo-key" type="password" placeholder="••••••••••••••••" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="stripe-key">Stripe Secret Key</Label>
                    <Input id="stripe-key" type="password" placeholder="sk_test_••••••••••••" />
                </div>
            </CardContent>
            <CardFooter>
                <Button>Save Payment Settings</Button>
            </CardFooter>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Live Session Settings</CardTitle>
                <CardDescription>Manage video conferencing integrations.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div className="space-y-2">
                    <Label htmlFor="zoom-key">Zoom API Key</Label>
                    <Input id="zoom-key" type="password" placeholder="••••••••••••••••" />
                </div>
                 <div className="space-y-2">
                    <p className="text-sm font-medium">Jitsi Meet</p>
                    <p className="text-sm text-muted-foreground">Jitsi is self-hosted and does not require an API key.</p>
                </div>
            </CardContent>
            <CardFooter>
                <Button>Save Video Settings</Button>
            </CardFooter>
        </Card>
    </div>
  );
}
