import { GoogleOAuthProvider} from '@react-oauth/google';
import GoogleLogin from './GoogleLogin'

function App() {
    return (
        <GoogleOAuthProvider clientId="245270099555-8r0ukuu8lr24dfqoj2g357b976e6us9b.apps.googleusercontent.com">
            <GoogleLogin></GoogleLogin>
        </GoogleOAuthProvider>
    );
}

export default App;