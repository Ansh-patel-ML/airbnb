"use client";
import useImageUpload from "@/app/hooks/useImageUpload";
import axios from "axios";
import Image from "next/image";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { TbPhotoPlus } from "react-icons/tb";
import { SyncLoader } from "react-spinners";

interface ImageUploadProps {
  value?: string;
  onChange: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ value, onChange }) => {
  const fileInputRef = useRef(null);
  const imageUploadLoader = useImageUpload();

  const handleClick = () => {
    //@ts-ignore
    fileInputRef.current.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      try {
        imageUploadLoader.setIsLoading(true);
        const currentFile = event.target.files[0];
        const response = await axios.post("/api/upload", {
          filename: currentFile.name,
        });
        const { data } = response;
        const res = await axios.put(data.url, currentFile, {
          headers: {
            "Content-Type": "image/jpeg",
          },
        });

        if (res?.status === 200) {
          toast.success("Image uploaded successfully");
          const imageUrl = `https://pub-${process.env.NEXT_PUBLIC_R2_IMAGE_KEY}.r2.dev/${currentFile.name}`;
          onChange(imageUrl);
        }
      } catch (error) {
        toast.error("Something went wrong");
      } finally {
        imageUploadLoader.setIsLoading(false);
      }
    }
  };

  return (
    <div
      className={`relative cursor-pointer hover:opacity-70 transition border-dashed border-2 border-neutral-300 text-neutral-600 flex flex-col gap-4 justify-center items-center ${
        value && !imageUploadLoader.isLoading ? "p-1" : "p-20"
      }`}
      onClick={handleClick}
    >
      {value && !imageUploadLoader.isLoading && (
        <Image src={value} alt="image" width={480} height={480} />
      )}
      {!value && !imageUploadLoader.isLoading && (
        <>
          <TbPhotoPlus size={50} />
          <div className="font-semibold text-lg">Click to upload</div>
        </>
      )}
      {imageUploadLoader.isLoading && (
        <SyncLoader
          loading={imageUploadLoader.isLoading}
          color="rgb(244 63 94)"
          speedMultiplier={0.5}
        />
      )}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
        disabled={imageUploadLoader.isLoading}
      />
    </div>
  );
};

export default ImageUpload;
