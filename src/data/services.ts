import type { ImageMetadata } from 'astro';

import aiAssistantImage from '@/assets/services/ai-assistants.avif';
import aiDocProccessingImage from '@/assets/services/ai-document-processing.avif';
import aiIntegrationImage from '@/assets/services/ai-integration.avif';
import apiIntegrationImage from '@/assets/services/api-integration.avif';
import brandGrowthImage from '@/assets/services/brand-growth.avif';
import customSoftwareImage from '@/assets/services/custom-software.avif';
import ecommercePortalsImage from '@/assets/services/ecommerce-portals.avif';
import enterpriseSystemsImage from '@/assets/services/enterprise-systems.avif';
import legacyModernizationImage from '@/assets/services/legacy-modernization.avif';
import mobileDesktopAppsImage from '@/assets/services/mobile-desktop-apps.avif';
import processAutomationImage from '@/assets/services/process-automation.avif';
import webSaasImage from '@/assets/services/web-saas.avif';

import type IconComponent from '@iconify-react/andrsrxn/types/hqrkovbr.d.ts';

import CustomSoftwareIcon from '@iconify-react/andrsrxn/code';
import WebSaasIcon from '@iconify-react/andrsrxn/browser';
import EnterpriseSystemsIcon from '@iconify-react/andrsrxn/buildings';
import EcommercePortalsIcon from '@iconify-react/andrsrxn/shopping-bag';
import ApiIntegrationIcon from '@iconify-react/andrsrxn/link-connect';
import AiIntegrationIcon from '@iconify-react/andrsrxn/cpu';
import AiAssistantsIcon from '@iconify-react/andrsrxn/agent';
import AiDocumentProcessingIcon from '@iconify-react/andrsrxn/file-search';
import ProccessAutomationIcon from '@iconify-react/andrsrxn/workflow';
import MobileDesktopAppsIcon from '@iconify-react/andrsrxn/device-phone';
import LegacyModernizationIcon from '@iconify-react/andrsrxn/refresh';
import BrandGrowthIcon from '@iconify-react/andrsrxn/trend-up';

export interface Service {
  id: string;
  title: string;
  description: string;
  Icon: typeof IconComponent;
  image: ImageMetadata;
}

export const services: Array<Service> = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description:
      'Tailored enterprise software aligned with unique operational logic to ensure long-term scalability and reliability.',
    Icon: CustomSoftwareIcon,
    image: customSoftwareImage,
  },
  {
    id: 'web-saas',
    title: 'Web Apps. & SaaS Platforms',
    description:
      'Secure, cloud-native web applications and multi-tenant SaaS platforms driving retention and operational performance.',
    Icon: WebSaasIcon,
    image: webSaasImage,
  },
  {
    id: 'enterprise-systems',
    title: 'Enterprise Business Systems',
    description:
      'Centralized business software consolidating operational data, automating internal workflows, and reducing overhead costs.',
    Icon: EnterpriseSystemsIcon,
    image: enterpriseSystemsImage,
  },
  {
    id: 'ecommerce-portals',
    title: 'E-Commerce Architecture',
    description:
      'High-performing digital storefronts and B2B portals with integrated secure payments and real-time inventory tracking.',
    Icon: EcommercePortalsIcon,
    image: ecommercePortalsImage,
  },
  {
    id: 'api-integration',
    title: 'API Development & Integration',
    description:
      'Robust RESTful and GraphQL APIs interconnecting disparate software environments and cloud services.',
    Icon: ApiIntegrationIcon,
    image: apiIntegrationImage,
  },
  {
    id: 'ai-integration',
    title: 'AI Model & API Integration',
    description:
      'Machine learning models and AI APIs embedded directly into software applications to enhance capabilities.',
    Icon: AiIntegrationIcon,
    image: aiIntegrationImage,
  },
  {
    id: 'ai-assistants',
    title: 'AI Assistants Systems',
    description:
      'Context-aware conversational assistants and RAG search portals streamlining enterprise knowledge access.',
    Icon: AiAssistantsIcon,
    image: aiAssistantImage,
  },
  {
    id: 'ai-document-processing',
    title: 'Automated Document Processing',
    description:
      'Intelligent pipelines automatically extracting, structuring, and analyzing unformatted text and enterprise files.',
    Icon: AiDocumentProcessingIcon,
    image: aiDocProccessingImage,
  },
  {
    id: 'process-automation',
    title: 'Intelligent Process Automation',
    description:
      'End-to-end automated workflows using autonomous AI agents to eliminate operational bottlenecks.',
    Icon: ProccessAutomationIcon,
    image: processAutomationImage,
  },
  {
    id: 'mobile-desktop-apps',
    title: 'Mobile & Desktop Apps',
    description:
      'Native and cross-platform applications ensuring consistent user experiences across mobile and desktop devices.',
    Icon: MobileDesktopAppsIcon,
    image: mobileDesktopAppsImage,
  },
  {
    id: 'legacy-modernization',
    title: 'Modernization & Maintenance',
    description:
      'Cloud-ready legacy codebase modernization with proactive maintenance ensuring maximum uptime.',
    Icon: LegacyModernizationIcon,
    image: legacyModernizationImage,
  },
  {
    id: 'brand-growth',
    title: 'Branding & Growth Strategy',
    description:
      'Cohesive brand identities, multi-channel marketing, and growth strategies maximizing digital visibility and acquisition.',
    Icon: BrandGrowthIcon,
    image: brandGrowthImage,
  },
];
