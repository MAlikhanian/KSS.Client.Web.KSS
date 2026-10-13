import type { Lang } from "./copy";

export type ServiceIcon =
  | "layers"
  | "connections"
  | "network"
  | "support"
  | "spark";
export type ServiceGroupId =
  | "software"
  | "platform"
  | "infrastructure"
  | "support"
  | "ai";
export type Availability = "available" | "roadmap" | "pilot";
export type Service = {
  id: string;
  group: ServiceGroupId;
  name: Record<Lang, string>;
  oneLiner: Record<Lang, string>;
  icon: ServiceIcon;
  availability: Availability;
};
export type ServiceGroup = {
  id: ServiceGroupId;
  number: number;
  name: Record<Lang, string>;
  icon: ServiceIcon;
};

export const serviceGroups: readonly ServiceGroup[] = [
  {
    id: "software",
    number: 1,
    name: {
      en: "Software products",
      fa: "نرم‌افزارهای کاربردی",
    },
    icon: "layers",
  },
  {
    id: "platform",
    number: 2,
    name: {
      en: "Platform services",
      fa: "خدمات پلتفرم",
    },
    icon: "connections",
  },
  {
    id: "infrastructure",
    number: 3,
    name: {
      en: "Network & infrastructure",
      fa: "شبکه و زیرساخت",
    },
    icon: "network",
  },
  {
    id: "support",
    number: 4,
    name: {
      en: "Managed support",
      fa: "پشتیبانی مدیریت‌شده",
    },
    icon: "support",
  },
  {
    id: "ai",
    number: 5,
    name: {
      en: "AI operations",
      fa: "عملیات هوش مصنوعی",
    },
    icon: "spark",
  },
];

export const services: readonly Service[] = [
  {
    id: "1.1",
    group: "software",
    name: {
      fa: "تنخواه و تسویه هزینه",
      en: "Cash advance & settlement",
    },
    oneLiner: {
      fa: "درخواست، تأیید و تسویه تنخواه پروژه‌ها همراه با فاکتور، در یک گردش‌کار قابل‌حسابرسی.",
      en: "Request, approve and settle project cash advances with invoices, in one auditable workflow.",
    },
    icon: "layers",
    availability: "available",
  },
  {
    id: "1.2",
    group: "software",
    name: {
      fa: "رتبه‌بندی ریسک اعتباری مشتریان",
      en: "Customer credit-risk rating",
    },
    oneLiner: {
      fa: "سنجش ریسک اعتباری هر مشتری با موتور محاسبه شفاف و سپس تأیید آن، بدون صفحه‌گسترده.",
      en: "Score every client's credit risk with a transparent formula engine, then approve it, without spreadsheets.",
    },
    icon: "layers",
    availability: "available",
  },
  {
    id: "1.3",
    group: "software",
    name: {
      fa: "سامانه مشترک ثبت و استعلام ریسک مشتریان",
      en: "Shared customer-risk registry",
    },
    oneLiner: {
      fa: "پرونده‌های مشترک تا نهادهای عضو، مشتریان پرریسک را ثبت کنند و مشتریان جدید را در سطح صنعت استعلام بگیرند.",
      en: "A shared case registry, so member firms can record risky clients and check new ones across the industry.",
    },
    icon: "layers",
    availability: "available",
  },
  {
    id: "1.4",
    group: "software",
    name: {
      fa: "اطلاعات و گزارش‌گیری اعضای انجمن",
      en: "Association members information",
    },
    oneLiner: {
      fa: "یک مرجع معتبر برای اطلاعات نهادها و صندوق‌های عضو، با گزارش‌هایی که انجمن یا ناظر نیاز دارد.",
      en: "One authoritative registry of member firms and funds, with the reports a regulator or association needs.",
    },
    icon: "layers",
    availability: "available",
  },
  {
    id: "1.5",
    group: "software",
    name: {
      fa: "مجمع عمومی و انتخابات هیئت‌مدیره",
      en: "General meeting & board elections",
    },
    oneLiner: {
      fa: "برگزاری کامل مجمع عمومی: حضور و غیاب، نامزدها و انتخابات قابل‌راستی‌آزمایی هیئت‌مدیره.",
      en: "Run your general meeting end to end: attendance, candidates and a verifiable board election.",
    },
    icon: "layers",
    availability: "available",
  },
  {
    id: "1.6",
    group: "software",
    name: {
      fa: "گزارش روزانه عملیات",
      en: "Daily operations reporting",
    },
    oneLiner: {
      fa: "گزارش روزانه عملیات از محل کار، تأییدشده توسط سرپرستان و جمع‌بندی‌شده در یک داشبورد مدیریتی.",
      en: "Daily operation reports from the field, approved by supervisors and rolled up into one management dashboard.",
    },
    icon: "layers",
    availability: "available",
  },
  {
    id: "1.7",
    group: "software",
    name: {
      fa: "گزارش‌ساز متصل به ERP",
      en: "ERP Reporting Connectors",
    },
    oneLiner: {
      fa: "گزارش‌های زنده مستقیم از ERP فعلی شما، بدون ورود دوباره اطلاعات.",
      en: "Live reports read straight from your existing ERP, with no re-keying.",
    },
    icon: "layers",
    availability: "available",
  },
  {
    id: "1.8",
    group: "software",
    name: {
      fa: "مدیریت سبد سرمایه‌گذاران",
      en: "Investor Portfolio Management",
    },
    oneLiner: {
      fa: "واریز و برداشت سرمایه‌گذاران، از درخواست تا تسویه و تطبیق، همراه با درگاه سرمایه‌گذار.",
      en: "Investor deposits and withdrawals, from request to settlement and reconciliation, with an investor portal.",
    },
    icon: "layers",
    availability: "roadmap",
  },
  {
    id: "1.9",
    group: "software",
    name: {
      fa: "توسعه نرم‌افزار سفارشی",
      en: "Custom Application Development",
    },
    oneLiner: {
      fa: "نرم‌افزار تحت وب اختصاصی شما، ساخته‌شده روی پلتفرم KSS در سه مرحله تأییدشده: رابط کاربری، پایگاه داده، بخش پشتیبان.",
      en: "Your own web application, built on the KSS platform in three approved stages: interface, database, back end.",
    },
    icon: "layers",
    availability: "available",
  },
  {
    id: "2.1",
    group: "platform",
    name: {
      fa: "پورتال یکپارچه و ورود یکپارچه",
      en: "Unified Portal & Single Sign-On",
    },
    oneLiner: {
      fa: "یک ورود و یک نشانی برای همه نرم‌افزارهای KSS شما، با نشان تجاری خودتان.",
      en: "One sign-in and one address for all your KSS applications, branded as your own.",
    },
    icon: "connections",
    availability: "available",
  },
  {
    id: "2.2",
    group: "platform",
    name: {
      fa: "پرونده جامع اشخاص",
      en: "Persons registry",
    },
    oneLiner: {
      fa: "پرونده‌ای کامل و ساختاریافته برای هر شخصی که سازمان شما با او سروکار دارد.",
      en: "A complete, structured record for every person your organisation deals with.",
    },
    icon: "connections",
    availability: "available",
  },
  {
    id: "2.3",
    group: "platform",
    name: {
      fa: "شناسنامه شرکت‌ها",
      en: "Company profiles",
    },
    oneLiner: {
      fa: "اطلاعات ساختاریافته شرکت‌ها با سابقه کامل: نام‌ها، ذی‌نفعان، اطلاعات مالی، اسناد.",
      en: "Structured company records with full history: names, stakeholders, finances, documents.",
    },
    icon: "connections",
    availability: "available",
  },
  {
    id: "2.4",
    group: "platform",
    name: {
      fa: "داده‌های مرجع بازار سرمایه",
      en: "Capital-market reference data",
    },
    oneLiner: {
      fa: "داده‌های مرجع پاکیزه برای دارایی‌ها، بازارها و صنایع، مشترک میان همه نرم‌افزارهای مالی.",
      en: "Clean reference data for assets, markets and sectors, shared by every financial application.",
    },
    icon: "connections",
    availability: "available",
  },
  {
    id: "2.5",
    group: "platform",
    name: {
      fa: "مدیریت نقش‌ها و دسترسی‌ها",
      en: "Roles & access",
    },
    oneLiner: {
      fa: "کنترل دقیق اینکه چه کسی در هر نرم‌افزار چه چیزی ببیند و چه کاری انجام دهد.",
      en: "Fine-grained control over who sees and does what, in every application.",
    },
    icon: "connections",
    availability: "available",
  },
  {
    id: "2.6",
    group: "platform",
    name: {
      fa: "پروژه‌ها و کارگاه‌ها",
      en: "Projects & worksites",
    },
    oneLiner: {
      fa: "فهرست مرجع پروژه‌ها و کارگاه‌ها که همه نرم‌افزارهای دیگر از آن استفاده می‌کنند.",
      en: "A master list of projects and worksites that every other application uses.",
    },
    icon: "connections",
    availability: "available",
  },
  {
    id: "3.1",
    group: "infrastructure",
    name: {
      fa: "فایروال و VPN (فورتی‌گیت)",
      en: "Firewall & VPN (FortiGate)",
    },
    oneLiner: {
      fa: "فایروال و دسترسی از راه دور، پیکربندی‌شده، مقاوم‌سازی‌شده و پایدار.",
      en: "Firewalls and remote access configured, hardened and kept that way.",
    },
    icon: "network",
    availability: "available",
  },
  {
    id: "3.2",
    group: "infrastructure",
    name: {
      fa: "روتر و امنیت لبه شبکه (میکروتیک)",
      en: "Routers & Edge Security (MikroTik)",
    },
    oneLiner: {
      fa: "روترهای میکروتیک با دسترسی مدیریتی محدودشده و پشتیبان رمزگذاری‌شده هفتگی.",
      en: "MikroTik routers with locked-down management and encrypted backups every week.",
    },
    icon: "network",
    availability: "available",
  },
  {
    id: "3.3",
    group: "infrastructure",
    name: {
      fa: "سوئیچینگ، مسیریابی و بی‌سیم (سیسکو)",
      en: "Switching, Routing & Wireless (Cisco)",
    },
    oneLiner: {
      fa: "شبکه‌های ستاد و شعب، مستند و پایدار.",
      en: "Campus and branch networks that stay documented and stable.",
    },
    icon: "network",
    availability: "available",
  },
  {
    id: "3.4",
    group: "infrastructure",
    name: {
      fa: "مجازی‌سازی (VMware و Hyper-V)",
      en: "Virtualization (VMware, Hyper-V)",
    },
    oneLiner: {
      fa: "بستر مجازی سالم: ظرفیت، به‌روزرسانی و قابلیت بازیابی.",
      en: "A healthy virtual platform: capacity, updates and recoverability.",
    },
    icon: "network",
    availability: "available",
  },
  {
    id: "3.5",
    group: "infrastructure",
    name: {
      fa: "ویندوز سرور و اکتیودایرکتوری",
      en: "Windows Server & Active Directory",
    },
    oneLiner: {
      fa: "دایرکتوری، خدمات فایل و Group Policy، منظم و قابل‌حسابرسی.",
      en: "Directory, file services and group policy that are clean and auditable.",
    },
    icon: "network",
    availability: "available",
  },
  {
    id: "3.6",
    group: "infrastructure",
    name: {
      fa: "پشتیبان‌گیری و پایش",
      en: "Backup & Monitoring",
    },
    oneLiner: {
      fa: "پشتیبانی که واقعاً قابل بازیابی است، و پایشی که پیش از کاربران هشدار می‌دهد.",
      en: "Backups you can actually restore, and monitoring that alerts before users notice.",
    },
    icon: "network",
    availability: "available",
  },
  {
    id: "3.7",
    group: "infrastructure",
    name: {
      fa: "خدمات ابری (AWS و Azure)",
      en: "Cloud (AWS, Azure)",
    },
    oneLiner: {
      fa: "بارهای کاری ابری، راه‌اندازی‌شده به‌صورت امن و با توجه به هزینه.",
      en: "Cloud workloads set up securely and kept cost-aware.",
    },
    icon: "network",
    availability: "available",
  },
  {
    id: "3.8",
    group: "infrastructure",
    name: {
      fa: "ایمیل، مایکروسافت ۳۶۵ و دامنه",
      en: "Microsoft 365, Mail & Domains",
    },
    oneLiner: {
      fa: "ایمیلی که می‌رسد، دامنه‌ای که پاسخ می‌دهد، گواهی‌ای که هرگز غافلگیرانه منقضی نمی‌شود.",
      en: "Mail that arrives, domains that resolve, certificates that never expire by surprise.",
    },
    icon: "network",
    availability: "available",
  },
  {
    id: "3.9",
    group: "infrastructure",
    name: {
      fa: "امنیت و پاسخ به رخداد",
      en: "Security Review & Incident Response",
    },
    oneLiner: {
      fa: "نقاط ضعف خود را پیش از مهاجم بشناسید، و هنگام رخداد پاسخ‌دهنده داشته باشید.",
      en: "Know your weak points before an attacker does, and have a responder when something happens.",
    },
    icon: "network",
    availability: "available",
  },
  {
    id: "3.10",
    group: "infrastructure",
    name: {
      fa: "کاربران و رایانه‌ها",
      en: "Endpoints & End-User IT",
    },
    oneLiner: {
      fa: "رایانه‌ها، چاپگرها و حساب‌های کاربری، به‌روز و در حال کار.",
      en: "Workstations, printers and user accounts kept patched and running.",
    },
    icon: "network",
    availability: "available",
  },
  {
    id: "4.1",
    group: "support",
    name: {
      fa: "اتاق پشتیبانی اختصاصی",
      en: "Dedicated Support Room",
    },
    oneLiner: {
      fa: "کانال پشتیبانی اختصاصی شما، با پاسخ‌گویی تیم KSS، به زبان شما و با پاسخ‌های صادقانه.",
      en: "Your own support channel, staffed by the KSS team, in your language, with honest answers.",
    },
    icon: "support",
    availability: "available",
  },
  {
    id: "4.2",
    group: "support",
    name: {
      fa: "نگهداری و توسعه نرم‌افزار",
      en: "Application Care",
    },
    oneLiner: {
      fa: "رفع اشکال و بهبود مستمر نرم‌افزارهای KSS شما، با زمان‌بندی مشخص.",
      en: "Ongoing fixes and improvements to your KSS applications, on a clear schedule.",
    },
    icon: "support",
    availability: "available",
  },
  {
    id: "5.1",
    group: "ai",
    name: {
      fa: "تیم عملیاتی هوش مصنوعی",
      en: "AI Operations Team",
    },
    oneLiner: {
      fa: "تیمی ساختاریافته از دستیاران هوش مصنوعی (پشتیبانی، مهندسی، عملیات شبکه) که زیر نظر و با تأیید انسانی کار می‌کنند؛ همان‌گونه که خود KSS اداره می‌شود.",
      en: "A structured team of AI agents (support, engineering, network operations) working under human approval, the way KSS itself runs.",
    },
    icon: "spark",
    availability: "pilot",
  },
  {
    id: "5.2",
    group: "ai",
    name: {
      fa: "پشتیبانی هوشمند مشتریان",
      en: "AI-Assisted Customer Support",
    },
    oneLiner: {
      fa: "پاسخ نخست فوری و صادقانه به فارسی یا انگلیسی، متنی یا صوتی، و ارجاع به متخصص مناسب.",
      en: "Instant, honest first response in Persian or English, by text or voice, escalated to the right specialist.",
    },
    icon: "spark",
    availability: "pilot",
  },
];
