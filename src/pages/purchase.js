import React, { useEffect } from "react";
import PageLoader from "./../components/PageLoader";
import { useAuth, requireAuth } from "./../util/auth.js";
import { useRouter } from "./../util/router.js";
import { redirectToCheckout } from "./../util/stripe.js";

function PurchasePage(props) {
  const router = useRouter();
  const auth = useAuth();

  useEffect(() => {
    if (auth.user.planIsActive) {
      // If user already has an active plan
      // then take them to Stripe billing
      router.push("/settings/billing");
    } else {
      // Otherwise go to checkout
      redirectToCheckout(router.query.plan);
    }
  }, [auth.user.planId]);

  return <PageLoader></PageLoader>;
}

export default requireAuth(PurchasePage);
