<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useGetDetailProduct } from '@/composables/useGetDetailProduct'
import { onMounted } from 'vue'
import { useForm, Field, Form, ErrorMessage } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { updateProductSchema, type UpdateProductSchemaType } from './Schema'
import { updateProduct } from '@/api/product'
import { watch } from 'vue'

const route = useRoute()
const productId = route.params.id

const productDetail = useGetDetailProduct()

const { handleSubmit, setValues, values } = useForm<UpdateProductSchemaType>({
  validationSchema: toTypedSchema(updateProductSchema),
})

// onMounted — chạy 1 lần duy nhất khi component được mount, mục đích là lấy data về để điền vào form
onMounted(() => {
  productDetail.fetchProductDetail(Number(productId))
  // setValues(productDetail?.productDetail as UpdateProductSchemaType)
})

// watch — chạy mỗi khi productDetail.productDetail thay đổi, mục đích là cập nhật lại giá trị của form khi data mới về
watch(
  () => productDetail.productDetail,
  (newVal) => {
    if (newVal) {
      setValues(newVal as UpdateProductSchemaType)
    }
  },
)

// onSubmit — chạy khi user bấm submit, mục đích là gửi data đã chỉnh sửa lên server
const onSubmit = handleSubmit(async (values) => {
  try {
    const rest = await updateProduct(Number(productId), values)
    console.log('Product updated successfully:', rest)
  } catch (err) {
    console.error('Failed to update product:', err)
  }
})
</script>

<template>
  <div class="container mx-auto px-4 py-8 min-h-screen">
    <form
      novalidate
      @submit="onSubmit"
      v-if="!productDetail.loading"
      class="max-w-2xl mx-auto bg-white rounded-md shadow-md p-6"
    >
      <p class="flex items-center justify-center text-2xl font-bold mb-4 text-blue-500">
        Update Product
      </p>
      <div class="mb-4">
        <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
        <Field
          :value="values.title"
          name="title"
          id="title"
          class="mt-1 block w-full rounded-md px-3 py-2 border border-gray-300"
        />
        <ErrorMessage name="title" class="text-red-500 text-sm mt-1" />
      </div>

      <div class="mb-4">
        <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
        <Field
          :value="values.price"
          name="price"
          id="price"
          type="number"
          class="mt-1 block w-full rounded-md px-3 py-2 border border-gray-300"
        />
        <ErrorMessage name="price" class="text-red-500 text-sm mt-1" />
      </div>

      <div class="mb-4">
        <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
        <Field
          :value="values.description"
          name="description"
          id="description"
          as="textarea"
          rows="4"
          class="mt-1 block w-full rounded-md px-3 py-2 border border-gray-300"
        />
        <ErrorMessage name="description" class="text-red-500 text-sm mt-1" />
      </div>

      <!-- <button v-if="productDetail.loading" type="submit" class="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Updating...
      </button> -->
      <button
        type="submit"
        class="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Update Product
      </button>
    </form>
    <div class="flex justify-center items-center min-h-screen" v-else>Loading...</div>
  </div>
</template>
