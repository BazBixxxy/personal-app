import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2, Mail } from "lucide-react";
import { forgotPasswordSchema } from "@/lib/schema";
import useForgotPassword from "../hooks/useForgotPassword";
import { Link } from "react-router-dom";
import Logo from "@/assets/logo/logo";

export default function ForgotPasswordForm({ className, ...props }) {
  const { loading, forgotPassword } = useForgotPassword();
  const form = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values) {
    // console.log(values);
    await forgotPassword(values.email);
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2">
              <Link
                to="/"
                className="flex flex-col items-center gap-2 font-medium"
              >
                <div className="flex size-8 items-center justify-center rounded-md">
                  <Logo className="size-6" />
                </div>
                <span className="sr-only">Charis Place Inc.</span>
              </Link>
              <h1 className="text-xl font-bold">
                Welcome to Charis Place Inc.
              </h1>
              <div className="text-center text-sm">
                No need to change your password?{" "}
                <Link to="/login" className="underline underline-offset-4">
                  Login
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="m@example.com"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
              <Button type="submit" className="w-full">
                {loading ? (
                  <>
                    <Loader2 className="animate-spin mr-1" />
                    <span>Loading...</span>
                  </>
                ) : (
                  <>
                    <Mail />
                    <span>Send Email</span>
                  </>
                )}
              </Button>
            </div>
          </div>
        </form>
      </Form>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our terms and conditions and privacy
        policies.
      </div>
    </div>
  );
}
