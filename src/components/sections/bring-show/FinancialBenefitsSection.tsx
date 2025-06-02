import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { DollarSign, Heart, Users } from "lucide-react";

const FinancialBenefitsSection = () => {
  return (
    <div className="space-y-8">
      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-2 border-green-300">
          <CardHeader>
            <CardTitle className="text-2xl text-green-800 flex items-center">
              <DollarSign className="mr-3 text-green-600" size={28} />
              Your Total Revenue Potential
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-green-100 p-6 rounded-xl border-2 border-green-200">
              <h4 className="font-bold text-green-800 mb-3 text-lg">Revenue Breakdown:</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-green-700">Initial investment (100 squares × $300):</span>
                  <span className="font-bold text-green-800">$30,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-700">Total ticket sales (2,000 × $35):</span>
                  <span className="font-bold text-green-800">$70,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-700">Remaining after investment:</span>
                  <span className="font-bold text-green-800">$40,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-700">Your share (80% of $40,000):</span>
                  <span className="font-bold text-green-800">$32,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-700">Founder Square revenue (80% of $30,000):</span>
                  <span className="font-bold text-green-800">$24,000</span>
                </div>
                <hr className="border-green-300" />
                <div className="flex justify-between items-center text-xl">
                  <span className="text-green-800 font-bold">Total Revenue to Your Group:</span>
                  <span className="text-3xl font-bold text-green-700">$56,000</span>
                </div>
              </div>
            </div>
            <div className="bg-white/80 p-4 rounded-lg border border-green-200">
              <p className="text-green-800 text-sm">
                <strong>Note:</strong> This assumes 100% ticket sales at $35 each. Your actual revenue will depend on attendance and final ticket pricing.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-yellow-100 border-2 border-amber-300">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-800 flex items-center">
              <Heart className="mr-3 text-amber-600" size={28} />
              Premium Founder Benefits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h4 className="font-bold text-amber-800 text-lg mb-3">Each $300 Founder Square Includes:</h4>
              <div className="grid gap-3">
                <div className="flex items-start">
                  <span className="text-amber-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Digital memorial</strong> - Photos and 500-word tribute in our permanent quilt
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-amber-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Opening night VIP experience</strong> - 2 premium tickets + pre-show reception
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-amber-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Special recognition</strong> - Honored during each performance
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-amber-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Legacy placement</strong> - Guaranteed prominent position in digital quilt
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-br from-blue-50 to-cyan-100 border-2 border-blue-300">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-800 flex items-center">
            <Users className="mr-3 text-blue-600" size={28} />
            Additional Revenue Example: Sold-Out 4-Show Run
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-blue-100 p-6 rounded-xl border-2 border-blue-200">
            <h4 className="font-bold text-blue-800 mb-4 text-lg">If you sell all 2,000 tickets, expect:</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h5 className="font-semibold text-blue-800">Digital Quilt Square Purchases (50/50 split):</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-blue-700">Additional Standard Squares (50 × $25):</span>
                    <span className="font-bold text-blue-800">$1,250</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Additional Premium Squares (25 × $100):</span>
                    <span className="font-bold text-blue-800">$2,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Additional Legacy Squares (15 × $200):</span>
                    <span className="font-bold text-blue-800">$3,000</span>
                  </div>
                  <div className="flex justify-between border-t border-blue-300 pt-2">
                    <span className="text-blue-700 font-semibold">Your share (50% of $6,750):</span>
                    <span className="font-bold text-blue-800">$3,375</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h5 className="font-semibold text-blue-800">Threads of the Quilt Memberships (50/50 split):</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-blue-700">Basic members (100 × $10/month):</span>
                    <span className="font-bold text-blue-800">$1,000/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Premium members (40 × $25/month):</span>
                    <span className="font-bold text-blue-800">$1,000/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Legacy members (20 × $50/month):</span>
                    <span className="font-bold text-blue-800">$1,000/mo</span>
                  </div>
                  <div className="flex justify-between border-t border-blue-300 pt-2">
                    <span className="text-blue-700 font-semibold">Your share (50% of $3,000/mo):</span>
                    <span className="font-bold text-blue-800">$1,500/mo</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-blue-300">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-white/70 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-800">$3,375</div>
                  <div className="text-sm text-blue-700">One-time additional revenue</div>
                </div>
                <div className="bg-white/70 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-800">$18,000</div>
                  <div className="text-sm text-blue-700">Recurring revenue (year 1)</div>
                </div>
                <div className="bg-white/70 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-800">$77,375</div>
                  <div className="text-sm text-blue-700">Total potential revenue</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/80 p-4 rounded-lg border border-blue-200 mt-4">
            <p className="text-blue-800 text-sm">
              <strong>Revenue Split:</strong> Local groups receive 80% of Founder Square revenue and 50% of all Digital Quilt Square purchases and Threads membership fees. Based on industry averages: 4.5% of attendees purchase additional squares, 8% join ongoing membership programs.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialBenefitsSection;
