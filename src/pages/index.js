import { OrthographicCamera, ScreenQuad } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import * as React from "react"

export default function Home() {
	/// Plane example
	
	// return (
	// 	<Canvas>
	// 		<OrthographicCamera left={-1} right={1} top={1} bottom={-1} near={0} far={1} />
	// 		<mesh>
	// 			<planeGeometry args={[2, 2]} />
	// 			<meshBasicMaterial color="grey" />
	// 		</mesh>
	// 	</Canvas>
	// )
		
	/// ScreenQuad example

	return (
		<Canvas style={{width: '100vw', height: '100vh'}}>
			<ScreenQuad />
		</Canvas>
	)
}
