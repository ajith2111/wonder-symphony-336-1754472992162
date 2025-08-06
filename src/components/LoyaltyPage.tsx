import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const offers = [
  {
    id: 1,
    title: "Free Shipping on Orders $1000+",
    description: "Enjoy complimentary shipping when you spend over $1000.",
  },
  {
    id: 2,
    title: "Exclusive Event Invitation",
    description: "Get invited to our members-only seasonal fashion shows.",
  },
  {
    id: 3,
    title: "VIP Styling Session",
    description: "Redeem points for a private appointment with our lead stylist.",
  },
];

const LoyaltyPage = () => {
  // In a real app, points would come from user data
  const points = 3200;

  return (
    <div className="max-w-2xl mx-auto p-6 pt-10">
      <h1 className="text-3xl font-serif font-bold mb-4 text-center text-gray-900">Loyalty & Rewards</h1>
      <div className="flex flex-col items-center mb-8">
        <div className="text-5xl font-bold text-primary mb-2">{points}</div>
        <div className="text-lg font-medium text-gray-700">Loyalty Points</div>
        <Badge className="mt-2 text-base bg-gray-900 text-white">Gold Member</Badge>
      </div>
      <h2 className="text-xl font-semibold mb-4">Exclusive Offers</h2>
      <div className="space-y-4">
        {offers.map((offer) => (
          <Card key={offer.id} className="border-2 border-gray-200">
            <CardContent className="p-4">
              <div className="font-semibold text-lg">{offer.title}</div>
              <div className="text-gray-600">{offer.description}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LoyaltyPage;