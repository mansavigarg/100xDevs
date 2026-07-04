import jwt from "jsonwebtoken"
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest){
    // const headers = req.headers
    // const authorizationHeader = headers["authorization"]
    // const decoded = jwt.decode(authorizationHeader, "SECRET")
    // const userId = decoded.userId;

    // hit the db to get the proflie picture 

    return NextResponse.json({
        avatarURL : "http://images.google.com/cat.png"
    })
}