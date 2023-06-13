import axios from "axios";

class CloudinaryUploader {
  private file: File | null = null;
  private uploadedUrl: string | null = null;

  setFile(file: File | null) {
    this.file = file;
  }

  async upload() {
    if (!this.file) return;

    const formData = new FormData();
    formData.append("file", this.file);
    formData.append("upload_preset", "r9rqkvzr");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/matosr96/image/upload",
        formData
      );
      this.uploadedUrl = res.data.url;
    } catch (err) {
      console.error(err);
    }
  }

  getUrl() {
    return this.uploadedUrl;
  }
}

export default CloudinaryUploader;
