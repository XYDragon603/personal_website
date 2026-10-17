export type Project = {
  slug: string;
  title: string;
  titleZh: string;
  category: 'Full-stack' | 'Mobile' | 'Web' | 'Coursework';
  status: 'Deployed' | 'Completed' | 'In Development';
  description: string;
  descriptionZh: string;
  tech: string[];
  tone: string;
  cover?: string;
  gallery?: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: 'ielts-yunlong',
    title: 'IELTS Studio',
    titleZh: '雅思模考',
    category: 'Full-stack',
    status: 'In Development',
    description: 'A full IELTS mock-exam web app covering listening, reading, writing and speaking, with auto-grading, exam timers and review reports. Its Cambridge question bank is built through a local OCR import pipeline, and the app deploys on Cloudflare Pages + R2.',
    descriptionZh: '覆盖听力、阅读、写作、口语的完整雅思模考网页应用：自动判题、考试计时、答题复盘与报告导出；剑桥真题库经本地 OCR 导入管线整理入库，应用部署在 Cloudflare Pages + R2。',
    tech: ['JavaScript', 'Node.js', 'Python', 'Cloudflare Pages', 'R2'],
    tone: 'mint',
    cover: '/images/projects/ielts/home.png',
    gallery: ['/images/projects/ielts/mock.png'],
    repoUrl: 'https://github.com/XYDragon603/IELTS-YUNLONG',
  },
  {
    slug: 'medminder',
    title: 'MedMinder',
    titleZh: '用药管理平台',
    category: 'Full-stack',
    status: 'Deployed',
    description: 'A medication management system for individuals, caregivers and administrators, combining schedules, dose logs, refill alerts and adherence reports.',
    descriptionZh: '为个人用户、照护者和管理员设计的用药管理系统，整合服药计划、打卡记录、补药提醒和依从性报告。',
    tech: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL'],
    tone: 'blue',
    cover: '/images/projects/medminder/reports.jpg',
    gallery: [
      '/images/projects/medminder/medications.jpg',
      '/images/projects/medminder/login.jpg',
    ],
    // liveUrl: 'https://medminder.xydragon.com', // 暂时隐藏：站点当前不可达，恢复后再启用
  },
  {
    slug: 'wedding-planning',
    title: 'Wedding Memoir',
    titleZh: '婚礼纪念网站',
    category: 'Web',
    status: 'Completed',
    description: 'A bilingual wedding memory website featuring photo galleries, background music, guest messages and responsive mobile design.',
    descriptionZh: '一个中英双语的婚礼纪念网站，包含照片展示、背景音乐、留言祝福和移动端适配。',
    tech: ['HTML', 'CSS', 'JavaScript', 'Cloudflare D1'],
    tone: 'wedding',
    cover: '/images/projects/wedding/og-cover.jpg',
    gallery: [
      '/images/projects/wedding/W99A2149.webp',
      '/images/projects/wedding/W99A2530.webp',
      '/images/projects/wedding/W99A1716.webp',
      '/images/projects/wedding/W99A2707.webp',
    ],
    repoUrl: 'https://github.com/XYDragon603/Web-wedding',
  },
  {
    slug: 'fitness-miniapp',
    title: 'Air Health',
    titleZh: '健身计划记录小程序',
    category: 'Mobile',
    status: 'In Development',
    description: 'A WeChat Mini Program for structured strength training: a 1,324-exercise library, workout logging with progress curves, nutrition tracking, weekly reports, share cards, and cloud backup with restore.',
    descriptionZh: '基于三分化训练计划的微信小程序：1324 个动作的动作库、训练记录与动作曲线、饮食营养记录、周报与分享卡、云备份与数据恢复。',
    tech: ['WeChat Mini Program', 'JavaScript', 'WXML', 'WXSS', 'Cloud Backup'],
    tone: 'rose',
    cover: '/images/projects/air-health/today.jpg',
    gallery: [
      '/images/projects/air-health/library.jpg',
      '/images/projects/air-health/stats.jpg',
    ],
    repoUrl: 'https://github.com/XYDragon603/Fitness-Miniapp',
  },
  {
    slug: 'almanac-app',
    title: 'Almanac Intelligence',
    titleZh: '历法与节气工具',
    category: 'Mobile',
    status: 'In Development',
    description: 'A Flutter app for calendar conversion, traditional almanac data, solar terms, and saved history.',
    descriptionZh: '一个用于历法转换、老黄历查询、节气查看和历史保存的 Flutter 应用。',
    tech: ['Flutter', 'Dart', 'Rule Engine', 'Local Storage'],
    tone: 'amber',
    cover: '/images/projects/almanac/calendar-overview.jpg',
    gallery: [
      '/images/projects/almanac/daily-almanac.jpg',
      '/images/projects/almanac/solar-terms.jpg',
    ],
  },
  {
    slug: 'dadan-mini-program',
    title: 'Dadan Mystery',
    titleZh: '大蛋剧本杀',
    category: 'Mobile',
    status: 'In Development',
    description: 'A WeChat Mini Program for hosts to create mystery games, assign roles, manage clues, and run sessions.',
    descriptionZh: '帮助主持人创建剧本、分配角色、管理线索并推进游戏流程的微信小程序。',
    tech: ['WeChat Mini Program', 'JavaScript', 'WXML', 'WXSS'],
    tone: 'dark',
    cover: '/images/projects/dadan/host-control.png',
  },
  {
    slug: 'google-form-runner',
    title: 'Google Form Test Runner',
    titleZh: 'Google 表单测试工具',
    category: 'Coursework',
    status: 'Completed',
    description: 'A Python and Playwright tool for dry runs, controlled submissions, retries, and backoff.',
    descriptionZh: '使用 Python 与 Playwright 编写的表单测试工具，支持预演、受控提交与失败重试。',
    tech: ['Python', 'Playwright', 'Automation', 'Testing'],
    tone: 'terminal',
  },
];
