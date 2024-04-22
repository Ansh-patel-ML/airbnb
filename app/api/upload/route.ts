import { NextResponse } from "next/server";

import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import { r2 } from "@/app/libs/R2";
import toast from "react-hot-toast";

export async function POST(request: Request) {
  const body = await request.json();
  try {
    const signedUrl = await getSignedUrl(
      r2,
      new PutObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME,
        Key: body.filename,
      }),
      { expiresIn: 3000 }
    );

    return NextResponse.json({ url: signedUrl });
  } catch (err) {
    toast.error("Error");
  }
}
