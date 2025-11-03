import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import useCreateAritcle from "../hooks/useCreateArticle";
import { useEdgeStore } from "@/context/edgestore-context";

export default function ArticleForm() {
  const { edgestore } = useEdgeStore();
  const { loading, createArticle } = useCreateAritcle();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [previewImages, setPreviewImages] = useState([]); // local preview (File objects or URLs)
  const [uploadedImages, setUploadedImages] = useState([]); // URLs after upload
  const [imageUrlInput, setImageUrlInput] = useState("");
  const [preview, setPreview] = useState(false);
  const [uploadingMap, setUploadingMap] = useState({}); // tracks uploading state per image

  // --- handle file selection and preview ---
  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      uploadedUrl: null,
    }));
    setPreviewImages((prev) => [...prev, ...previews]);
  };

  // --- handle manual URL addition ---
  const handleAddImageUrl = () => {
    if (!imageUrlInput.trim()) return;
    try {
      const url = new URL(imageUrlInput.trim());
      setPreviewImages((prev) => [
        ...prev,
        { file: null, preview: url.href, uploadedUrl: url.href },
      ]);
      setUploadedImages((prev) => [...prev, url.href]);
      setImageUrlInput("");
      toast.success("Image added successfully");
    } catch {
      toast.error("Please enter a valid URL");
    }
  };

  // --- upload a single image ---
  const uploadImage = async (index) => {
    const img = previewImages[index];
    if (!img.file) return; // already a URL

    setUploadingMap((prev) => ({ ...prev, [index]: true }));

    try {
      const res = await edgestore.myPublicImages.upload({ file: img.file });
      const updatedPreviews = [...previewImages];
      updatedPreviews[index].uploadedUrl = res.url;
      setPreviewImages(updatedPreviews);

      setUploadedImages((prev) => [...prev, res.url]);
      toast.success("Image uploaded successfully");
    } catch (err) {
      console.error("Upload error:", err);
      toast.error("Failed to upload image");
    } finally {
      setUploadingMap((prev) => ({ ...prev, [index]: false }));
    }
  };

  const removeImage = (index) => {
    const updatedPreviews = previewImages.filter((_, i) => i !== index);
    setPreviewImages(updatedPreviews);

    const updatedUploaded = uploadedImages.filter(
      (url) => url !== previewImages[index].uploadedUrl
    );
    setUploadedImages(updatedUploaded);
  };

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      toast.error("Please fill out title and content");
      return;
    }

    // Ensure all images are uploaded
    const notUploaded = previewImages.filter(
      (img) => img.file && !img.uploadedUrl
    );
    if (notUploaded.length > 0) {
      toast.error("Please upload all images before submitting");
      return;
    }

    const data = {
      title,
      content,
      images: uploadedImages, // only uploaded URLs
    };

    setPreview(true);
    await createArticle(data);
  };

  const handleReset = () => {
    setTitle("");
    setContent("");
    setPreviewImages([]);
    setUploadedImages([]);
    setImageUrlInput("");
    setPreview(false);
    setUploadingMap({});
  };

  if (preview) {
    return (
      <div className="max-w-7xl mx-auto py-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none whitespace-pre-wrap">
              {content}
            </div>
            {uploadedImages.length > 0 && (
              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                {uploadedImages.map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt={`Article image ${i + 1}`}
                    className="rounded-lg w-full object-cover"
                  />
                ))}
              </div>
            )}
            <div className="mt-6 flex gap-3">
              <Button onClick={() => setPreview(false)}>Edit</Button>
              <Button onClick={handleReset} variant="outline">
                New Article
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-6">
      <Card>
        <CardHeader>
          <CardTitle>Write an Article</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter article title..."
              />
            </div>

            <div>
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your article here..."
                rows={20}
              />
            </div>

            <div>
              <Label>Images</Label>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileSelect}
                  />
                  <div className="flex gap-2 w-full">
                    <Input
                      value={imageUrlInput}
                      onChange={(e) => setImageUrlInput(e.target.value)}
                      placeholder="Or paste image URL..."
                    />
                    <Button
                      type="button"
                      onClick={handleAddImageUrl}
                      disabled={!imageUrlInput.trim()}
                    >
                      Add
                    </Button>
                  </div>
                </div>

                {previewImages.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {previewImages.map((img, i) => (
                      <div
                        key={i}
                        className="relative group rounded overflow-hidden border"
                      >
                        <img
                          src={img.preview}
                          alt={`Preview ${i + 1}`}
                          className="w-full h-28 object-cover"
                        />
                        {!img.uploadedUrl && img.file && (
                          <Button
                            size="sm"
                            className="absolute bottom-1 left-1"
                            onClick={() => uploadImage(i)}
                            disabled={uploadingMap[i]}
                          >
                            {uploadingMap[i] ? "Uploading..." : "Upload"}
                          </Button>
                        )}
                        <Button
                          size="sm"
                          variant="destructive"
                          className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => removeImage(i)}
                        >
                          ×
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <Button
              onClick={handleSubmit}
              disabled={loading || Object.values(uploadingMap).some(Boolean)}
              className="w-full"
            >
              {loading ? "Saving..." : "Preview Article"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
