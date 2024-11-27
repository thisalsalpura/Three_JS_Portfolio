import React, { useEffect, useRef } from 'react'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'

const Developer = ({ animationName = 'idle', ...props }) => {

    const group = useRef();

    const { nodes, materials } = useGLTF('/models/human/player.glb')

    const { animations: idleAnimation } = useFBX('/models/animations/idle.fbx')
    const { animations: dance1Animation } = useFBX('/models/animations/dance1.fbx')
    const { animations: dance2Animation } = useFBX('/models/animations/dance2.fbx')
    const { animations: dance3Animation } = useFBX('/models/animations/dance3.fbx')

    idleAnimation[0].name = 'idle';
    dance1Animation[0].name = 'dance1';
    dance2Animation[0].name = 'dance2';
    dance3Animation[0].name = 'dance3';

    const { actions } = useAnimations([idleAnimation[0], dance1Animation[0], dance2Animation[0], dance3Animation[0]], group);

    useEffect(() => {
        actions[animationName].reset().fadeIn(0.5).play();

        return () => actions[animationName].fadeOut(0.5);
    }, [animationName])

    return (
        <group {...props} dispose={null} ref={group}>
            <primitive object={nodes.Hips} />
            <skinnedMesh
                name="EyeLeft"
                geometry={nodes.EyeLeft.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeLeft.skeleton}
                morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
            />
            <skinnedMesh
                name="EyeRight"
                geometry={nodes.EyeRight.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeRight.skeleton}
                morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Head"
                geometry={nodes.Wolf3D_Head.geometry}
                material={materials.Wolf3D_Skin}
                skeleton={nodes.Wolf3D_Head.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Teeth"
                geometry={nodes.Wolf3D_Teeth.geometry}
                material={materials.Wolf3D_Teeth}
                skeleton={nodes.Wolf3D_Teeth.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Hair.geometry}
                material={materials.Wolf3D_Hair}
                skeleton={nodes.Wolf3D_Hair.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Top.geometry}
                material={materials.Wolf3D_Outfit_Top}
                skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                material={materials.Wolf3D_Outfit_Bottom}
                skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                material={materials.Wolf3D_Outfit_Footwear}
                skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Body.geometry}
                material={materials.Wolf3D_Body}
                skeleton={nodes.Wolf3D_Body.skeleton}
            />
        </group>
    )
}

useGLTF.preload('/models/human/player.glb')

export default Developer;
