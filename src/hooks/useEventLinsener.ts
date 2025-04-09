import { watch } from 'vue'
import { onBeforeUnmount, onMounted } from 'vue'
import type { Ref } from 'vue'
import { isRef, unref } from 'vue'
export default function useEventLisener(
  target: EventTarget | Ref<EventTarget | null>,
  event: string,
  handler: (e: Event) => any
) {
  onMounted(() => {
    if (isRef(target)) {
      watch(target, (value, oldValue) => {
        oldValue?.removeEventListener(event, handler)
        value?.addEventListener(event, handler)
      })
    } else {
      target.addEventListener(event, handler)
    }
  })
  onBeforeUnmount(() => {
    unref(target)?.removeEventListener(event, handler)
  })
}
