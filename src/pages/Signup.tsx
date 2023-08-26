import React from "react";

import { ClerkProvider } from "@clerk/clerk-react";

const clerkPubKey = process.env?.REACT_APP_CLERK_PUBLISHABLE_KEY;
if (!clerkPubKey){
  throw new Error("Missing Publishable key")
}

const Signup = () => {
  return (
    <ClerkProvider publishableKey="{clerkPubKey}">
      <div>Welcome to OpenQueue</div>
      <div>Sign up here</div>
    </ClerkProvider>
  )
};

export default Signup;