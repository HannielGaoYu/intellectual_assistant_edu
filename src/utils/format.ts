export const formatSize = (size: number) => {
  size = Number(size)
  size = size/1024
  return size.toFixed(2)
}

export const formatTime = (time: string) => {
  time = String(time)
  const newSizeForm = time.substring(0,10)
  return newSizeForm

}