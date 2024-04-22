import { create } from "zustand";

interface ImageUpload {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

const useImageUpload = create<ImageUpload>((set) => ({
  isLoading: false,
  setIsLoading(value) {
    set({
      isLoading: value,
    });
  },
}));

export default useImageUpload;
