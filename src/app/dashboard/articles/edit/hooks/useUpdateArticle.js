import articleApi from "@/services/api/articleApi";
import { useState } from "react";
import { toast } from "sonner";

const useUpdateArticle = () => {
  const [loading, setLoading] = useState(false);

  const updateArticle = async (id, data) => {
    try {
      setLoading(true);
      await articleApi.updateArticle(id, data);
      toast.success("Article updated Successfully");
    } catch (error) {
      toast.error(error.response?.data?.message);
      console.error("Error creating article:", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, updateArticle };
};

export default useUpdateArticle;
