import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import useCreateAritcle from "../hooks/useCreateArticle";

export default function ArticleForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(false);
  const { loading, createArticle } = useCreateAritcle();

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      toast.error("Please fill out title and content first.");
      return;
    }
    setPreview(true);

    const data = { title, content, images };
    await createArticle(data);
  };

  const handleReset = () => {
    setTitle("");
    setContent("");
    setImages([]);
    setImageUrl("");
    setPreview(false);
  };

  /** Upload logic — improved for UX consistency */
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    setUploading(true);
    const validImages = [];

    files.forEach((file) => {
      if (!file.type.startsWith("image/")) {
        toast.error(`"${file.name}" is not a valid image`);
        return;
      }
      const reader = new FileReader();
      reader.onload = (ev) => {
        validImages.push(ev.target.result);
        if (validImages.length === files.length) {
          setImages((prev) => [...prev, ...validImages]);
          setUploading(false);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleAddImageUrl = () => {
    if (!imageUrl.trim()) return;
    try {
      const url = new URL(imageUrl.trim());
      setImages((prev) => [...prev, url.href]);
      setImageUrl("");
      toast.success("Image added successfully");
    } catch {
      toast.error("Please enter a valid image URL");
    }
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
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
            {images.length > 0 && (
              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
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
            {/* Title */}
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter article title..."
              />
            </div>

            {/* Content */}
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

            {/* Enhanced Image Upload Area */}
            <div>
              <Label>Images</Label>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="file"
                    accept="image/*"
                    multiple
                    disabled={uploading}
                    onChange={handleFileUpload}
                  />
                  <div className="flex gap-2 w-full">
                    <Input
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="Or paste image URL..."
                    />
                    <Button
                      type="button"
                      onClick={handleAddImageUrl}
                      disabled={!imageUrl.trim()}
                    >
                      Add
                    </Button>
                  </div>
                </div>

                {uploading && (
                  <p className="text-sm text-muted-foreground">Uploading...</p>
                )}

                {images.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {images.map((img, i) => (
                      <div
                        key={i}
                        className="relative group rounded overflow-hidden border"
                      >
                        <img
                          src={img}
                          alt={`Upload ${i + 1}`}
                          className="w-full h-28 object-cover"
                        />
                        {i === 0 && (
                          <span className="absolute top-1 left-1 bg-primary text-white text-xs px-2 py-0.5 rounded">
                            Main
                          </span>
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
              disabled={loading || uploading}
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
