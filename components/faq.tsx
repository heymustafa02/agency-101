"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { motion } from "framer-motion";

export default function Faq() {
  const accordionItems = [
    {
      title: "What services are available?",
      content: (
        <div className="text-muted-foreground">
          Wr provide wide range of services like Web Design, Development & Branding.
        </div>
      ),
    },
    {
      title: "Do you build custom features as per client requirement?",
      content: (
        <div className="text-muted-foreground">
          Yes, we build various custom features for our clients
        </div>
      ),
    },
    {
      title: "How can I reach out to you?",
      content: (
        <div className="text-muted-foreground">
          You can reach out to me via {" "}
          <a
            href="mailto:heymustafa.work@gmail.com"
            className="text-primary underline"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>
          .
        </div>
      ),
    },
  ];

  return (
    <motion.section
      id="faqs"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5, type: "spring", bounce: 0 }}
      className="relative max-w-screen-xl mx-auto px-4 py-28 gap-5 md:px-8 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col gap-3 justify-center items-center">
        <h4 className="text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          FAQ
        </h4>
        <p className="max-w-xl text-muted-foreground text-center">
          Here are some of our frequently asked questions.
        </p>
      </div>
      <div className="max-w-lg w-full">
        <Accordion
          fullWidth
          selectionMode="multiple"
          variant="splitted"
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                height: "auto",
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 1,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 1,
                  },
                },
              },
              exit: {
                y: -10,
                opacity: 0,
                height: 0,
                transition: {
                  height: {
                    easings: "ease",
                    duration: 0.25,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 0.3,
                  },
                },
              },
            },
          }}
        >
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              aria-label={item.title}
              title={item.title}
              className="text-muted-foreground"
            >
              {item.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
}