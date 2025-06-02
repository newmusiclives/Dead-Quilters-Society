import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => (
  <div className="space-y-8">
    <h2 className="text-4xl font-bold text-amber-800 text-center mb-8">Contact Us</h2>
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardContent className="p-6 space-y-4">
          <Input placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Input placeholder="Subject" />
          <textarea 
            className="w-full p-3 border rounded-md min-h-32 resize-y"
            placeholder="Your Message"
          />
          <Button className="w-full bg-amber-600 hover:bg-amber-700">Send Message</Button>
        </CardContent>
      </Card>
      <div className="text-center mt-8 space-y-4">
        <div>
          <h3 className="font-bold text-amber-800">Booking Inquiries</h3>
          <p>Email: booking@deadquilters.com<br />Phone: (928) 555-QUILT)</p>
        </div>
        <div>
          <h3 className="font-bold text-amber-800">Press & Media</h3>
          <p>Email: press@deadquilters.com</p>
        </div>
      </div>
    </div>
  </div>
);

export default ContactSection;
