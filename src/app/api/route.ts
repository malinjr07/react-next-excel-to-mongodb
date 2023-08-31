import { MongoClient } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const res = await request.json();
  const { urlString } = res;
  const urlArr = urlString.split('/');
  if (urlArr.length === 4) {
    const client = await MongoClient.connect(urlString);
    const db = client.db(urlArr.at(-1));
    return NextResponse.json({ client, db });
  } else {
    return NextResponse.json(
      { error: 'No Valid Mongo DB URL Found' },
      { status: 500 }
    );
  }

  //   const collection = db.collection('DATA');
  //   const data = await collection.find().limit(5000).toArray();
  //   client.close();

  // return { db, client };
}

