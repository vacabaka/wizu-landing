import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        const { error } = await supabase
            .from('waitlist')
            .insert({ email });

        if (error) {
            // Check for duplicate key error (code 23505 in Postgres)
            if (error.code === '23505') {
                return NextResponse.json({ message: 'You are already on the waitlist!' }, { status: 200 });
            }
            console.error('Supabase error:', error);
            return NextResponse.json({ error: 'Failed to join waitlist' }, { status: 500 });
        }

        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
