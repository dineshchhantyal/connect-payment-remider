interface Payment {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description?: string;
  author: User;
  authorId: number;
  amount: number;
  currency: string;
  paid: boolean;
  paidAt?: Date;
  duration: Date;
  timezones?: string;
  link?: string;
  image?: string;
  paymentType?: "one-time" | "monthly" | "yearly"; // one-time, monthly, yearly
  category?: "donation" | "subscription" | "membership"; // other, donation, subscription, membership
  paymentMethod?:
    | "paypal"
    | "stripe"
    | "venmo"
    | "cashapp"
    | "bank"
    | "crypto"
    | "credit-card"
    | "cash";
}

interface PaymentInput {
  title: string;
  description?: string;
  amount: number;
  currency: string;
  duration: Date;
  timezones?: string;
  link?: string;
  image?: string;
  paymentType?: "one-time" | "monthly" | "yearly"; // one-time, monthly, yearly
  category?: "donation" | "subscription" | "membership"; // other, donation, subscription, membership
  paymentMethod?:
    | "paypal"
    | "stripe"
    | "venmo"
    | "cashapp"
    | "bank"
    | "crypto"
    | "credit-card"
    | "cash";
}
