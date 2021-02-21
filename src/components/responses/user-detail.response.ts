import { jsonObject, jsonMember } from 'typedjson';

@jsonObject
export class UserDetail
{
    @jsonMember({ constructor: Number })
    public id!: number;

    @jsonMember({ constructor: String })
    public name!: string;

    @jsonMember({ constructor: String })
    public username!: string;
}