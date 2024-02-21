import { Controller, Post, Req } from "@nestjs/common";
import { METHODS } from "http";
import { Request } from "express"
 
export interface CarringtonDto{
    readonly description: string;
    readonly isDone: boolean;
}
@Controller()
export class CarringtonController{
    @Post()
    methods(@Req() req: Request): string {
        return `method ${req.method}`;
    }
}


