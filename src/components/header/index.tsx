import { tw, css } from 'twind/css';
import Button from '@/components/button';
import Netlify from '@/constants/svg/netlify.svg';
import Nike from '@/constants/svg/nike.svg';
import Figma from '@/constants/svg/figma.svg';
import Aws from '@/constants/svg/aws.svg';
import Flow from '@/constants/svg/flowlogo.svg'
import IPFS from '@/constants/svg/ipfs.svg'
import Emerald from '@/constants/svg/emerald.svg'

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-36 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}>
        BB Club DAO
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
          Coming soon...
        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <Button primary><a href="https://docs.google.com/document/d/1I8pjYCkShKV31fmnulon9tZqgXSyAyz7gP1x5rGt7nQ/edit?usp=sharing">Learn more</a></Button>
        <span className={tw(`mx-2`)}>or</span>
        <Button><a href='mailto:bbclubdao@gmail.com'>Contact us</a></Button>
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`w-full`)}>
        <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}>Powered by</p>
          <Flow className={tw(`m-12 mb-8`)} width={120} />
          {/* <IPFS className={tw(`m-12`)} width={140} />
          <Emerald className={tw(`m-12`)} width={140} />
          <Figma className={tw(`m-12`)} width={140} /> */}
        </div>
      </div>
    </div>
  </header>
);

export default Header;
