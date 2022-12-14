/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What's FundMe?",
    answer:
      "FundMe is a platform that helps individuals and organizations recieve funds in SGD, GBP & EUR",
  },
  {
    question: "What happens after donation?",
    answer:
      "Users can create virtual cards attached to the virtual bank account and they will be able to spend their funds from the card",
  },
  {
    question: "How can I become a partner?",
    answer:
      "To become a partner, you'll have to contact our support down below.",
  },
  {
    question: "What if I have an issue with my card?",
    answer: "Contact our support, we are ready to help anytime.",
  },
  {
    question: "Why can't I create a virtual card",
    answer:
      "This feature is not yet supported, we are still waiting on our partners Rapyd.",
  },
  // More questions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FAQ() {
  return (
    <div className="bg-[#fff]" id="#faq">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl sm:tracking-tight">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <p className="font-medium text-gray-900">
                          {faq.question}
                        </p>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
