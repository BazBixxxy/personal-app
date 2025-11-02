import articleApi from "@/services/api/articleApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useCreateAritcle = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const createArticle = async (data) => {
    try {
      setLoading(true);
      const res = await articleApi.createArticle(data);
      const response = res.data;
      toast.success("Article Created Successfully");
      navigate("/dashboard/home");
    } catch (error) {
      toast.error(error.response?.data?.message);
      console.error("Error creating article:", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, createArticle };
};

export default useCreateAritcle;
