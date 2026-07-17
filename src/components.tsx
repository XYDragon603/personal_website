import { useEffect, useState, type ReactNode } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  ChevronRight,
  Code2,
  Contact,
  Database,
  Download,
  ExternalLink,
  GitBranch,
  Mail,
  Menu,
  Moon,
  Pill,
  Sun,
  X,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useSite } from './App';
import type { Project } from './data/projects';

const Github = GitBranch;
const Linkedin = Contact;

export const Icon = {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  ChevronRight,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Pill,
};

export function Header() {
  const { lang, setLang } = useSite();
  const [dark, setDark] = useState(() => localStorage.theme === 'dark');
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    localStorage.theme = dark ? 'dark' : 'light';
  }, [dark]);

  useEffect(() => setOpen(false), [location]);

  const links = [
    ['/', lang === 'en' ? 'Home' : '首页'],
    ['/projects', lang === 'en' ? 'Projects' : '项目'],
    ['/about', lang === 'en' ? 'About' : '关于'],
    ['/contact', lang === 'en' ? 'Contact' : '联系'],
  ];

  return (
    <header className="header">
      <div className="nav shell">
        <Link to="/" className="logo" aria-label={lang === 'en' ? 'Yunlong home' : '云龙的首页'}>
          Yunlong<span>.</span>
        </Link>

        <nav className={open ? 'primary-nav open' : 'primary-nav'} aria-label={lang === 'en' ? 'Main navigation' : '主导航'}>
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'}>
              {label}
            </NavLink>
          ))}
          <a className="mobile-nav-resume" href="/resume/yunlong-li-resume.pdf" download>
            <Download /><span>{lang === 'en' ? 'Resume' : '简历'}</span>
          </a>
        </nav>

        <div className="nav-controls">
          <button className="language-switch" onClick={() => setLang(lang === 'en' ? 'zh' : 'en')} aria-label={lang === 'en' ? '切换到中文' : 'Switch to English'}>
            <span>{lang === 'en' ? 'EN' : '中文'}</span><i />{lang === 'en' ? '中文' : 'EN'}
          </button>
          <button className="icon-btn theme-toggle" onClick={() => setDark(!dark)} aria-label={dark ? (lang === 'en' ? 'Use light theme' : '切换浅色模式') : (lang === 'en' ? 'Use dark theme' : '切换深色模式')}>
            {dark ? <Sun /> : <Moon />}
          </button>
          <a className="btn nav-resume" href="/resume/yunlong-li-resume.pdf" download>
            {lang === 'en' ? 'Resume' : '简历'}
          </a>
        </div>

        <div className="mobile-actions">
          <button className="mobile-language" onClick={() => setLang(lang === 'en' ? 'zh' : 'en')} aria-label={lang === 'en' ? '切换到中文' : 'Switch to English'}>
            {lang === 'en' ? '中' : 'EN'}
          </button>
          <button className="icon-btn" onClick={() => setDark(!dark)} aria-label={dark ? (lang === 'en' ? 'Use light theme' : '切换浅色模式') : (lang === 'en' ? 'Use dark theme' : '切换深色模式')}>
            {dark ? <Sun /> : <Moon />}
          </button>
          <button className="icon-btn" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={lang === 'en' ? 'Toggle menu' : '展开菜单'}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="shell footer">
        <b>Yunlong.</b>
        <p><B en="Practical web, mobile and data-driven products." zh="网页、移动应用与数据系统。" /></p>
        <a className="footer-resume" href="/resume/yunlong-li-resume.pdf" download>
          <B en="Resume PDF" zh="下载简历" /> <Download />
        </a>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

export function B({ en, zh, className = '' }: { en: string; zh: string; className?: string }) {
  const { lang } = useSite();
  return <span className={className}>{lang === 'en' ? en : zh}</span>;
}

export function SectionTitle({ en, zh, action }: { en: string; zh: string; action?: ReactNode }) {
  return <div className="section-head"><h2><B en={en} zh={zh} /></h2>{action}</div>;
}

export function projectTitle(project: Project, lang: 'en' | 'zh') {
  return lang === 'en' ? project.title : project.titleZh;
}

export function categoryLabel(category: Project['category'], lang: 'en' | 'zh') {
  if (lang === 'en') return category;
  return { 'Full-stack': '全栈', Mobile: '移动端', Web: '网页', Coursework: '课程项目' }[category];
}

export function statusLabel(status: Project['status'], lang: 'en' | 'zh') {
  if (lang === 'en') return status;
  return { Deployed: '已部署', Completed: '已完成', 'In Development': '开发中' }[status];
}

export function Mockup({ tone = 'blue', mini = false }: { tone?: string; mini?: boolean }) {
  return (
    <div className={`mockup ${tone} ${mini ? 'mini' : ''}`} aria-label="Project interface preview">
      <div className="browser"><i /><i /><i /></div>
      <div className="dash">
        <aside><b>Y.</b><span /><span /><span /><span /></aside>
        <div className="dashmain">
          <div className="dash-title"><b>{tone === 'dark' ? 'DADAN' : tone === 'amber' ? 'ALMANAC' : 'Dashboard'}</b><i /></div>
          <div className="stats"><span /><span /><span /></div>
          <div className="chart"><svg viewBox="0 0 300 80" preserveAspectRatio="none"><path d="M0 65 C35 60,45 35,75 45 S120 60,145 24 S200 50,225 28 S270 42,300 12" fill="none" stroke="currentColor" strokeWidth="4" /></svg></div>
          <div className="rows"><i /><i /><i /></div>
        </div>
      </div>
    </div>
  );
}

export function ProjectVisual({ project, featured = false }: { project: Project; featured?: boolean }) {
  const { lang } = useSite();
  if (!project.cover) return <Mockup tone={project.tone} mini={!featured} />;
  return (
    <div key={`${project.slug}-${project.cover}`} className={`project-visual project-${project.slug}${featured ? ' featured-visual' : ''}`}>
      <div className="visual-toolbar" aria-hidden="true"><i /><i /><i /><span>{project.title}</span></div>
      <img
        className="project-image"
        src={project.cover}
        alt={`${projectTitle(project, lang)} ${lang === 'en' ? 'interface preview' : '界面预览'}`}
        loading="lazy"
      />
    </div>
  );
}

export function ProjectCard({ p }: { p: Project }) {
  const { lang } = useSite();
  return (
    <motion.article layout data-project={p.slug} className="project-card" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      <Link to={`/projects/${p.slug}`} className="cover"><ProjectVisual project={p} /></Link>
      <div className="card-body">
        <div className="eyebrow"><span>{categoryLabel(p.category, lang)}</span><em>{statusLabel(p.status, lang)}</em></div>
        <h3><Link to={`/projects/${p.slug}`}>{projectTitle(p, lang)}</Link></h3>
        <p>{lang === 'en' ? p.description : p.descriptionZh}</p>
        <div className="tags">{p.tech.map((item) => <span key={item}>{item}</span>)}</div>
        <Link className="case-link" to={`/projects/${p.slug}`}><B en="View project" zh="查看项目" /> <ArrowRight /></Link>
      </div>
    </motion.article>
  );
}

export function ArchitectureDiagram() {
  return (
    <div className="architecture">
      {[
        ['React Frontend', '前端界面', 'front'],
        ['Spring Boot REST API', '后端接口', 'back'],
        ['Hibernate ORM', '对象关系映射', 'orm'],
        ['PostgreSQL Database', '数据库', 'db'],
      ].map((node, index) => (
        <div key={node[0]}>{index > 0 && <ChevronRight className="down" />}<section className={node[2]}><b>{node[0]}</b><span>{node[1]}</span></section></div>
      ))}
    </div>
  );
}

export function EERDiagram() {
  const entities = [
    ['User', 'user_id PK', 'name', 'email', 'password'],
    ['Medication', 'medication_id PK', 'name', 'dosage', 'unit'],
    ['Schedule', 'schedule_id PK', 'user_id FK', 'medication_id FK', 'scheduled_time'],
    ['Dose Log', 'dose_log_id PK', 'schedule_id FK', 'taken_at', 'status'],
  ];
  return (
    <div className="eer">
      <svg aria-hidden="true"><path d="M180 80 H310 M415 125 V210 M180 250 H310 M75 125 V210" /></svg>
      {entities.map((entity, index) => <section className={`entity e${index}`} key={entity[0]}><b>{entity[0]}</b>{entity.slice(1).map((item) => <span key={item}>{item}</span>)}</section>)}
    </div>
  );
}
