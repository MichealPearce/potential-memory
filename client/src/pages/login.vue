<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAPI } from '../plugins/api'
import { useAuth } from '../plugins/auth'

export default defineComponent({
	name: 'LoginPage',
})
</script>

<script lang="ts" setup>
const api = useAPI()
const auth = useAuth()
const router = useRouter()

const creds = reactive({
	username: '',
	password: '',
})

async function login(event: Event) {
	event.preventDefault()

	try {
		const result = await api.post<string>('/auth', creds)
		auth.current = result.data

		router.push('/')
	} catch (error) {
		console.error(error)
	}
}
</script>

<template>
	<ConstructPage class="login-page">
		<form @submit="login">
			<h3>Login</h3>

			<input
				v-model="creds.username"
				name="username"
				type="username"
			/>
			<input
				v-model="creds.password"
				name="password"
				type="password"
			/>

			<button type="submit">Login</button>
		</form>
	</ConstructPage>
</template>

<style lang="scss" scoped>
.login-page {
}
</style>
