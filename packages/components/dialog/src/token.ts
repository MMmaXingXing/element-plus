import type { ComputedRef, CSSProperties, InjectionKey, Ref } from 'vue'
import type { useNamespace } from '@element-plus/hooks'

export type DialogContext = {
  dialogRef: Ref<HTMLElement | undefined>
  headerRef: Ref<HTMLElement | undefined>
  ns: ReturnType<typeof useNamespace>
  rendered: Ref<boolean>
  style: ComputedRef<CSSProperties>
}

export const elDialogInjectionKey: InjectionKey<DialogContext> = Symbol(
  'elDialogInjectionKey'
)