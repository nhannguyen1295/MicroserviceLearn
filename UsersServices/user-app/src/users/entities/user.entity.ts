import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User{
    @Prop()
    name: string;

    @Prop({required: true})
    accountName: string;

    @Prop({required: true})
    password: string;
    
    @Prop()
    salt: string
}

export const UserSchema = SchemaFactory.createForClass(User)