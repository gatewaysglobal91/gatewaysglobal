import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-trading.jpg";
import {
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
  Phone,
  MapPin,
} from "lucide-react";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  country: z.string().min(2, "Country must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      inquiryType: "",
      country: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      // Send email via Vercel serverless API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        // Show success message
        setIsSubmitted(true);
        form.reset();

        toast({
          title: "Message sent successfully! ✅",
          description: "We'll get back to you as soon as possible.",
          duration: 5000,
        });

        // Reset success state after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      toast({
        title: "Failed to send message ❌",
        description: "Please try again later or contact us directly via email.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
        <div className="relative container mx-auto px-4">
          {/* Hero Text Content with Background Image */}
          <div
            className="relative bg-cover bg-center bg-no-repeat py-20 rounded-2xl mb-12"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 rounded-2xl"></div>
            <div className="relative text-center text-white animate-fade-in-up">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-4 mx-auto animate-bounce-in border border-white/20">
                  <Mail className="h-10 w-10 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-in-left">
                Get In Touch With Us
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
                Have questions or need assistance? We're here to help you with
                all your import and export needs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Form - Main Column */}
            <div className="lg:col-span-2 animate-fade-in-up animate-delay-400">
              <div className="bg-card border border-border/50 rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-blue-600 p-8">
                  <h2 className="text-3xl font-bold text-white flex items-center">
                    <MessageSquare className="mr-3 h-8 w-8" />
                    Send Us A Message
                  </h2>
                  <p className="text-white/90 mt-2">
                    Fill out the form below and we'll get back to you within 24
                    hours
                  </p>
                </div>

                <div className="p-8">
                  {isSubmitted && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center text-green-800 animate-fade-in-up">
                      <CheckCircle2 className="h-5 w-5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">
                          Message sent successfully!
                        </p>
                        <p className="text-sm text-green-700">
                          We'll respond to your inquiry shortly.
                        </p>
                      </div>
                    </div>
                  )}

                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-semibold">
                              Full Name *
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John Doe"
                                className="h-12 text-base border-2 focus:border-primary transition-all"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="inquiryType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-semibold">
                              Inquiry Type *
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="h-12 text-base border-2 focus:border-primary transition-all">
                                  <SelectValue placeholder="Select inquiry type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Trade Inquiry">
                                  Trade Inquiry
                                </SelectItem>
                                <SelectItem value="Sales Support">
                                  Sales Support
                                </SelectItem>
                                <SelectItem value="After Sales Services Support">
                                  After Sales Services Support
                                </SelectItem>
                                <SelectItem value="Product Inquiry">
                                  Product Inquiry
                                </SelectItem>
                                <SelectItem value="Career Opportunity">
                                  Career Opportunity
                                </SelectItem>
                                <SelectItem value="Miscellaneous">
                                  Miscellaneous
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-semibold">
                              Country *
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="United Kingdom"
                                className="h-12 text-base border-2 focus:border-primary transition-all"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-semibold">
                              Email Address *
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="john@example.com"
                                className="h-12 text-base border-2 focus:border-primary transition-all"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-semibold">
                              Phone Number *
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="+44 123 456 7890"
                                className="h-12 text-base border-2 focus:border-primary transition-all"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-semibold">
                              Subject *
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="What is this regarding?"
                                className="h-12 text-base border-2 focus:border-primary transition-all"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-semibold">
                              Comment or Message *
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us more about your inquiry..."
                                className="min-h-[150px] text-base border-2 focus:border-primary transition-all resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-6 animate-fade-in-up animate-delay-600">
              {/* Contact Details Card */}
              <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Mail className="mr-3 h-6 w-6 text-primary" />
                  Contact Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground">
                        Email
                      </p>
                      <a
                        href="mailto:info@gatewaysglobal.co.uk"
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                        info@gatewaysglobal.co.uk
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground">
                        Phone
                      </p>
                      <p className="text-foreground font-medium">
                        +44 (0) 123 456 7890
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground">
                        Address
                      </p>
                      <p className="text-foreground font-medium">
                        London, United Kingdom
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Response Card */}
              <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/20 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-3">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Quick Response</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  We typically respond within{" "}
                  <span className="font-bold text-primary">24 hours</span>{" "}
                  during business days.
                </p>
              </div>

              {/* Why Contact Us Card */}
              <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Why Contact Us?</h3>
                <ul className="space-y-3">
                  {[
                    "Product Inquiries",
                    "Partnership Opportunities",
                    "Custom Orders",
                    "Shipping Information",
                    "General Support",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
