import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/mock/mock";

export function FAQAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      {faq.map((faq, idx) => (
        <AccordionItem value={faq.value} key={idx}>
          <AccordionTrigger className="text-lg">{faq.title}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>{faq.body}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
