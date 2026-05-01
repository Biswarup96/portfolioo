export const assets = {
  user_image: "/user-image.png",
  code_icon: "/code-icon.png",
  code_icon_dark: "/code-icon-dark.png",
  edu_icon: "/edu-icon.png",
  edu_icon_dark: "/edu-icon-dark.png",
  project_icon: "/project-icon.png",
  project_icon_dark: "/project-icon-dark.png",
  vscode: "/vscode.png",
  firebase: "/firebase.png",
  supabase:"/supabase.png",
  prisma:"/prisma.png",
  
  git: "/git.png",
  right_arrow_white: "/right-arrow-white.png",
  logo: "/biswalogo.png",
  logo_dark: "/logo_dark.png",
  mail_icon: "/mail_icon.png",
  mail_icon_dark: "/mail_icon-dark.png",
  profile_img: "/profile-img.png",
  download_icon: "/download-icon.png",
  hand_icon: "/hand-icon.png",
  header_bg_color: "/header-bg-color.png",
  moon_icon: "/moon_icon.png",
  sun_icon: "/sun_icon.png",
  arrow_icon: "/arrow-icon.png",
  arrow_icon_dark: "/arrow-icon-dark.png",
  menu_black: "/menu-black.png",
  menu_white: "/menu-white.png",
  close_black: "/close-black.png",
  close_white: "/close-white.png",
  web_icon: "/web-icon.png",
  mobile_icon: "/mobile-icon.png",
  ui_icon: "/ui-icon.png",
  graphics_icon: "/graphics-icon.png",
  right_arrow: "/right-arrow.png",
  send_icon: "/send-icon.png",
  right_arrow_bold: "/right-arrow-bold.png",
  right_arrow_bold_dark: "/right-arrow-bold-dark.png",
} as const;

// Work Data
export interface WorkItem {
  title: string;
  description: string;
  bgImage: string;
}

export const workData: WorkItem[] = [
  // { title: "Crypto Tracker", description: "Website", bgImage: "/crypto.png" },
  // { title: "Cake Shop", description: "Website", bgImage: "/monginis.png" },
  // { title: "Book Review System", description: "Website", bgImage: "/bookreview.png" },
  // { title: "Weather App", description: "Website", bgImage: "/weather.png" },
];

// Service Data
export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  link: string;
}

export const serviceData: ServiceItem[] = [
  { icon: assets.web_icon, title: "Web design", description: "Web design is the process of building, programming...", link: "" },
  { icon: assets.mobile_icon, title: "Web Development", description: "Web development involves creating responsive websites for both mobile and desktop devices...", link: "" },

 
];

// Info List
export interface InfoItem {
  icon: string;
  iconDark: string;
  title: string;
  description: string;
}

export const infoList: InfoItem[] = [
  { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: "Languages", description: "HTML, CSS, JavaScript, React.js, Next.js" },
  { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: "Education", description: "B.Tech in Computer Science" },
  { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: "Projects", description: "Built more than 5 projects" },
];

// Tools Data
export const toolsData: string[] = [
  assets.vscode, assets.firebase,assets.supabase,assets.prisma, assets.git
];
