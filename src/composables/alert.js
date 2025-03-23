import { createVNode, render } from 'vue'
import AlertLayer from '@/components/common/AlertLayer.vue'

export function showAlert() {
    const show = (type, message, title = '') => {
        return new Promise((resolve) => {
            const container = document.createElement('div')
            document.body.appendChild(container)

            const vnode = createVNode(AlertLayer, {
                type,
                message,
                title,
                onConfirm: () => {
                    cleanup()
                    resolve(true)
                },
                onCancel: () => {
                    cleanup()
                    resolve(false)
                }
            })

            const cleanup = () => {
                render(null, container)
                document.body.removeChild(container)
            }

            render(vnode, container)
        })
    }

    return {
        alert: (message, title) => show('alert', message, title),
        confirm: (message, title) => show('confirm', message, title)
    }
}
