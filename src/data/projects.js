// src/data/projects.js
import tonelLogo from "../assets/Tonelyo.png";
import kwizinyoLogo from "../assets/Kwizinyo.png";
import poteyoLogo from "../assets/Poteyo.png";
import toneldemo from "../assets/tonelvideo.mp4";
import kwizinyoDemo from "../assets/kwizinyoDemo.mp4";
import KachingaIcon from "../assets/kachinga-icon.png";
import { foodOrderingTechStack } from "./tonelyoTechStack.js"

import {
  TonelyoHome,
  TonelyoCart,
  TonelyoProduct,
  TonelyoStores,
  TonelyoStoreMenu,
} from "./tonelyoPreviews";

import{
    kPreview1,
    kPreview2,
    kPreview3,
    kPreview4,
    kPreview5,
    kPreview6,
    kPreview7,
    kPreview8,
} from "./kwizinyoPreviews"

export const projects = [
  {
    id: "kachinga",
    title: "Kachinga",
    description:
      "Pioneering developer (1 of 3) for a mobile app and spend card platform designed to help parents teach kids money management. Built the app using Xamarin/C# and developed backend RESTful APIs with ASP.NET. Designed and connected MySQL databases, created stored procedures, and implemented end-to-end full-stack functionality, enabling secure transactions, account management, and real-time updates.",
    logo: KachingaIcon,
    video: toneldemo,
    previews: [
      TonelyoHome,
      TonelyoCart,
      TonelyoProduct,
      TonelyoStores,
      TonelyoStoreMenu,
    ],
    featuresComponent: "Tonelyo",
    techStack: "Tech Stack: Xamarin, C#, ASP.NET, RESTful APIs, MySQL, Stored Procedures, iOS/Android",
    company: "FilAm Software Technology"
  },
  {
    id: "tonelyo",
    title: "Tonelyo",
    description: "Developed the iOS app enabling users to browse menus, add items to store-specific carts, and pay securely via in-app wallet, ACH/e-payments, or credit/debit cards. Implemented real-time order tracking, Apple Maps integration to locate nearby restaurants and catering services, push notifications for order updates and promotions, and in-app messaging for direct communication with restaurants or caterers.",
    logo: tonelLogo,
    video: toneldemo,
    previews: [
      TonelyoHome,
      TonelyoCart,
      TonelyoProduct,
      TonelyoStores,
      TonelyoStoreMenu,
    ],
    featuresComponent: "Tonelyo",
     techStack: "Swift/UIKit, MVVM, REST APIs, Push Notifications, Maps, In-App Messaging",
     company: "UnlimitedIA"
  },
  {
    id: "kwizinyo",
    title: "Kwizinyo",
    description: "Built the iOS app for restaurants and catering services, enabling efficient order management, real-time menu updates, and secure payments via in-app wallet, ACH/e-payments, or credit/debit cards. Implemented Apple Maps integration for delivery logistics, push notifications for new orders and updates, and in-app messaging for direct communication with customers to handle special requests or order changes.",
    logo: kwizinyoLogo,
    video: kwizinyoDemo,
    previews: [
        kPreview1,
        kPreview2,
        kPreview3,
        kPreview4,
        kPreview5,
        kPreview6,
        kPreview7,
        kPreview8],
    featuresComponent: "Tonelyo",
    techStack: "Swift/UIKit, MVVM, REST APIs, Push Notifications, Maps, In-App Messaging",
     company: "UnlimitedIA"
  },
  {
    id: "poteyo",
    title: "Poteyo",
    description: "Developed the iOS app for delivery drivers to manage and complete orders efficiently. Implemented real-time order assignment and tracking, Apple Maps integration for route navigation, push notifications for new orders and updates, and in-app messaging for direct communication with customers or restaurants. Enabled status updates from pickup to delivery, ensuring seamless coordination across the platform.",
    logo: poteyoLogo,
    video: kwizinyoDemo,
    previews: [],
    featuresComponent: "Tonelyo",
     techStack: "Swift/UIKit, MVVM, REST APIs, Push Notifications, Maps, In-App Messaging",
     company: "UnlimitedIA"
  }
];
