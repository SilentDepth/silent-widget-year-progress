import 'uno.css'
import { createApp, type Component } from 'vue'
import { inject } from '@vercel/analytics'

import './style.css'

inject()

export default function createWidget (App: Component) {
  const params = Object.fromEntries(new URL(location.href).searchParams.entries())
  createApp(App, params).mount('#app')
}
