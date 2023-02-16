import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import '../sign-up-form/sign-up-form.styles.scss';
import Button from '../button/button.component';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            console.log(`User created: ${user}`);
            const doc = await createUserDocumentFromAuth(user, { displayName });
            console.log(`Doc created: ${doc}`);
            resetFormFields();
        } catch (error) {
            console.log(error);
            if (error.code === 'auth/email-already-in-use') {
                alert('Email already in use!');
            }
            else {
                console.log('user creation encountered an error: ', error);
            }
        }

        console.log('submitted');
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign Up With Your Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                <Button buttonType='default' type="submit">Sign Up</Button>
            </form>
        </div>
    )
}
export default SignUpForm;