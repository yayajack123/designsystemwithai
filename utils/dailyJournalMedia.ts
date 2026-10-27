export const validateJournalVideo = (file: { name: string; type: string; size: number }) => {
  if (!/\.(mp4|mov)$/i.test(file.name) || (file.type && !['video/mp4', 'video/quicktime'].includes(file.type)))
    return 'Pilih video MP4 atau MOV.'
  if (file.size > 30 * 1024 * 1024)
    return 'Ukuran video maksimal 30 MB.'
  return ''
}

export const validateJournalMedia = (photoCount: number, hasVideo: boolean, processing: boolean, mode?: 'photo' | 'video') => {
  if (processing) return 'Tunggu proses video selesai sebelum melanjutkan.'
  if (mode === 'video' && !hasVideo) return 'Unggah video sebelum melanjutkan.'
  if (mode === 'photo' && photoCount === 0) return 'Unggah minimal satu foto sebelum melanjutkan.'
  if (!hasVideo && photoCount === 0) return 'Unggah minimal satu foto atau video sebelum melanjutkan.'
  return ''
}
