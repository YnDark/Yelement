import { computed, ref } from 'vue'
const zIndex = ref(0)
const useZindex = (initialValue = 2000)=>{
  const initialZIndexValue = ref(initialValue)
  const currentIndex = computed(()=>zIndex.value)
  const nextZIndex = () =>{
    zIndex.value++
    return currentIndex.value
  }
  return {
    currentIndex,
    nextZIndex,
    initialZIndexValue
  }
}
export default useZindex
