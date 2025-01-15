"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import axios from "axios";

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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { FormAddProfileProps } from "./FormAddProfile.types";
import { formSchema } from "./FormAddProfile.form";
import { dataProfilesImages } from "./FormAddProfile.data";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

export function FormAddProfile(props: FormAddProfileProps) {
  const { setOpen } = props;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      profileName: "",
      avatarUrl: undefined,
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/userNetflix", values);
      if (response.status !== 200) {
        toast({
          title: "Ups! Something went wrong",
          variant: "destructive",
        });
      } else {
        toast({
          title: "User added successfully",
        });
      }
      router.refresh();
      setOpen(false);
    } catch (error) {
      console.log(error);
      toast({
        title: "Ups! Something went wrong",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="profileName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profile name</FormLabel>
              <FormControl>
                <Input placeholder="Eduardo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="avatarUrl"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Select your profile image</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex space-y-1"
                >
                  {dataProfilesImages.map((data) => (
                    <FormItem
                      key={data.urlImage}
                      className="flex cursor-pointer flex-col-reverse items-center justify-center space-x-5 space-y-0"
                    >
                      <FormControl className="ml-3 mt-1 text-white">
                        <RadioGroupItem value={data.urlImage} />
                      </FormControl>
                      <FormLabel className="flex w-full justify-center font-normal">
                        <Image
                          src={data.urlImage}
                          alt="Profile"
                          height={50}
                          width={50}
                          className={
                            field.value === data.urlImage
                              ? "cursor-pointer border border-white"
                              : ""
                          }
                        />
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          Add User
        </Button>
      </form>
    </Form>
  );
}
