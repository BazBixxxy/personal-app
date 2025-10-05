import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ArticleForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [preview, setPreview] = useState(false);

  const handleSubmit = () => {
    if (title && content) {
      setPreview(true);
    }
  };

  const handleReset = () => {
    setTitle("");
    setContent("");
    setImages([]);
    setImageUrl("");
    setPreview(false);
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImages((prev) => [...prev, e.target.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleAddImageUrl = () => {
    if (imageUrl) {
      setImages((prev) => [...prev, imageUrl]);
      setImageUrl("");
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
              <div className="mt-6 grid grid-cols-2 gap-4">
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Article image ${i + 1}`}
                    className="rounded-lg w-full"
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
                <div>
                  <Input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileUpload}
                  />
                </div>
                <div className="flex gap-2">
                  <Input
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="Or paste image URL..."
                  />
                  <Button type="button" onClick={handleAddImageUrl}>
                    Add
                  </Button>
                </div>
              </div>
              {images.length > 0 && (
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {images.map((img, i) => (
                    <div key={i} className="relative group">
                      <img
                        src={img}
                        alt={`Upload ${i + 1}`}
                        className="rounded w-full h-24 object-cover"
                      />
                      <Button
                        size="sm"
                        variant="destructive"
                        className="absolute top-1 right-1 opacity-0 group-hover:opacity-100"
                        onClick={() => removeImage(i)}
                      >
                        ×
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Button onClick={handleSubmit} className="w-full">
              Preview Article
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
