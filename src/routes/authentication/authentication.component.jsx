import SignUp from '../../components/sign-up/sign-up-for.component';
import SignIn from '../../components/sign-in-form/sign-in-for.component';
import './authentication.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
