"use client";

import * as React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/auth-context";
import { EmailAuthProvider, reauthenticateWithCredential, deleteUser } from "firebase/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { getFriendlyAuthErrorMessage } from "@/lib/auth-errors";

const CONFIRMATION_TEXT = "delete my account";

export function DeleteAccountDialog() {
  const { user } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [confirmationInput, setConfirmationInput] = React.useState("");

  const isConfirmationMatching = confirmationInput === CONFIRMATION_TEXT;

  const handleDelete = async () => {
    if (!user || !user.email) {
      toast.error("No user is signed in.");
      return;
    }
    if (!isConfirmationMatching) {
      toast.error("Confirmation text does not match.");
      return;
    }
    setIsLoading(true);
    try {
      const credential = EmailAuthProvider.credential(user.email, password);
      await reauthenticateWithCredential(user, credential);
      await deleteUser(user);
      toast.success("Account deleted successfully.");
      router.push("/");
    } catch (error: any) {
      toast.error(getFriendlyAuthErrorMessage(error));
    } finally {
      setIsLoading(false);
      setPassword("");
      setConfirmationInput("");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password to confirm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="confirmation">
              To confirm, type "<span className="font-bold text-destructive">{CONFIRMATION_TEXT}</span>" below:
            </Label>
            <Input
              id="confirmation"
              value={confirmationInput}
              onChange={(e) => setConfirmationInput(e.target.value)}
            />
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={!isConfirmationMatching || !password || isLoading}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            {isLoading ? "Deleting..." : "Delete Account"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}