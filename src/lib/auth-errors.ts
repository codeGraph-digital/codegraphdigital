import { FirebaseError } from "firebase/app";

export function getFriendlyAuthErrorMessage(error: any): string {
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case "auth/invalid-email":
        return "The email address is not valid. Please check and try again.";
      case "auth/user-disabled":
        return "This user account has been disabled.";
      case "auth/user-not-found":
        return "No account found with this email address.";
      case "auth/wrong-password":
        return "Incorrect password. Please try again.";
      case "auth/email-already-in-use":
        return "An account with this email address already exists.";
      case "auth/operation-not-allowed":
        return "This sign-in method is not enabled. Please contact support.";
      case "auth/weak-password":
        return "The password is too weak. Please use a stronger password.";
      case "auth/too-many-requests":
        return "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.";
      default:
        return "An unexpected error occurred. Please try again.";
    }
  }
  return "An unexpected error occurred. Please try again.";
}