"use client";

import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginAction } from "../app/login/action";

// Server action için initial state
const initialState = {
  error: null,
  success: false,
};

// Submit button komponenti
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? "Giriş yapılıyor..." : "Giriş Yap"}
    </Button>
  );
}

export function LoginForm() {
  const [state, formAction] = useFormState(loginAction, initialState);

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Giriş Yap</CardTitle>
        <CardDescription>
          Hesabınıza giriş yapmak için email adresinizi girin
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="grid gap-4">
          {state.error && (
            <div className="text-red-500 text-sm">{state.error}</div>
          )}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
              // required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Şifre</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Şifrenizi mi unuttunuz?
              </Link>
            </div>
            <Input id="password" name="password" type="password" />
          </div>
          <SubmitButton />
          <Button variant="outline" className="w-full">
            Google ile Giriş Yap
          </Button>
          <div className="mt-4 text-center text-sm">
            Hesabınız yok mu?{" "}
            <Link href="#" className="underline">
              Kayıt ol
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
