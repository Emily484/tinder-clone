import React, { useContext } from 'react'
import { AccountContext } from './accountContext';
import { 
    BoxContainer, 
    FormContainer, 
    Input, 
    MutedLink, 
    SubmitButton, 
    BoldLink 
} from './common';
import { Marginer } from "../marginer";

export default function SignupForm(props) {

    const { switchToSignin } = useContext(AccountContext);

    return (
        <BoxContainer>
            <FormContainer> 
                <Input type="text" placeholder="First Name" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm Password" />
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <SubmitButton type="submit">Signup</SubmitButton>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#">
                Already an account?
                <BoldLink href="#" onClick={switchToSignin}>
                    Login
                </BoldLink>
            </MutedLink>
        </BoxContainer>
    );
}