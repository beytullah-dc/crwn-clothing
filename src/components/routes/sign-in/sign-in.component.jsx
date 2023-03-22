import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";

const Signin = () => {
  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button
        onClick={() => {
          logGoogleUser();
        }}
      >
        Giriş yap
      </button>
    </div>
  );
};

export default Signin;
