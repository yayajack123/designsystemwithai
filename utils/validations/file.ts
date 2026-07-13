export const validateFileSize = (maxSize: number): (file: unknown) => boolean => {
  return (file: unknown) => {
    if (!file)
      return true

    if (file ! instanceof File)
      return false

    return (file as File).size <= maxSize * 1024
  }
}
