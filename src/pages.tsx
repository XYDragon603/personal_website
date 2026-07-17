import { useState, type FormEvent, type ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Box,
  CheckCircle2,
  Code2,
  Database,
  Download,
  ExternalLink,
  GitBranch,
  Image,
  Mail,
  Moon,
  Music2,
  Package,
  Send,
  Server,
  Smartphone,
  Sun,
  Users,
} from 'lucide-react';
import { useSite } from './App';
import {
  ArchitectureDiagram,
  B,
  EERDiagram,
  Icon,
  Mockup,
  ProjectCard,
  ProjectVisual,
  SectionTitle,
  categoryLabel,
  projectTitle,
  statusLabel,
} from './components';
import { profile } from './data/profile';
import { projects, type Project } from './data/projects';

const Github = GitBranch;

function Btn({ to, children, secondary = false }: { to: string; children: ReactNode; secondary?: boolean }) {
  return <Link className={secondary ? 'btn secondary' : 'btn'} to={to}>{children}</Link>;
}

export function Home() {
  const { lang } = useSite();
  const featured = projects.slice(0, 3);
  const proof = lang === 'en'
    ? [[`${projects.length}`, 'Projects in this portfolio'], ['Full-stack', 'React + Spring Boot'], ['Mobile', 'Flutter + WeChat'], ['Bangkok', 'Available for internships']]
    : [[`${projects.length}`, '个作品项目'], ['全栈开发', 'React + Spring Boot'], ['移动开发', 'Flutter + 微信小程序'], ['曼谷', '正在寻找实习机会']];

  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <span className="availability"><i /><B en="Available for internships and collaboration" zh="正在寻找实习与项目合作机会" /></span>
          <h1>
            <B className="hero-heading-line" en="Hi, I’m Yunlong." zh="你好，我是李云龙。" />
            <B className="hero-heading-line" en="I design and build practical web, mobile and data-driven products." zh="我设计并开发真正可以使用的网页、移动应用和数据系统。" />
          </h1>
          <h2><B en="I’m a Computer Science student at Mahidol University International College, focused on full-stack development, mobile experiences and database design." zh="目前就读于玛希隆大学国际学院计算机科学专业，关注全栈开发、移动端体验与数据库设计。" /></h2>
          <p>
            <B
              en="I enjoy turning coursework and real-world problems into products that can be demonstrated, deployed and continuously improved."
              zh="我喜欢把课程项目和生活中的真实问题，做成可以演示、部署并持续改进的产品。"
            />
          </p>
          <div className="actions">
            <Btn to="/projects"><B en="View Selected Work" zh="查看精选项目" /></Btn>
            <Btn to="/about" secondary><B en="About Me" zh="了解我" /></Btn>
          </div>
          <div className="socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
            <a href={`mailto:${profile.email}`} aria-label={lang === 'en' ? 'Email Yunlong' : '给云龙发邮件'}><Mail /></a>
          </div>
        </div>

        <div className="hero-stack" aria-label={lang === 'en' ? 'Selected project previews' : '精选项目预览'}>
          {featured.map((project, index) => (
            <Link className={`stack-card ${['one', 'two', 'three'][index]}`} to={`/projects/${project.slug}`} key={project.slug}>
              <label>{projectTitle(project, lang)}</label>
              <ProjectVisual project={project} featured />
            </Link>
          ))}
        </div>
      </section>

      <section className="shell proof">
        {proof.map(([value, label]) => <div key={label}><b>{value}</b><span>{label}</span></div>)}
      </section>

      <section className="section shell">
        <SectionTitle en="Selected Projects" zh="精选项目" action={<Link to="/projects"><B en="View all projects" zh="查看全部项目" /> <ArrowRight /></Link>} />
        <div className="featured">
          {featured.map((project, index) => (
            <article className="featured-card" key={project.slug}>
              <div className="featured-copy">
                <span className="overline">0{index + 1} / {categoryLabel(project.category, lang)}</span>
                <h3>{projectTitle(project, lang)}</h3>
                <p>{lang === 'en' ? project.description : project.descriptionZh}</p>
                <div className="tags">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
                <Link className="case-link" to={`/projects/${project.slug}`}><B en="Read project details" zh="查看项目详情" /> <ArrowRight /></Link>
              </div>
              <ProjectVisual project={project} featured />
            </article>
          ))}
        </div>
      </section>

      <Capabilities />
      <Process />

      <section className="section shell">
        <div className="cta">
          <div>
            <h2><B en="Open to internships and project collaboration" zh="正在寻找实习与项目合作机会" /></h2>
            <p><B en="If you are hiring, building a project team or exploring a product idea, feel free to get in touch." zh="如果你正在招聘实习生、组建项目团队，或者想讨论一个产品想法，欢迎与我联系。" /></p>
          </div>
          <Btn to="/contact"><B en="Get in Touch" zh="联系我" /></Btn>
        </div>
      </section>
    </>
  );
}

function Capabilities() {
  const { lang } = useSite();
  const items: Array<[ReactNode, string, string, string, string, string[]]> = [
    [<Code2 />, 'Full-stack Product Development', '全栈产品开发', 'Building frontend experiences, REST APIs and business logic with React and Spring Boot.', '使用 React 和 Spring Boot 构建前后端功能、REST API 与业务流程。', ['React', 'Spring Boot', 'REST API']],
    [<Smartphone />, 'Mobile & Mini Programs', '移动端与小程序', 'Creating mobile-first experiences with Flutter and WeChat Mini Programs.', '使用 Flutter 和微信小程序开发适配移动场景的交互体验。', ['Flutter', 'WeChat', 'Mobile UI']],
    [<Database />, 'Database & System Design', '数据库与系统设计', 'Designing EER models, normalized schemas, SQL queries and reporting logic.', '设计 EER 模型、规范化数据结构、SQL 查询和报表逻辑。', ['PostgreSQL', 'EER', 'SQL']],
    [<Package />, 'Deployment & Collaboration', '部署与协作', 'Using Docker, GitHub Actions, Cloudflare and Render for deployment and version control.', '使用 Docker、GitHub Actions、Cloudflare 和 Render 完成部署与版本管理。', ['Docker', 'GitHub Actions', 'Cloudflare']],
  ];

  return (
    <section className="section shell">
      <SectionTitle en="Core Capabilities" zh="核心能力" />
      <div className="cap-grid">
        {items.map(([icon, englishTitle, chineseTitle, englishCopy, chineseCopy, tech]) => (
          <article className="cap-card" key={englishTitle}>
            <i>{icon}</i><h3>{lang === 'en' ? englishTitle : chineseTitle}</h3>
            <p>{lang === 'en' ? englishCopy : chineseCopy}</p>
            <div className="cap-tech">{tech.map((item) => <span key={item}>{item}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const { lang } = useSite();
  const steps = lang === 'en'
    ? [['01', 'Understand', 'Clarify the users, context and real problem.'], ['02', 'Design', 'Plan the user flow, interface and data structure.'], ['03', 'Build', 'Develop the core features into a usable product.'], ['04', 'Improve', 'Test real workflows, collect feedback and iterate.']]
    : [['01', '理解需求', '明确用户、场景与真正需要解决的问题。'], ['02', '设计方案', '规划用户流程、界面结构和数据关系。'], ['03', '开发产品', '优先完成核心功能，形成可以使用和演示的版本。'], ['04', '测试迭代', '测试实际流程，收集反馈并持续优化。']];

  return (
    <section className="section shell">
      <SectionTitle en="How I Build" zh="我的开发过程" />
      <div className="process">
        {steps.map(([number, label, description], index) => <div key={number}><span>{number}</span><b>{label}</b><p>{description}</p>{index < 3 && <ArrowRight />}</div>)}
      </div>
    </section>
  );
}

export function ProjectsPage() {
  const { lang } = useSite();
  const [filter, setFilter] = useState<'All' | Project['category']>('All');
  const filters: Array<'All' | Project['category']> = ['All', 'Full-stack', 'Web', 'Mobile', 'Coursework'];
  const list = filter === 'All' ? projects : projects.filter((project) => project.category === filter);

  const filterLabel = (value: typeof filter) => {
    if (value === 'All') return lang === 'en' ? 'All' : '全部';
    return categoryLabel(value, lang);
  };

  return (
    <section className="page shell">
      <div className="page-title">
        <h1><B en="Projects" zh="项目" /></h1>
        <p><B en="Coursework, personal builds, and products I have taken from an idea to a working version." zh="这里有课程项目，也有我自己想做的产品。每一个都至少完成了可以运行的版本。" /></p>
      </div>
      <div className="filters" role="group" aria-label={lang === 'en' ? 'Filter projects' : '筛选项目'}>
        {filters.map((item) => <button aria-pressed={filter === item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)} key={item}>{filterLabel(item)}</button>)}
      </div>
      <motion.div layout className="projects-grid">
        <AnimatePresence>{list.map((project) => <ProjectCard p={project} key={project.slug} />)}</AnimatePresence>
      </motion.div>
    </section>
  );
}

export function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <NotFound />;
  if (project.slug === 'medminder') return <MedMinderCase project={project} />;
  if (project.slug === 'wedding-planning') return <WeddingCase project={project} />;
  return <GenericProject project={project} />;
}

function BackToProjects() {
  return <Link to="/projects" className="back"><ArrowLeft /> <B en="Back to projects" zh="返回项目列表" /></Link>;
}

function GenericProject({ project }: { project: Project }) {
  const { lang } = useSite();
  return (
    <section className="page shell simple-detail">
      <BackToProjects />
      <div className="page-title">
        <span className="overline">{categoryLabel(project.category, lang)} · {statusLabel(project.status, lang)}</span>
        <h1>{projectTitle(project, lang)}</h1>
        <p>{lang === 'en' ? project.description : project.descriptionZh}</p>
        <div className="tags">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
      </div>
      <ProjectVisual project={project} featured />
      {project.gallery && project.gallery.length > 0 && (
        <section className="generic-gallery-section">
          <SectionTitle en="More Screens" zh="更多界面" />
          <div className="project-gallery compact">
            {project.gallery.map((src, index) => (
              <img
                src={src}
                alt={lang === 'en' ? `${project.title} screen ${index + 2}` : `${project.titleZh}界面 ${index + 2}`}
                loading="lazy"
                key={src}
              />
            ))}
          </div>
        </section>
      )}
      <div className="coming">
        <h2><B en="More details are being organized" zh="更多项目内容正在整理" /></h2>
        <p><B en="The project is included now with its current status and technology stack. Screenshots and a fuller build note will be added as the work develops." zh="目前先展示项目状态与技术栈，后续会随着开发进度补充更多截图和完整的开发记录。" /></p>
      </div>
    </section>
  );
}

function MedMinderCase({ project }: { project: Project }) {
  const { lang } = useSite();
  const nav = lang === 'en'
    ? [['overview', 'Overview'], ['features', 'Features'], ['architecture', 'Architecture'], ['database', 'Database'], ['challenges', 'Challenges'], ['reflection', 'Reflection']]
    : [['overview', '概览'], ['features', '功能'], ['architecture', '架构'], ['database', '数据库'], ['challenges', '问题与解决'], ['reflection', '总结']];
  const contributions = lang === 'en'
    ? ['Planned requirements and the data model', 'Designed the EER diagram and PostgreSQL schema', 'Built Spring Boot APIs and role-based workflows', 'Developed the React interface', 'Prepared Docker deployment and environment configuration']
    : ['梳理需求并规划数据模型', '设计 EER 图和 PostgreSQL 数据库', '开发 Spring Boot 接口与分角色流程', '完成 React 前端界面', '配置 Docker 部署与运行环境'];

  return (
    <article className="case shell">
      <BackToProjects />
      <header className="case-hero">
        <div>
          <span className="overline">{categoryLabel(project.category, lang)} · {statusLabel(project.status, lang)}</span>
          <h1>MedMinder</h1>
          <p><B en="A medication management system for daily schedules, dose records, refill alerts, and adherence reports." zh="一个用于管理每日用药计划、服药记录、补药提醒和依从性报告的系统。" /></p>
          <div className="actions">
            {project.liveUrl && <a className="btn" href={project.liveUrl} target="_blank" rel="noreferrer"><B en="Open Live Site" zh="打开在线网站" /> <ExternalLink /></a>}
            <a className="btn secondary" href={profile.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>
          </div>
        </div>
        <dl>
          {(
            lang === 'en'
              ? [['Role', 'Full-stack Developer'], ['Team', '3 people'], ['Duration', '6 weeks'], ['Platform', 'Web application']]
              : [['职责', '全栈开发'], ['团队', '3 人'], ['周期', '6 周'], ['平台', '网页应用']]
          ).map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>
      </header>

      <div className="case-main-visual"><ProjectVisual project={project} featured /></div>
      <nav className="case-nav">{nav.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}</nav>

      <section className="case-section" id="overview">
        <h2><B en="1. Overview" zh="1. 项目概览" /></h2>
        <p><B en="MedMinder brings the main medication tasks into one place. Users can follow a daily schedule, caregivers can review progress, and administrators can manage the wider system." zh="MedMinder 把日常用药相关操作集中在一个系统中。用户查看自己的计划，照护者跟进服药情况，管理员负责系统范围内的管理。" /></p>
        <div className="contribution">
          <div>
            <h2><B en="What I worked on" zh="我负责的部分" /></h2>
            <ul>{contributions.map((item) => <li key={item}><CheckCircle2 />{item}</li>)}</ul>
          </div>
          <div className="code-art"><Code2 /><span>&lt; build /&gt;</span><i>{lang === 'en' ? 'plan · code · test' : '规划 · 开发 · 测试'}</i></div>
        </div>
      </section>

      <section className="case-section" id="features">
        <h2><B en="2. Core Features" zh="2. 核心功能" /></h2>
        <div className="feature-grid">
          {[
            [<Icon.CalendarDays />, lang === 'en' ? 'Medication schedule' : '用药计划', lang === 'en' ? 'See what needs to be taken today.' : '查看当天需要服用的药物。'],
            [<Icon.Check />, lang === 'en' ? 'Dose history' : '服药记录', lang === 'en' ? 'Record taken, missed, late, or skipped doses.' : '记录已服用、漏服、迟服或跳过。'],
            [<Icon.Pill />, lang === 'en' ? 'Refill alerts' : '补药提醒', lang === 'en' ? 'Track stock before medication runs out.' : '在药物用完前跟踪库存。'],
            [<Icon.BarChart3 />, lang === 'en' ? 'Adherence reports' : '依从性报告', lang === 'en' ? 'Review monthly patterns and totals.' : '查看每月趋势与统计。'],
          ].map(([icon, title, copy]) => <article key={String(title)}><i>{icon}</i><b>{title}</b><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="case-section" id="architecture"><h2><B en="3. System Architecture" zh="3. 系统架构" /></h2><ArchitectureDiagram /></section>
      <section className="case-section" id="database"><h2><B en="4. Database Design" zh="4. 数据库设计" /></h2><EERDiagram /></section>

      <section className="case-section" id="challenges">
        <h2><B en="5. Problems and Solutions" zh="5. 问题与解决方案" /></h2>
        <div className="compare">
          {(
            lang === 'en'
              ? [
                ['A medication can repeat on different days and at different times.', 'Separate medications, schedules, and dose logs so recurring plans stay flexible without duplicating data.'],
                ['A report can become hard to scan when it shows too much at once.', 'Use a small set of summary numbers first, then show charts and detailed records only where needed.'],
              ]
              : [
                ['同一种药可能在不同日期和时间重复服用。', '把药物、计划和服药记录拆成独立数据表，既减少重复数据，也能灵活设置周期。'],
                ['报告一次显示太多内容时，很难快速看懂。', '先展示少量核心数据，再按需展开图表和详细记录。'],
              ]
          ).map(([problem, solution], index) => <article key={problem}><div><span>{lang === 'en' ? `Problem ${index + 1}` : `问题 ${index + 1}`}</span><p>{problem}</p></div><ArrowRight /><div><span>{lang === 'en' ? 'Solution' : '解决方法'}</span><p>{solution}</p></div></article>)}
        </div>
      </section>

      <section className="case-section reflection" id="reflection">
        <h2><B en="6. What I Learned" zh="6. 项目总结" /></h2>
        <p><B en="The hardest part was not an individual screen or endpoint; it was making recurring real-world events fit a clean data model. This project gave me a much stronger understanding of how the database, API, and interface need to be planned together." zh="这个项目最难的不是某个页面或接口，而是把现实中会重复发生的用药事件整理成清晰的数据结构。它让我更理解数据库、接口和界面为什么需要一起规划。" /></p>
      </section>
      <Link className="next" to="/projects/wedding-planning"><span><B en="Next project" zh="下一个项目" /></span><b><B en="Wedding Memoir" zh="婚礼纪念网站" /> <ArrowRight /></b></Link>
    </article>
  );
}

function WeddingCase({ project }: { project: Project }) {
  const { lang } = useSite();
  const nav = lang === 'en'
    ? [['w-overview', 'Overview'], ['w-features', 'Features'], ['w-build', 'Build'], ['w-gallery', 'Gallery'], ['w-reflection', 'Reflection']]
    : [['w-overview', '概览'], ['w-features', '功能'], ['w-build', '实现'], ['w-gallery', '照片'], ['w-reflection', '总结']];

  return (
    <article className="case shell wedding-case">
      <BackToProjects />
      <header className="case-hero">
        <div>
          <span className="overline">{categoryLabel(project.category, lang)} · {statusLabel(project.status, lang)}</span>
          <h1>{projectTitle(project, lang)}</h1>
          <p>{lang === 'en' ? project.description : project.descriptionZh}</p>
          <div className="actions">
            {project.repoUrl && <a className="btn secondary" href={project.repoUrl} target="_blank" rel="noreferrer"><Github /> <B en="View Source" zh="查看源码" /></a>}
          </div>
        </div>
        <dl>
          {(
            lang === 'en'
              ? [['Role', 'Designer & Developer'], ['Type', 'Personal project'], ['Frontend', 'HTML, CSS, JavaScript'], ['Hosting', 'Cloudflare Workers']]
              : [['职责', '设计与开发'], ['类型', '个人项目'], ['前端', 'HTML、CSS、JavaScript'], ['部署', 'Cloudflare Workers']]
          ).map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>
      </header>

      <div className="case-main-visual wedding-cover"><ProjectVisual project={project} featured /></div>
      <nav className="case-nav">{nav.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}</nav>

      <section className="case-section" id="w-overview">
        <h2><B en="1. Overview" zh="1. 项目概览" /></h2>
        <p><B en="I built this site to keep one wedding story, its photographs, and messages from family and friends in a single place. It is designed for both Chinese and English readers and works across desktop and mobile screens." zh="我做这个网站，是为了把一段婚礼故事、当天的照片，以及亲友的祝福集中保存下来。网站支持中英文，并针对电脑和手机分别适配了版式。" /></p>
      </section>

      <section className="case-section" id="w-features">
        <h2><B en="2. Main Features" zh="2. 主要功能" /></h2>
        <div className="feature-grid wedding-features">
          {[
            [<Image />, lang === 'en' ? 'Photo gallery' : '婚礼相册', lang === 'en' ? 'Optimized images, custom crops, and a full-screen lightbox.' : '使用优化后的图片、自定义裁切和全屏灯箱。'],
            [<Users />, lang === 'en' ? 'Online guestbook' : '在线留言', lang === 'en' ? 'Messages are stored through a Worker API and Cloudflare D1.' : '留言通过 Worker API 保存到 Cloudflare D1。'],
            [<Music2 />, lang === 'en' ? 'Background music' : '背景音乐', lang === 'en' ? 'Visitors can play or pause the selected wedding music.' : '访客可以播放或暂停婚礼背景音乐。'],
            [<Sun />, lang === 'en' ? 'Language and theme' : '语言与主题', lang === 'en' ? 'Chinese, English, light, and dark modes are remembered locally.' : '支持中英文与深浅色模式，并保存用户选择。'],
          ].map(([icon, title, copy]) => <article key={String(title)}><i>{icon}</i><b>{title}</b><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="case-section" id="w-build">
        <h2><B en="3. How It Was Built" zh="3. 实现方式" /></h2>
        <div className="build-notes">
          <article><Code2 /><div><b><B en="Content kept separate from layout" zh="内容与页面结构分开" /></b><p><B en="Names, story text, captions, and section content live in one data file, so the page can be updated without rebuilding its layout." zh="姓名、故事、照片说明和各章节内容集中放在数据文件中，修改内容时不需要重新调整页面结构。" /></p></div></article>
          <article><Box /><div><b><B en="Images prepared for the web" zh="图片专门进行网页优化" /></b><p><B en="Original photographs are preserved while a separate WebP set is generated for the website." zh="原始照片单独保留，同时生成体积更小的 WebP 图片供网站加载。" /></p></div></article>
          <article><Server /><div><b><B en="Small backend for messages" zh="为留言功能加入轻量后端" /></b><p><B en="The main site stays lightweight, while a Cloudflare Worker validates guestbook requests and stores approved entries in D1." zh="主体页面保持轻量，Cloudflare Worker 负责校验留言请求，并把有效内容存入 D1 数据库。" /></p></div></article>
        </div>
      </section>

      <section className="case-section" id="w-gallery">
        <h2><B en="4. Selected Images" zh="4. 项目照片" /></h2>
        <div className="project-gallery">
          {project.gallery?.map((src, index) => <img src={src} alt={lang === 'en' ? `Wedding website image ${index + 1}` : `婚礼网站照片 ${index + 1}`} loading="lazy" key={src} />)}
        </div>
      </section>

      <section className="case-section reflection" id="w-reflection">
        <h2><B en="5. What I Learned" zh="5. 项目总结" /></h2>
        <p><B en="This project made me pay attention to details that are easy to overlook in an application: image crop, reading rhythm, motion, music controls, and how the same sentence feels in two languages. The main lesson was that a personal site works best when the design supports the content instead of competing with it." zh="这个项目让我更关注应用里容易被忽略的细节：图片裁切、阅读节奏、动画、音乐控制，以及同一句话在两种语言里的表达差异。我最大的收获是，个人纪念网站的设计应该服务内容，而不是抢走内容的注意力。" /></p>
      </section>
      <Link className="next" to="/projects/fitness-miniapp"><span><B en="Next project" zh="下一个项目" /></span><b><B en="Air Health" zh="AI 健身记录小程序" /> <ArrowRight /></b></Link>
    </article>
  );
}

export function About() {
  const { lang } = useSite();
  const tools: Array<[ReactNode, string, string, string]> = [
    [<Server />, 'Spring Boot', 'Used for REST APIs, role-based access, and backend business logic.', '用于开发 REST API、角色权限和后端业务逻辑。'],
    [<Database />, 'PostgreSQL', 'Used for normalized schemas, constraints, queries, and reports.', '用于设计规范化数据表、约束、查询和报表。'],
    [<Smartphone />, 'Flutter', 'Used to build multi-page mobile apps with local data and rule-based logic.', '用于开发多页面移动应用、本地数据和规则逻辑。'],
    [<Code2 />, 'React & TypeScript', 'Used for responsive, component-based web interfaces.', '用于开发响应式、组件化的网页界面。'],
    [<Box />, 'WeChat Mini Programs', 'Used for fitness and interactive mystery-game products.', '用于开发健身记录与互动剧本杀产品。'],
    [<GitBranch />, 'Git & GitHub', 'Used for version control, testing workflows, and project documentation.', '用于版本管理、测试流程和项目文档。'],
  ];

  return (
    <section className="page shell">
      <div className="about-intro">
        <div className="about-copy">
          <span className="overline"><B en="ABOUT ME" zh="关于我" /></span>
          <h1><B en="I’m Yunlong, and I learn by building." zh="我是李云龙，我更习惯边做边学。" /></h1>
          <p><B en="I’m Yunlong, a Computer Science student at Mahidol University International College. My interests go beyond implementing features—I also care about user flows, data structures, system architecture and how a product is ultimately deployed and used." zh="我是李云龙，目前就读于玛希隆大学国际学院计算机科学专业。我的兴趣不只是在页面上实现功能，也包括用户流程、数据结构、系统架构和产品最终如何部署使用。" /></p>
          <p><B en="My work includes projects built with React, Spring Boot, PostgreSQL, Flutter and WeChat Mini Programs. Many began as coursework or responses to real-life needs, but I continue refining them so they become more than assignments: products that can be demonstrated, deployed and improved." zh="我的项目涉及 React、Spring Boot、PostgreSQL、Flutter 和微信小程序。很多项目最初来自课程任务或生活中的实际需求，但我会继续完善它们，让它们不只是‘能交作业’，而是能够演示、部署和持续迭代的产品。" /></p>
          <p><B en="I am currently looking for internship and project collaboration opportunities where I can participate in real development workflows and continue improving my full-stack, mobile and product-design skills." zh="目前我正在寻找实习和项目合作机会，希望参与真实的软件开发流程，并继续提升全栈开发、移动应用和产品设计能力。" /></p>
          <dl className="profile-facts">
            <div><dt><B en="University" zh="学校" /></dt><dd>{lang === 'en' ? profile.school : '玛希隆大学国际学院'}</dd></div>
            <div><dt><B en="Major" zh="专业" /></dt><dd>{lang === 'en' ? profile.major : '计算机科学'}</dd></div>
            <div><dt><B en="Location" zh="城市" /></dt><dd>{lang === 'en' ? profile.city : '曼谷'}</dd></div>
            <div><dt><B en="Focus" zh="方向" /></dt><dd>{lang === 'en' ? 'Full-stack, frontend, mobile' : '全栈、前端、移动开发'}</dd></div>
          </dl>
        </div>
        <div className="about-collage" aria-label={lang === 'en' ? 'A collage of Yunlong’s project interfaces' : '云龙的项目界面拼贴'}>
          <figure className="collage-main"><img src={projects[0].cover} alt={lang === 'en' ? 'MedMinder report interface' : 'MedMinder 报告界面'} /><figcaption>MedMinder</figcaption></figure>
          <figure className="collage-top"><img src={projects[2].cover} alt={lang === 'en' ? 'Air Health nutrition interface' : 'AI 健身记录小程序营养界面'} /><figcaption>Air Health</figcaption></figure>
          <figure className="collage-bottom"><img src={projects[3].cover} alt={lang === 'en' ? 'Almanac calendar interface' : '历法与节气工具界面'} /><figcaption>Almanac</figcaption></figure>
          <span className="collage-note"><B en="Selected interfaces · 2026" zh="项目界面选集 · 2026" /></span>
        </div>
      </div>

      <SectionTitle en="What I’ve Been Building" zh="最近在做什么" />
      <div className="timeline">
        {profile.journey.map(([date, english, chinese]) => <div key={`${date}-${english}`}><b>{date === 'Now' && lang === 'zh' ? '现在' : date}</b><span><strong>{lang === 'en' ? english : chinese}</strong></span></div>)}
      </div>

      <section className="section">
        <SectionTitle en="Technical Toolkit" zh="技术工具" />
        <div className="tool-grid">
          {tools.map(([icon, title, english, chinese]) => <article key={title}><i>{icon}</i><div><b>{title}</b><p>{lang === 'en' ? english : chinese}</p></div></article>)}
        </div>
      </section>

      <a className="resume-card" href="/resume/yunlong-li-resume.pdf" download>
        <div><b><B en="Resume" zh="个人简历" /></b><span><B en="Download the current PDF resume." zh="下载当前 PDF 简历。" /></span></div><Download />
      </a>
    </section>
  );
}

export function Contact() {
  const { lang } = useSite();
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const message = String(data.get('message') || '');
    const subject = encodeURIComponent(`${lang === 'en' ? 'Portfolio message from' : '作品集留言：'} ${name}`);
    const body = encodeURIComponent(`${message}\n\n${lang === 'en' ? 'Reply to' : '回复邮箱'}: ${email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="page shell contact-page">
      <div className="page-title">
        <span className="overline">YUNLONG LI · BANGKOK</span>
        <h1><B en="Contact" zh="联系我" /></h1>
        <p><B en="If you have an internship, a project, or just want to talk about one of my builds, send me a message." zh="如果你有实习机会、项目合作，或者想聊聊我的某个作品，欢迎给我发消息。" /></p>
      </div>
      <div className="contact-layout">
        <div className="contact-methods">
          <a href={`mailto:${profile.email}`}><i><Mail /></i><span><b><B en="Email" zh="邮箱" /></b><small>{profile.email}</small></span><ExternalLink /></a>
          <a href={profile.github} target="_blank" rel="noreferrer"><i><Github /></i><span><b>GitHub</b><small>github.com/XYDragon603</small></span><ExternalLink /></a>
          <div className="qr" aria-label={lang === 'en' ? 'Mesh WeChat QR code' : 'Mesh 的微信二维码'}>
            <img
              className="qr-code"
              src="/images/contact/wechat-source.jpg"
              alt={lang === 'en' ? 'Mesh WeChat QR code' : 'Mesh 的微信二维码'}
              width="635"
              height="607"
            />
          </div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <h2><B en="Send an Email" zh="发送邮件" /></h2>
          <label><B en="Name" zh="姓名" /><input name="name" required placeholder={lang === 'en' ? 'Your name' : '你的姓名'} /></label>
          <label><B en="Email" zh="邮箱" /><input type="email" name="email" required placeholder={lang === 'en' ? 'Your email' : '你的邮箱'} /></label>
          <label><B en="Message" zh="留言" /><textarea name="message" required rows={6} placeholder={lang === 'en' ? 'What would you like to discuss?' : '你想聊些什么？'} /></label>
          <button className="btn" type="submit"><Send /> <B en="Open Email App" zh="打开邮件应用" /></button>
          <p><B en="Submitting opens your email app with the message filled in." zh="提交后会打开你的邮件应用，并自动填好内容。" /></p>
        </form>
      </div>
    </section>
  );
}

export function NotFound() {
  return (
    <section className="not-found shell">
      <span>404</span>
      <h1><B en="Page not found" zh="没有找到这个页面" /></h1>
      <p><B en="The page may have moved, or the link may be incorrect." zh="页面可能已经移动，或者链接地址有误。" /></p>
      <Btn to="/"><B en="Back home" zh="返回首页" /></Btn>
    </section>
  );
}
