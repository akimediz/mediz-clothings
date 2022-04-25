import React from "react";
import './sign-up.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDoc } from "../../firebase/firebase.utils";

class SignUp extends React.Component{
    constructor(){
        super();

        this.state ={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async event=>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        if (password !== confirmPassword){
            alert('Password doen not match');
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            createUserProfileDoc(user,{displayName});

            this.setState({
                displayName:'',
            email:'',
            password:'',
            confirmPassword:''
            })
        }catch(err){
            console.error(err)
        }
    }

    handleChange = event=>{
       const {name,value} = event.target;
       this.setState({[name]:value});
    }
    render(){
        const {displayName,email,password,confirmPassword} = this.state
        return(
            <div className="sign-up">
            <h2>I do not have an account</h2>
            <span>sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput
                type='text'
                value={displayName}
                name='displayName'
                required
                label='Display Name'
                onChange={this.handleChange}
                />

                 <FormInput
                type='email'
                value={email}
                name='email'
                required
                label='Email'
                onChange={this.handleChange}
                />

                 <FormInput
                type='password'
                value={password}
                name='password'
                required
                label='Password'
                onChange={this.handleChange}
                />

                 <FormInput
                type='password'
                value={confirmPassword}
                name='confirmPassword'
                required
                label='Confirm Password'
                onChange={this.handleChange}
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>

            </div>
        )
    }
}

export default SignUp;