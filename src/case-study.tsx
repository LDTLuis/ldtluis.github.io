import { mount } from './bootstrap';
import { CaseStudy } from './pages/CaseStudy';

mount(<CaseStudy />, (t) => t.caseStudy.metaTitle);
