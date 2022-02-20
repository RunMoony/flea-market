import type { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import TextArea from "@components/textarea";
import { useForm } from "react-hook-form";
import useMutation from "@libs/client/useMutation";
import { useEffect } from "react";
import { Product } from "@prisma/client";
import { useRouter } from "next/router";

interface UploadProductForm {
  name: string;
  price: number;
  description: string;
}

interface UploadProductMutation {
  ok: boolean;
  product: Product;
}

const Upload: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<UploadProductForm>();
  const [uploadProduct, { loading, data }] =
    useMutation<UploadProductMutation>("/api/products");
  const onValid = (data: UploadProductForm) => {
    if (loading) return;
    uploadProduct(data);
  };
  useEffect(() => {
    if (data?.ok) {
      router.push(`/products/${data.product.id}`);
    }
  }, [data, router]);
  return (
    <Layout canGoBack title='중고거래 글쓰기'>
      <form className='p-4 space-y-4' onSubmit={handleSubmit(onValid)}>
        <Input
          register={register("name", { required: true })}
          required
          label='글 제목'
          name='name'
          type='text'
        />
        <Input
          register={register("price", { required: true })}
          required
          label='가격'
          name='price'
          type='text'
          kind='price'
        />
        <TextArea
          register={register("description", { required: true })}
          name='description'
          label='내용'
          required
        />
        <Button text={loading ? "로딩중..." : "완료"} />
      </form>
    </Layout>
  );
};

export default Upload;
