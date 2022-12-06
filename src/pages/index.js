import { ScreenQuad } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import * as React from "react"

export default function Home() {
	return (
		<Canvas style={{width: '100vw', height: '100vh'}}>
			<ScreenQuad />
		</Canvas>
	)
}
