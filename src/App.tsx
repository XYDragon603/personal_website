import {createContext,useContext,useEffect,useState} from 'react';
import {Routes,Route,useLocation} from 'react-router-dom';
import {Lang} from './data/translations';
import {Header,Footer} from './components';
import {Home,ProjectsPage,ProjectDetail,About,Contact,NotFound} from './pages';
type Ctx={lang:Lang;setLang:(l:Lang)=>void};
export const SiteContext=createContext<Ctx>({lang:'en',setLang:()=>{}});
export const useSite=()=>useContext(SiteContext);
function ScrollTop(){const {pathname}=useLocation();useEffect(()=>{window.scrollTo(0,0)},[pathname]);return null}
export default function App(){const [lang,setLang]=useState<Lang>(()=>{const requested=new URLSearchParams(window.location.search).get('lang');return requested==='zh'||requested==='en'?requested:(localStorage.getItem('lang') as Lang)||'en'});useEffect(()=>{localStorage.setItem('lang',lang);document.documentElement.lang=lang==='zh'?'zh-CN':'en';document.documentElement.dataset.lang=lang},[lang]);return <SiteContext.Provider value={{lang,setLang}}><ScrollTop/><Header/><main><Routes><Route path="/" element={<Home/>}/><Route path="/projects" element={<ProjectsPage/>}/><Route path="/projects/:slug" element={<ProjectDetail/>}/><Route path="/about" element={<About/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes></main><Footer/></SiteContext.Provider>}
