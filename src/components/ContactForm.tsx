import { z } from "zod";
import { contactSchema } from "@/schema/contactSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";

import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import CustomButton from "./CustomButton";

type ContactData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const form = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      address: "",
      email: "",
      message: "",
    },
  });
  const isSubmitting = form.formState.isSubmitting;

  const onSubmit = async (data: ContactData) => {
    console.log(data);
    form.reset();

    // try {

    //   toast.success("Email sent successfully!");
    //   form.reset();
    // } catch (error) {
    //   toast.error("Failed to send message.");
    // } finally {
    //   setLoading(false);
    // }
  };
  return (
    <div className="bg-[#1B1F27] rounded-[12px] py-8 px-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-1">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your Full Name"
                    {...field}
                    className="py-5 text-gray-700 bg-white placeholder-shown:text-sm   focus-visible:ring-0"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-1">Phone Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your Phone Number"
                    {...field}
                    className="py-5 text-gray-700 bg-white placeholder-shown:text-sm  focus-visible:ring-0"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-1">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Your Email Address"
                    {...field}
                    className="py-5 text-gray-700 bg-white placeholder-shown:text-sm  focus-visible:ring-0"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-1">Address</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Your Address"
                    {...field}
                    className="py-5 text-gray-700 bg-white placeholder-shown:text-sm  focus-visible:ring-0"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter Your Message Here..."
                    {...field}
                    className="w-full placeholder-shown:text-sm text-gray-700 bg-white  focus-visible:ring-0 resize-none min-h-[120px]"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <CustomButton
              disabled={isSubmitting}
              type="submit"
              className={`${
                isSubmitting
                  ? "bg-primary/50 cursor-not-allowed"
                  : " hover:bg-primary/90 "
              } rounded-xl px-15 py-6 text-white`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </CustomButton>
          </div>
        </form>
      </Form>
    </div>
  );
};
