import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./FAQs.css";

interface FAQItem {
  key: string;
  title: string;
  content: React.ReactNode;
}

export default function FAQs() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const faqItems: FAQItem[] = [
    {
      key: "faq-1",
      title: "What is Interface UI?",
      content: (
        <p>
          Interface UI is a comprehensive, modern React component library built
          with TypeScript. It provides beautiful, accessible, and customizable
          components for building exceptional user interfaces. With 30+
          components and 100% TypeScript support, it's designed to help
          developers create stunning UIs quickly and efficiently.
        </p>
      ),
    },
    {
      key: "faq-2",
      title: "How do I get started with Interface UI?",
      content: (
        <p>
          Getting started is easy! Simply install the library using npm or yarn,
          import the components you need, and start building. Each component is
          fully documented with examples and props. Check out our documentation
          for detailed installation instructions and usage examples.
        </p>
      ),
    },
    {
      key: "faq-3",
      title: "Is Interface UI free to use?",
      content: (
        <p>
          Yes, Interface UI is completely free and open-source. You can use it
          in any project, whether personal or commercial, without any licensing
          fees. We believe in providing high-quality tools that help developers
          build better applications.
        </p>
      ),
    },
    {
      key: "faq-4",
      title:
        "What makes Interface UI different from other component libraries?",
      content: (
        <p>
          Interface UI stands out with its zero dependencies approach, ensuring
          lightweight and fast-loading components. All components are built with
          TypeScript for type safety, accessibility in mind, and modern design
          principles. The library focuses on customization and flexibility while
          maintaining a consistent design language.
        </p>
      ),
    },
    {
      key: "faq-5",
      title: "Can I customize the components to match my design system?",
      content: (
        <p>
          Absolutely! Interface UI components are highly customizable through
          CSS variables, props, and theming support. You can easily override
          styles, change colors, adjust spacing, and modify behavior to match
          your design system. Each component is designed with extensibility in
          mind, allowing you to maintain your brand identity while leveraging
          our component foundation.
        </p>
      ),
    },
  ];

  const toggleItem = (key: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent, key: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleItem(key);
    }
  };

  return (
    <section className="faqs-section">
      <div className="faqs-container">
        <h2 className="faqs-title">Frequently Asked Questions</h2>
        <p className="faqs-description">
          Have questions? We've got answers. Check out our most commonly asked
          questions below.
        </p>
        <div className="faqs-list">
          {faqItems.map((item) => {
            const isOpen = openItems.has(item.key);

            return (
              <div
                key={item.key}
                className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
              >
                <button
                  className="faq-header"
                  onClick={() => toggleItem(item.key)}
                  onKeyDown={(e) => handleKeyDown(e, item.key)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${item.key}`}
                >
                  <span className="faq-title">{item.title}</span>
                  <ChevronDown
                    className={`faq-icon ${isOpen ? "faq-icon--open" : ""}`}
                    size={20}
                  />
                </button>
                <div
                  id={`faq-content-${item.key}`}
                  className="faq-content-wrapper"
                >
                  <div className="faq-content">{item.content}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
