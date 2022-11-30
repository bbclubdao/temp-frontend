import { tw } from 'twind';
import Button from '@/components/button';

const productLinks = [`Features`, `Customers`, `Platform`, `Pricing`, `Enterprise`, `What's new?`];
const aboutLinks = [`About Us`, `Careers`, `Leadership`, `Blog`, `Events`, `Press`];
const resourceLinks = [
  `Get started`,
  `Guides`,
  `Tools`,
  `Case studies`,
  `Solutions`,
  `FAQs`,
  `Help Center`,
  `Training`,
  `Other resources`,
];

const Footer = () => (
  <footer className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
  </footer>
);

export default Footer;
