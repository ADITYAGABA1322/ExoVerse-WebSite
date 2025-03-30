"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ContactUsSection() {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen"
      id="FAQ"
    >
      <p className="text-5xl font-semibold text-center text-neutral-100 dark:text-white mb-10">
        FAQ's
      </p>
      <Accordion type="single" collapsible className="w-3/4">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-white">
            How do I use ExoVerse?
          </AccordionTrigger>
          <AccordionContent>
            ExoVerse helps you explore space interactively. Simply launch the app, navigate through different celestial bodies, and learn fascinating facts about the universe.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-white">
            How can I report an issue with the app?
          </AccordionTrigger>
          <AccordionContent>
            You can report any issues directly by emailing us at exoverse.official@gmail.com.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-white">
            Can I sync my ExoVerse data across multiple devices?
          </AccordionTrigger>
          <AccordionContent>
            Yes! Your data is synced across all your devices when you log in with the same account.
          </AccordionContent>
        </AccordionItem>
        {/* Additional Relevant Questions */}
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-white">
            How do I add a new space object to my profile?
          </AccordionTrigger>
          <AccordionContent>
            Every time you explore a new celestial body, the app will prompt you to add it to your personal collection for future reference.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-white">
            Is my personal data safe on ExoVerse?
          </AccordionTrigger>
          <AccordionContent>
            Yes, we take your privacy seriously. ExoVerse uses encryption and follows best practices to keep your personal data secure.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-white">
            How can I get support if I have a problem with the app?
          </AccordionTrigger>
          <AccordionContent>
            For support, you can contact our team via email at support@exoverse.com.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-white">
            Does ExoVerse have a web version?
          </AccordionTrigger>
          <AccordionContent>
            No, you can access ExoVerse's full functionality on our iOS app.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
