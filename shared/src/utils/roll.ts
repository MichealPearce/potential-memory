export type Rollable = Promise<void> | void

export type RollableFunction = () => Rollable

export function roll(calls: RollableFunction[]) {
	let rolling: Rollable

	for (const call of calls) {
		if (rolling instanceof Promise) rolling = rolling.then(call)
		else rolling = call()
	}

	return rolling
}
