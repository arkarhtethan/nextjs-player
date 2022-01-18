import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
const signedInRoutes = ['/', '/playlist', '/library']
export function middleware (req: NextRequest, ev: NextFetchEvent) {
    if (signedInRoutes.find(p => p === req.nextUrl.pathname)) {
        const token = req.cookies.KM_ACCESS_TOKEN;
        if (!token) {
            return NextResponse.redirect('/signin')
        }
    }
}