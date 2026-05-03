import { NextResponse } from 'next/server'
import { auth } from './lib/auth'


export async function proxy(request) {

  const session = await auth.api.getSession({
    headers: request.headers
  })

  if (!session) {
    return NextResponse.redirect(
      new URL(`/signin?callbackUrl=${request.nextUrl.pathname}`, request.url)
    );
  }
  return NextResponse.next()



}

export const config = {
  matcher: ['/profile', '/update-profile', '/all-courses/:path']
}