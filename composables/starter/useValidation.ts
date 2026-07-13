import { type Ref, nextTick, ref, watch } from 'vue'
import type { InferType, Schema } from 'yup'
import { ValidationError } from 'yup'

export interface ValidationConfigs {
  schema: Schema
}

export const useValidation = (inputs: Ref, configs: ValidationConfigs) => {
  const { schema } = configs

  const errors: Ref<InferType<Schema>> = ref({})
  const isError: Ref<boolean> = ref(false)

  const initialState: Ref<InferType<Schema>> = ref({})

  const dirty: Ref<boolean> = ref(false)
  const dirtyInputs: Ref<{ [key: string]: boolean }> = ref({})

  const initialize = () => {
    initialState.value = JSON.parse(JSON.stringify(inputs.value))

    for (const key in initialState.value)
      dirtyInputs.value[key] = false
  }

  onMounted(() => {
    initialize()
  })

  const resetForm = async (data?: { [key: string]: unknown }, withInitialValue = true) => {
    if (withInitialValue)
      inputs.value = JSON.parse(JSON.stringify(initialState.value))

    if (data) {
      for (const key in data)
        inputs.value[key] = data[key]
    }

    await nextTick()

    errors.value = {}
    isError.value = false

    dirtyInputs.value = {}
    dirty.value = false
  }

  const errorMapper = (errorList: ValidationError) => {
    const partial = () => {
      errors.value = {}

      errorList.inner.forEach((item: ValidationError) => {
        if (item.path && dirtyInputs.value[item.path]) {
          isError.value = true
          errors.value[item.path] = item.errors[0]
        }
      })
    }

    const all = () => {
      errors.value = {}

      for (const key in dirtyInputs.value)
        dirtyInputs.value[key] = true

      errorList.inner.forEach((item: ValidationError) => {
        if (item.path) {
          isError.value = true
          errors.value[item.path] = item.errors[0]
        }
      })
    }

    return {
      partial,
      all,
    }
  }

  const validate = async () => {
    try {
      await schema.validate(inputs.value, {
        abortEarly: false,
        strict: false,
      })
      isError.value = false
      errors.value = {}
    }
    catch (error: unknown) {
      if (error instanceof ValidationError)
        errorMapper(error).all()
      else
        console.error(error)
    }

    await nextTick()
  }

  watch(
    inputs,
    async newValue => {
      try {
        dirty.value = true

        for (const key in newValue) {
          if (newValue[key] !== initialState.value[key])
            dirtyInputs.value[key] = true
        }

        await schema.validate(newValue, {
          abortEarly: false,
          strict: false,
        })
        isError.value = false
        errors.value = {}
      }
      catch (error: unknown) {
        if (error instanceof ValidationError)
          errorMapper(error).partial()
        else
          console.error(error)
      }
    },
    { deep: true },
  )

  return {
    // variables
    errors,
    isError,
    dirty,
    dirtyInputs,

    // functions
    resetForm,
    validate,
  }
}
