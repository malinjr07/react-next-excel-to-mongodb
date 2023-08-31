import { MongoClient } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const res = await request.json();
  const { urlString, collection } = res;
  const urlArr: string[] = urlString.split('/');
  const urlOnlyArr = [...urlArr];
  urlOnlyArr.pop();
  const urlOnly = urlOnlyArr.join('/');
  if (urlArr.length === 4 && collection) {
    try {
      const client = await MongoClient.connect(urlOnly);
      const db = client.db(urlArr.at(-1));
      return NextResponse.json(
        { success: 'Yay! MongoDB connected!' },
        { status: 200 }
      );
    } catch (error) {
      console.error('error found', error);
      return NextResponse.json(
        { error: 'error found!:' + error },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { error: 'No Valid MongoDB URL or Collection Name Found' },
      { status: 500 }
    );
  }

  //   const collection = db.collection('DATA');
  //   const data = await collection.find().limit(5000).toArray();
  //   client.close();

  // return { db, client };
}

