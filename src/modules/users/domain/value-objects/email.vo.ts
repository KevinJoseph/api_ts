import { Result, err, ok } from "neverthrow";
import { EmailInvalidException } from "../exceptions/domain.exception";

export type EmailResult = Result<EmailVO, EmailInvalidException>

export class EmailVO {
    private value: string
    static readonly patternEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    private constructor(email: string){
        this.value = email
    }

    static create(email: string): EmailResult{
        if(!this.patternEmail.test(email)){
            return err(new EmailInvalidException(email))
        }
        return ok(new EmailVO(email))
    }

    getValue(): string{
        return this.value
    }
}