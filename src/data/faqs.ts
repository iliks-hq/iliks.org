import type { FAQItem } from '@/components/seo/JsonLd.astro';

export const faqs: Array<FAQItem> = [
  {
    question: 'Do you build custom software or use templates?',
    answer:
      "Custom. We design and write each project around the client's brand and requirements, not from a pre-built theme. We do reuse our own component libraries and design systems, which saves time and keeps costs down.",
  },
  {
    question: 'What happens if the scope changes mid-project?',
    answer:
      'On a fixed-price project, a request outside the agreed scope gets a written change request from our Delivery Lead showing the cost and schedule impact, new features goes to the kanban board with no contract change.',
  },
  {
    question: 'Are there hidden fees?',
    answer:
      'No. Our quotes list our engineering fees separately from third-party costs such as hosting (AWS, Vercel), domain names, paid APIs (Stripe, OpenAI) and CMS licenses. You get an itemized breakdown before you sign.',
  },
  {
    question: 'Can we start with a small project before committing to a full build?',
    answer:
      "Yes. You can start with a discovery audit, a UX/UI prototype, a performance and security audit, or a single landing page. It's a low-risk way to see how we work before committing to a larger project.",
  },
  {
    question: 'How will we communicate during the project?',
    answer:
      'You get a private Slack or Discord channel with the engineers and your Delivery Lead. We post progress daily, keep task boards in Jira, Linear or Trello so you can see status at any time, and run a live demo every week so you can review working software and give feedback.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'It depends on scope. Landing pages and single-page sites take 1 to 2 weeks. MVPs and custom web apps take 4 to 8 weeks, released in 2-week sprints. Larger enterprise systems take several months, planned in milestones with a production release at the end of each one.',
  },
  {
    question: 'What support do you offer after launch?',
    answer:
      'Every project includes a post-launch warranty period for bug fixes. After that, you can sign a monthly support agreement covering security monitoring, off-site backups, framework updates and performance tuning. Response times are set in the agreement.',
  },
  {
    question: 'Why choose ILIKS over a freelancer or a traditional outsourcing agency?',
    answer:
      'Compared with a solo freelancer, you get a team covering design, engineering and QA, a dedicated project lead, and a contract. Compared with a traditional outsourcing agency, you get modern front-end tools, a design-first approach and direct daily contact with the people building your product.',
  },
];
