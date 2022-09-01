import { NextRequest, NextResponse } from "next/server";

export const middleware = (_req, _res) => {
    const req = new NextRequest(_req);
    const res = new NextResponse(_res);
    console.log("=============================");
    console.log("IN MIDDLEWARE");
    console.log("--------- REQ --------");
    console.log(req);
    console.log("--------- RES --------");
    console.log(res);
    return NextResponse.next();
};
