import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) =>{
    const recipient = [{email}];

    try{
        const response = await mailtrapClient.send({
            from:sender,
            to:recipient,
            subject:"Verification your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification",  
        })
        console.log("Email send successfully", response);
        
    }catch(error){
        console.error('Error seding verification', error.message);
        throw new Error(`Error sending verification email: ${error}`)
        
    }
}
export const sendWelcomeEmail = async (email, name) =>{
    const recipient = [{email}];
    try{
        const response = await mailtrapClient.send({
            from:sender,
            to:recipient,
            template_uuid: "57078dcb-ab67-4ae6-b4a7-580636e511cf",
            template_variables: {
                company_info_name: "Auth Testing",
                name: name,
              }
        })

        console.log(" Welcome email sent  successfully",response);
        
    }catch(err){
        console.log("Error sending welcome email", err);

        throw new Error(`Error sending welcome email: ${err}`);

    }
}
export const sendPasswordResetEmail = async (email, resetURL) =>{
    const recipient = [{email}];
    try{
        const response = await mailtrapClient.send({
            from:sender,
            to:recipient,
            subject:"Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password Reset",
        })
    }catch(err){
        console.log("Error sending password reset email", err);
        throw new Error(`Error sending password reset email: ${err}`);

    }
}
export const sendResetSuccessEmail = async (email) =>{
    const recipient = [{email}];
    try{
        const response = await mailtrapClient.send({
            from:sender,
            to: recipient,
            subject: "Password reset successful",
            html:PASSWORD_RESET_SUCCESS_TEMPLATE,
            category:"Password Reset"
        })

        console.log("Password reset email sent successfully", response);
        
    }catch(err){
        console.log("Error is sending successful reset password email", err);
        throw new Error(`Error in sending successful reset password email: ${err}`)
        
    }
}