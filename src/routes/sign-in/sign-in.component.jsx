import {
  signInWithGooglePopup,
  createUserDocumentfromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUp from '../../components/sign-up/sign-up-for.component';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentfromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUp />
    </div>
  );
};

export default SignIn;
