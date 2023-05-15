import {NextPageAuth} from '@/interfaces/page.interface';
import Register from "@/components/screens/register/Register";
import {useAppSelector} from '@/hooks';

const RegisterPage: NextPageAuth = () => {
    const {email} = useAppSelector(state => state.user);
    RegisterPage.isOnlyUser = !!email;
    return email ? <p>You are already registered</p> : <Register />;
}

export default RegisterPage;