import { Typography } from "antd";

function AppFooter(){
  return <div className="AppFooter"> 
   <Typography.Link href="tel: +5414454433">  +5414454433 </Typography.Link>
  <Typography.Link href="https://www.google.com" target={'_blank'}>Privacy and Policy</Typography.Link>
  <Typography.Link  href="https://www.google.com" target={'_blank'}>Terms of Use</Typography.Link>

  </div>;

}
export default AppFooter;