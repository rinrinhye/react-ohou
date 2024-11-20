import { HideMobile, LargeDesktop } from 'styles/react-responsive';

export default function AuthLinks() {
  return (
    <HideMobile>
      <div className='header__auth-group sm-hidden'>
        <a href=''>로그인</a>
        <a href=''>회원가입</a>
        <LargeDesktop>
          <Link
            to=''
            className='xl-only'
          >
            고객센터
          </Link>
        </LargeDesktop>
      </div>
    </HideMobile>
  );
}
